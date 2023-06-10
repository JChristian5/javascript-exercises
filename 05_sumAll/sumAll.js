const sumAll = function(start, end) {
    let num = 0
    
    if (start < 0 || end < 0) {
        return 'ERROR';
    } else if (typeof start === 'string' || typeof end === 'string') {
        return 'ERROR';
    } else if (typeof start === 'object' || typeof end === 'object') {
        return 'ERROR';
    } else if (start < end) {
        for (let i = start; i <= end; i++) {
            num += i;
        }

        return num;
    } else if (start > end) {
        for (let i = end; i <= start; i++) {
            num += i;
        }

        return num;
    } 
    
};

// Do not edit below this line
module.exports = sumAll;
