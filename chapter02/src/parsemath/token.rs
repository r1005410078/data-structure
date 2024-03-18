use super::parser::OperPrec;

#[derive(Debug, PartialEq, Clone)]
pub enum Token {
    Add,
    Subtract,
    Multiply,
    Divide,
    // ^
    Caret,
    // (
    LeftParen,
    // )
    RightParen,
    Num(f64),
    EOF,
}

impl Token {
    pub fn get_oper_prec(&self) -> OperPrec {
        match self {
            Token::Subtract | Token::Add => OperPrec::AddSub,
            Token::Multiply | Token::Divide => OperPrec::MulDiv,
            Token::Caret => OperPrec::Power,
            _ => OperPrec::DefaultZero,
        }
    }
}
