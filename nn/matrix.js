function matMul(mat1, mat2) {
  if(mat1[0].length != mat2.length) {
    console.log('Error: Matrix rows and columns mismatch');
    return null;
  }
  let resMat = [];
  for(let i = 0; i < mat1.length; i++) {
    let tmpMat = [];
    for(let j = 0; j < mat2[0].length; j++) {
      let sum = 0;
      for(let k = 0; k < mat1[0].length; k++) {
        sum += mat1[i][k] * mat2[k][j];
      }
      tmpMat.push(sum);
    }
    resMat.push(tmpMat);
  }
  return resMat;
}

function activation(value) {
  return 1 / (1 + Math.exp(-value));
}

function matAdd(mat1, mat2) {
  if(mat1.length != mat2.length) {
    console.log('Error: Matrix rows and columns mismatch');
    return null;
  }
  let resMat = [];
  for(let i = 0; i < mat1.length; i++) {
    let sum = mat1[i][0] + mat2[i][0];
    resMat.push([sum]);
  }
  return resMat;
}

function matTrans(mat) {
  let resMat = [];
  for(let i = 0; i < mat.length; i++) {
    resMat.push(mat[i][0]);
  }
  return resMat;
}

function matActivation(mat) {
  let resMat = [];

  for(let i = 0; i < mat.length; i++) {
    let tmpMat = [];
    for(let j = 0; j < mat[0].length; j++) {
      tmpMat.push(activation(mat[i][j]));
    }
    resMat.push(tmpMat);
  }
  return resMat;
}
