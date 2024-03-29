# Hailstone Sequence (Google Sheets Scripts)

**The Hailstone Sequence**

The Hailstone Sequence is an integer sequence whose terms are as follows:
 
Start with any integer *n*. If *n* is even, the next term in the sequence is *n/2*. If n is odd, the next term in the sequence is *3n+1.* An example sequence is: *20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1, 4, 2, 1,...*
 
The Collatz Conjecture is a conjecture introced by Lothar Collatz. The Collatz Conjecture is that if a Hailstone Sequence is created for any integer *n*, the sequence will always reach one. As of 11/13/2019 (one can always hope for an eventual solution), the Collatz Conjecture has not been proved, nor has a counterexample been found.

**Function HailstoneIterations()**

This function creates a data table. In the first column of the data table, are the integers between tht *startingNum* and *endingNum* variable. In the second column, is how many iterations through the Hailstone sequence it takes for the integer in the first column to reach one. In the third column, it will set the same value as in column 2, but only if the integer in the same row in column 1 is a prime number. In the fourth column, it will set the same value as in column 2, but only if the integer in the same row in column 1 is a power of two. 

Note: The unedited function will create a data table of 20,000 rows, which may be difficult for older or less powerful computers.

**Function HailstoneRunThru()**

This function takes an input from a cell (by default H2) and creates an integer sequence in the cells under it which runs the input through the Hailstone sequence. 

Note: The current code defines the cleared cells as H2:H10000, you will want to change this if you are moving the input cell.
