

//piles[[1,2,3],[5,3,2],...,[2,3,4]] p[i][j] i is the number of piles, j is the number of coins in a pile
//k is the number of coins we're allowed to take

//What is the maximum value of coins we can take from piles, given a k?

var maxValueOfCoins = function (piles, k) {
    let dp = new Array(piles.length).fill(0).map(() => new Array(k + 1).fill(0));
    for (let i = piles.length - 1; i >= 0; i--) {
        for (let j = 0; j < k; j++) {
            dp[i][j] = piles[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j - piles[i][j]]);
        }
    }
    return dp[0][k - 1];
};


//Getting Error :(