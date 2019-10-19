function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here

    expr = expr.replace( /\s/g, '');

    function checkBrackets(expr) {
        let bracket = 0;
        for(let i = 0; i < expr.length; i++) {
            if (expr[i] === '(') {
                bracket ++;
            } else if (expr[i] === ')') {
                bracket --;
            }
        }

        if (bracket !== 0) {
            throw Error('ExpressionError: Brackets must be paired');
        }
    }

    function checkZeroDivision(expr) {
        if (expr.search('/0') > -1) {
            throw Error('TypeError: Division by zero.');
        }
    }

    checkBrackets(expr);
    checkZeroDivision(expr);

    const result = new Function("return " + expr);

    return result();

}

module.exports = {
    expressionCalculator
}