

//piles[[1,2,3],[5,3,2],...,[2,3,4]] piles[i][j] i is the number of piles, j is the number of coins in a pile, while the numbers denote the value of the coin
//k is the number of coins we're allowed to take from the tops of piles

//What is the maximum value we can take given piles and k?

var maxValueOfCoins = function (piles, k) {
    let dp = new Array(piles.length + 1).fill(0).map(() => new Array(k).fill(0))
    let j;
    for (let i = piles.length - 1; i >= 0; i--) {
        for (j = 0; j < k; j++) {

            if (j == 0)
                dp[i][j] = Math.max(dp[i + 1][j], piles[i][j]) //Max of (best from before, this) for max coins = 1   *j==0*
            else
                dp[i][j] = Math.max(dp[i + 1][j], piles[i][j] + dp[i][j - 1])  //Max of (best from before, this + rest of column) for max coins = j + 1
        }
    }
    return dp[0][k - 1] //Max value of coins at range 0 - i with j,k coins allowed
};

//  7 15 => 7 
//

/*
    dp[i][j] represents the maximum value at range i to max, given j+1 coins allowed

*/
