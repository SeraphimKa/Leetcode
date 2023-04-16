

//piles[[1,2,3],[5,3,2],...,[2,3,4]] piles[i][j] i is the number of piles, j is the number of coins in a pile, while the numbers denote the value of the coin
//k is the number of coins we're allowed to take from the tops of piles

//What is the maximum value we can take given piles and k?

var maxValueOfCoins = function (piles, k) {
    let dp = new Array(piles.length + 1).fill(-Infinity).map(() => new Array(k).fill(-Infinity)) //dp has 1 more row than piles, columns = max number of moves
    let n = piles.length;
    let j;
    let colMax; //Max coins, current row + 
    let colBack = 0; //Counter of coins left, 1 column back
    let colBackPoint; //Last cell, 1 column back
    let colBackGrab; //Coins grabbed from 1 column back
    for (let i = n - 1; i >= 0; i--) { //Starting from next to last so we can use the extra row to compare
        colMax = 0;
        colBackGrab = 0;
        colBackPoint = 0;
        for (j = 0; j < k; j++) {


            if (!piles[i][j] && colBack) {
                console.log(i, j, colBack, i + 1, piles[i + 1][colBackGrab])
                colBack--
                colMax -= dp[i + 1][colBackGrab - 1] ? dp[i + 1][colBackGrab - 1] : 0 //Remove last coin grab if there
                colMax += dp[i + 1][colBackGrab]; //Add best new coin grab
                colBackGrab++
            }

            dp[i][j] = Math.max(dp[i + 1][j], colMax += (piles[i][j] ? piles[i][j] : 0)) //Max of (best from last | this)

            if (!piles[i][j] && !colBackPoint) {
                colBackPoint = j - 1;
            }
        }
        if (colBackPoint)
            colBack = colBackPoint;
        else
            colBack = k - 1;
    }
    console.log(dp)
    return dp[0][k - 1] //Max value of coins at range 0 - i with k coins allowed
};


/*
    dp[i][j] represents the maximum value at range i to max, given j+1 coins allowed

*/


console.log(maxValueOfCoins([[37, 88], [51, 64, 65, 20, 95, 30, 26], [9, 62, 20], [44]], 9))