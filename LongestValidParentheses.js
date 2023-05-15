var longestValidParentheses = function(s) {
    if (s.length <= 1)
        return 0

    const potential = (substr) => {
        let balance = 1
        let count = 1

        for (let i=0; i < substr.length; i++) {
            count++
            if (substr[i] === '(')
                balance++
            else
                balance--
            
            if (balance === 0)
                return count
        }
        return 0
    }

    let max = 0
    let load = 0


    for (let i = 0; i < s.length; i++) {

        if (s[i] == ')') {
            max = Math.max(max, load)
            load = 0
            while (true) {
                i++
                if (!s[i])
                    return max
                if (s[i] == '(') {
                    console.log(i, 'break')
                    break
                }
            }
        }
            
        let count = 0
        if (s[i+1])
            count = potential(s.substring(i+1))

        if (count) {
            load += count
            i += count -1
        }
        else {
            max = Math.max(max, load)
            load = 0
        }
    }
    max = Math.max(max, load)
    return max
};
