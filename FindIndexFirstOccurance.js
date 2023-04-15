var strStr = function (haystack, needle) {
    if (needle.length > haystack.length)
        return -1;
    if (needle.length == 0)
        return 0;
    let i = 0;
    let j = 0;
    let a = needle[0];
    let eq = false;
    for (letter of haystack) {
        if (letter == a) {
            eq = true;
            while (eq) {
                if (needle[j] == haystack[i + j]) {
                    if (j == needle.length - 1)
                        return (i);
                    j++;
                }
                else {
                    j = 0;
                    eq = false;
                }
            }
        }
        i++;
    }
    return -1;
};