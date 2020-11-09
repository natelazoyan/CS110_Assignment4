const { beautyLog, sumofEachRow, matrixProduct, sumofMatrices } = require('./utils.js')
const functions = require ('./utils.js')

let mat1 = [
    [1, 2],
    [4, 5]
];

let mat2 =  [
    [3, 2],
    [1, 5]
];

beautyLog(matrixProduct(mat1, mat2));
beautyLog(sumofMatrices(mat1, mat2));
console.log(sumofEachRow(mat1))
