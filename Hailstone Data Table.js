/*
 Code written by Daniel Lenshin
*/

/*
 The Hailstone Sequence
 
 The Hailstone Sequence is an integer sequence whose terms are as follows:
 
 Start with any integer n. If n is even, the next term in the sequence is n/2. If n is odd, the next term in the sequence is 3n+1.
 An example sequence is: 20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1, 4, 2, 1,...
 
 The Collatz Conjecture is a conjecture introced by Lothar Collatz. The Collatz Conjecture is that if a Hailstone Sequence is created
 for any integer n, the sequence will always reach one. As of 11/12/2019 (one can always hope for an eventual solution), the Collatz Conjecture 
 has not been proved, nor has a counterexample been found.
*/

//integer initializations
var startingNum = 1;
var cycler;
var iterations = 0;
var endingNum = 20000;

//spreadsheet initializations
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
  
//cell initializations
var cellX = 2;
var cellY = 1;
var cell = sheet.getRange(cellX, cellY);

/*
 function HailStoneIterations()
 
 This function creates a data table in Google Sheets which shows how many iterations through the Hailstone Sequence it takes for 
 a number to reach 1.
 
 Column 1: The numbers 1-10,000 by default (startingNum to endingNum)
 Column 2: The amount of iterations through the Hailstone Sequence it takes for the number in column 1 to reach 1
 Column 3: The amount of iterations, if the number in column 1 is prime
 Column 4: The amount of iterations, if the number in column 1 can be represented by a power of two (2^n)
*/
function HailstoneIterations()
{
  //while loop to go through hailstone sequence from startingNum to endingNum
  while(endingNum >= startingNum) 
  {
    //resets iterations, and redefines cycler
    iterations = 0;
    cycler = startingNum;
    
    //cycles through hailstone sequence until 1, counting the iterations
    while(cycler != 1) 
    {
      cycler = cycler % 2 ? 3 * cycler + 1 : cycler/2;
      iterations++;
    }
    
    //Sets the values of the leftmost (first) column
    cell.setValue(startingNum);
    cellY++;
    cell = sheet.getRange(cellX, cellY);
    
    //Sets the value of the second column
    cell.setValue(iterations);
    cellY++;
    cell = sheet.getRange(cellX, cellY);
    
    //Sets the value of the third column
    if(chkPrime(startingNum) && startingNum != 1)
    {
      cell.setValue(iterations);
    }
    cellY++;
    cell = sheet.getRange(cellX, cellY);
    
    //Sets the value of the fourth column
    if(((Math.log(startingNum)/Math.log(2)) % 1 === 0) && startingNum != 1)
    {
      cell.setValue(iterations);
    }
    cellY++;
    cell = sheet.getRange(cellX, cellY);
    
    //Returns the cell to the one under the last value set in the first column
    cellY -=4;
    cellX++;
    cell = sheet.getRange(cellX, cellY);
    
    //redefines startingNum
    startingNum++;
  }
}

//function to check whether or not a number is prime
function chkPrime(num)
{
  if((num % 2 == 0 || num % 3 == 0) && num != 2 && num != 3)
  {
    return false;
  }
  return true;
}