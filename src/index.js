
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  let result =[];
  let z = 0; 
  for(let i =0; i < matrix.length; i++) {
    for (let j=0; j < matrix[i].length; j++) {
      let columnIdx = i % 2 === 0 
      ? j
      : (matrix[i].length - j -1);

        result.push(matrix[i][columnIdx]);
       

    }
  }
 console.log(matrix);
 console.log(Array.from(result));
 return result; 
}
