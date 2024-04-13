
/**
 * checks if input is Fizz (dividable by 3)
 * @param {number} num number to check
 * @returns {boolean}
 */
function isFizz(num) {
    return !(num % 3);
}

/**
 * checks if input is Buzz (dividable by 5)
 * @param {number} num number to check
 * @returns {boolean}
 */
function isBuzz(num) {
    return !(num % 5);
}

/**
 * generates a list of results for all numbers from 1 to n based on FizzBuzz problem
 * @param {number} n generate numbers from 1 to this number
 * @returns {string[]} array of results
 */
function fizzbuzz(n) {
    let res = [];
    
    for (let i=1; i<=n; i++) {
        if (isFizz(i)) {
            if (isBuzz(i)) {
                res.push('FizzBuzz');
            } else {
                res.push('Fizz');
            }
        } else if (isBuzz(i)) {
            res.push('Buzz');
        } else {
            res.push(i.toString());
        }
    }

    return res;
}


// execute
let result = fizzbuzz(40);
console.log(result);
