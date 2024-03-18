use super::{token::Token, tokenizer::Tokenizer};

#[derive(Debug, PartialEq, PartialOrd)]
pub enum OperPrec {
    DefaultZero,
    AddSub,
    MulDiv,
    Power,
    Negative,
}

#[derive(Debug)]
pub enum ParserError {
    UnableParser(String),
    InvalidOperator(String),
}

#[derive(Debug, Clone)]
pub enum Node {
    Add(Box<Node>, Box<Node>),
    Subtract(Box<Node>, Box<Node>),
    Multiply(Box<Node>, Box<Node>),
    Divide(Box<Node>, Box<Node>),
    Caret(Box<Node>, Box<Node>),
    Negative(Box<Node>),
    Number(f64),
}

pub struct Parser<'a> {
    tokenizer: Tokenizer<'a>,
    current_token: Token,
}

impl<'a> Parser<'a> {
    pub fn new(expr: &'a str) -> Result<Self, ParserError> {
        let mut lexer = Tokenizer::new(expr);

        let current_token = match lexer.next() {
            Some(token) => token,
            None => return Err(ParserError::InvalidOperator("Invalid character".into())),
        };

        Ok(Parser {
            tokenizer: lexer,
            current_token,
        })
    }

    pub fn parse(&mut self) -> Result<Node, ParserError> {
        let ast = self.generate_ast(OperPrec::DefaultZero);

        match ast {
            Ok(ast) => Ok(ast),
            Err(e) => Err(e),
        }
    }

    fn convert_token_to_node(&mut self, left_expr: Node) -> Result<Node, ParserError> {
        match self.current_token {
            Token::Add => {
                self.get_next_token()?;
                let right_expr = self.generate_ast(OperPrec::AddSub)?;
                Ok(Node::Add(Box::new(left_expr), Box::new(right_expr)))
            }
            Token::Subtract => {
                self.get_next_token()?;
                let right_expr = self.generate_ast(OperPrec::AddSub)?;
                Ok(Node::Subtract(Box::new(left_expr), Box::new(right_expr)))
            }
            Token::Multiply => {
                self.get_next_token()?;
                let right_expr = self.generate_ast(OperPrec::MulDiv)?;
                Ok(Node::Multiply(Box::new(left_expr), Box::new(right_expr)))
            }
            Token::Divide => {
                self.get_next_token()?;
                let right_expr = self.generate_ast(OperPrec::MulDiv)?;
                Ok(Node::Divide(Box::new(left_expr), Box::new(right_expr)))
            }
            Token::Caret => {
                self.get_next_token()?;
                let right_expr = self.generate_ast(OperPrec::Power)?;
                Ok(Node::Caret(Box::new(left_expr), Box::new(right_expr)))
            }
            _ => Err(ParserError::InvalidOperator(format!(
                "Please enter valid operator {:?}",
                self.current_token
            ))),
        }
    }

    fn generate_ast(&mut self, oper_prec: OperPrec) -> Result<Node, ParserError> {
        let mut left_expr = self.parse_number()?;

        while oper_prec < self.current_token.get_oper_prec() {
            if self.current_token == Token::EOF {
                break;
            }

            let right_expr = self.convert_token_to_node(left_expr.clone())?;
            left_expr = right_expr;
        }

        Ok(left_expr)
    }

    fn get_next_token(&mut self) -> Result<(), ParserError> {
        let next_token = match self.tokenizer.next() {
            Some(token) => token,
            None => return Err(ParserError::InvalidOperator("Invalid character".into())),
        };

        self.current_token = next_token;

        Ok(())
    }

    fn check_patten(&mut self, expected: Token) -> Result<(), ParserError> {
        if expected == self.current_token {
            self.get_next_token()?;
            Ok(())
        } else {
            Err(ParserError::InvalidOperator(format!(
                "Expected {:?}, got {:?}",
                expected, self.current_token,
            )))
        }
    }

    // 构建数字的AST树
    // 在处理括号时考虑负号
    // 1 + (2 * 3);
    fn parse_number(&mut self) -> Result<Node, ParserError> {
        let token = self.current_token.clone();

        match token {
            Token::Subtract => {
                self.get_next_token()?;
                let expr = self.generate_ast(OperPrec::Negative)?;
                Ok(Node::Negative(Box::new(expr)))
            }
            Token::Num(i) => {
                self.get_next_token()?;
                Ok(Node::Number(i))
            }
            Token::LeftParen => {
                self.get_next_token()?;
                let expr = self.generate_ast(OperPrec::DefaultZero)?;
                self.check_patten(Token::RightParen)?;

                if self.current_token == Token::LeftParen {
                    let right = self.generate_ast(OperPrec::MulDiv)?;

                    return Ok(Node::Multiply(Box::new(expr), Box::new(right)));
                }
                Ok(expr)
            }
            Token::EOF => todo!(),
            _ => Err(ParserError::UnableParser("Unable to parse".into())),
        }
    }
}
