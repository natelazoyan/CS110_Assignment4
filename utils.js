

function matrixProduct (mat1, mat2){
    let mat3 = [];
    for (let row = 0; row < mat1.length; ++row) {
        mat3[row] = [];
        for (let col = 0; col < mat2[0].length; ++col) {
            let sum = 0;
            for(let i = 0; i < mat1[0].length; ++i){
                sum += mat1[row][i] * mat2[i][col]
            } 
            mat3[row][col] = sum;
        }
    }
    return mat3;
}

/*
mat1: a1 a2      mat2: b1 b2            Result: (a1*b1 + a2*b3) (a1*b2 + a2*b4)
      a3 a4            b3 b4                   (a3*b1 + a4*b3) (a3*b2 + a4*b4) */

function sumofMatrices(mat1, mat2) {
    let mat = [];
    for (let row = 0; row < mat1.length; ++row){
        mat[row] = [];
        for (let col = 0; col < mat1[0].length; ++col){    
            mat[row][col] = mat1[row][col] + mat2[row][col];
        }
    }
    return mat;
}

/*
mat1: a1 a2      mat2: b1 b2            Result: (a1 + b1) (a2 + b2)
      a3 a4            b3 b4                    (a3 + b3) (a4 + b4) */


function sumofEachRow (mat) {
    let sum = [];
    for(let j = 0; j < mat.length; ++j){
        sum.push(sumofArray(mat[j]));
    }
    return sum;
}

function sumofArray(arr){
    let sumarr = 0;
    for(let i = 0; i < arr.length; ++i){
        sumarr += arr[i];
    }
    return sumarr;
}

/*      1 2 3
        4 5 6 —> [6, 15, 24]
        7 8 9                 */ 


function beautyLog(matrix) {
    for(let i = 0; i < matrix.length; ++i){
        console.log(matrix[i]);
    }
}


module.exports = {
    sumofEachRow,
    sumofMatrices,
    matrixProduct,
    beautyLog
}

