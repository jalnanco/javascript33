const num = -9;
console.log(num.toString(2), num.toString(10));

const rightShifted = num >> 2;
console.log(rightShifted.toString(2), rightShifted.toString(10));

const rightZeroShifted = num >>> 2;
console.log(rightZeroShifted.toString(2), rightZeroShifted.toString(10));

const leftShifted = num << 2;
console.log(leftShifted.toString(2), leftShifted.toString(10));
