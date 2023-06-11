const fibonacci = function(count) {
    if (count < 0) {
        return 'OOPS';
    }
    const fibonacciNumber = [0, 1];
    for (let i = 1; i < count; i++) {
        fibonacciNumber.push(fibonacciNumber[i] + fibonacciNumber[i - 1]);
    }
    return fibonacciNumber[count];
};

// Do not edit below this line
module.exports = fibonacci;
