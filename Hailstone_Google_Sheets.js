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

//integer declarations
var startingNum;
var endingNum;
var cycler;
var iterations;

//spreadsheet declarations
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
  
//cell declarations
var cellR = 1;
var cellC = 1;
var cell = sheet.getRange(cellR, cellC);

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
  //function specific initializations
  startingNum = 1;
  endingNum = 20000;
  cellR = 2;
  cellC = 1;
  
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
    moveCell(0, 1);
    
    //Sets the value of the second column
    cell.setValue(iterations);
    moveCell(0, 1);
    
    //Sets the value of the third column
    if(chkPrime(startingNum) && startingNum != 1)
    {
      cell.setValue(iterations);
    }
    moveCell(0, 1);
    
    //Sets the value of the fourth column
    if(((Math.log(startingNum)/Math.log(2)) % 1 === 0) && startingNum != 1)
    {
      cell.setValue(iterations);
    }
    moveCell(0, 1);
    
    //Returns the cell to the one under the last value set in the first column
    moveCell(1, -4);
    
    //redefines startingNum
    startingNum++;
  }
}

/*
 function HailstoneRunThru()
 
 This function creates a column of a Hailstone sequence from the starting number until one
*/
function HailstoneRunThru()
{
  //function specific initializations
  cellR = 2;
  cellC = 8;
  cell = sheet.getRange(cellR, cellC);
  startingNum = cell.getValue();
  cycler = startingNum;
  cell.setValue(startingNum);
  moveCell(1, 0);

  //clears sheet
  sheet.getRange('H3:H1000').clearContent();
  
  while(cycler != 1)
  {
    cycler = cycler % 2 ? 3 * cycler + 1 : cycler/2;
    
    cell.setValue(cycler);
    moveCell(1, 0);
  }
}

//function to move cell (to avoid repeated code)
function moveCell(r, c)
{
  cellR += r;
  cellC += c;
  cell = sheet.getRange(cellR, cellC);
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
