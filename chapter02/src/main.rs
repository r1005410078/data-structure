use crate::parsemath::parser::Parser;

mod parsemath;

fn main() {
    // let expr = "21.2*3+(4-5)+2^3/4";

    let expr = "(1+2)(3+2)";

    let mut math_parser = Parser::new(expr).unwrap();

    let ast = math_parser.parse().unwrap();

    println!("ast = {:?}", ast);
}

/*
Add(
    Add(
        Multiply(
            Number(2.0),
            Number(3.0)
        ),
        Subtract(
            Number(4.0),
            Number(5.0)
        )
    ),
    Divide(
        Caret(
            Number(2.0),
            Number(3.0)
        ),
        Number(4.0)
    )
)
*/
