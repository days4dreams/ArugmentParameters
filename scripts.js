var glorp = function(someNumber) {
    return someNumber * 5 - 3;
};

var result1 = glorp(10);
//returns 47

console.log(result1);

var result2 = 2 * (glorp(5) + 10); console.log(result2);
//returns 64

var result3 = glorp(1 + 2); console.log(result3);
//returns 12

var result4 = glorp(glorp(1)); console.log(result4);
//returns 7

