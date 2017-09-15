function sudoku(grid) {
  
  var isSudoku = true;
  var count = 0;
  var i,j,k,l;
  //first check rows
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      for (k = j+1; k < grid[i].length; k++) {
        if(grid[i][j] == grid[i][k] && grid[i][k] !='.') {
          console.log(i)
          isSudoku = false;
        }
      }
    }
  }
  //next check the columns
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j <grid.length; j++) {
    for (k = i+1; k < grid .length; k++) {
      if (grid[i][j] == grid[k][j] && grid[k][j] !='.') {
        
        isSudoku = false
        }
      }
    }
  }
  //finally check the squares
  function checkSquare(start1, start2, limit1, limit2){
  for (i = start1; i < limit1; i++) {
    for (j = start2; j < limit2; j++) {
      count = 0;
      for (k = start1; k < limit1; k++) {
        for (l = start2; l < limit2; l++) {
          if(grid[i][j] == grid[k][l] && grid[k][l] !=".") {
            count = count + 1;
          } 
          if (count > 1) {
            console.log(count);
      
            isSudoku = false;
          }
        }
      }
    }
  }
  }
checkSquare(0,0,3,3);
checkSquare(3,0,6,3);
checkSquare(6,0,9,3);
checkSquare(0,3,3,6);
checkSquare(3,3,6,6);
checkSquare(6,3,9,6);
checkSquare(0,6,3,9);
checkSquare(3,6,6,9);
checkSquare(6,6,9,9);
  return isSudoku;
}
console.log(sudoku([[".",".",".","2",".",".","6",".","."], 
 [".",".",".","1",".",".",".",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".",".","5",".","1",".",".","8"], 
 [".","3",".",".",".",".",".",".","."], 
 [".",".",".","9",".",".",".",".","3"], 
 ["4",".",".",".",".",".",".",".","."], 
 [".",".",".",".",".",".","3","8","."], 
 [".",".",".",".",".",".",".",".","4"]]));
















/*function firstDuplicate(a) {
  var num ='';
  for (var i = 0; i < a.length; i++) {
    num = Math.abs(a[i]);
    if (a[num] < 0) {
      return Math.abs(a[i]);
    } else {
      a[num] = -a[num];
    }
  }
  return -1;
}
console.log(firstDuplicate([1,2,3,4,5,4]));


function isCryptSolution(crypt, solution) {
  var isCrypt = true;
  var numsone='';
  var numstwo='';
  var numsthree='';
  var current;
  
 
    for (var j = 0; j < crypt[0].length; j++) {
      for (var k = 0; k < solution.length; k++) {
        
      if (crypt[0][j] == solution[k][0]) {
        current = solution[k][1];
        numsone = numsone + current;
        
      }
      if (crypt[0][j] == solution[k][0] && solution.length == 1) {
        current = solution[1];
        numsone = numsone + current;
      }
      }
    }
        for (j = 0; j < crypt[1].length; j++) {
      for (k = 0; k < solution.length; k++) {
        
      if (crypt[1][j] == solution[k][0]) {
        current = solution[k][1];
        numstwo = numstwo+current;
      }
      }
    }
        for (j = 0; j < crypt[2].length; j++) {
      for (k = 0; k < solution.length; k++) {
        
      if (crypt[2][j] == solution[k][0]) {
        current = solution[k][1];
        numsthree = numsthree + current;
      }
             if (crypt[1][j] == solution[k][0] && solution.length == 1) {
        current = solution[1];
        numstwo = numstwo + current;
      }
      }
    }
 if(numsone[0] == '0'|| numstwo[0] == '0') {
   return false;
 }
 console.log(numsone + numstwo)
  if (parseInt(numsone) + parseInt(numstwo) == parseInt(numsthree)) {
    isCrypt = true;
  } else {
    isCrypt = false;
  }

  
  
 //traverse the crypt and get each word
 //get each letter of first word
//find the letter's corresponding number in solution
// add  numbers to a variable
//do same for second and third word
//convert variable strings to numbers
//build the equation with numbers
//if it equates, return true
  
  
return isCrypt;
}

isCryptSolution(["A",  "A",  "A"], ['A','0']);*/