var formatPattern = function(p) {
    if (p.length > 4) {
        if (p[1] === '*' && p[3] === '*' && p[0] === p[2]) {
            return formatPattern(p.slice(2));
        }
        else {
            return p.slice(0, 1) + formatPattern(p.slice(1));
        }
    }
    else {
        return p;
    }
}

var isMatch = function(s, p) {
    // console.log("s: " + s);
    p = formatPattern(p);
    // console.log("p: " + p);
    return isMatchFun(s, p);
}

var isMatchFun = function(s, p) {
    // console.log("s: " + s);
    // console.log("p: " + p);

    if (p === "") {
        return (s === "");
    }

    if (p.length > 1 && p[1] === '*') {
        if (p[0] === '.') {
            if (p.length == 2) {
                return true;
            }

            var j = 0;
            while (j < s.length) {
                // console.log("s.length: " + s.length);
                if (isMatchFun(s.slice(j), p.slice(2))) {
                    return true;
                }
                j++;
            }
            return false;
        }

        if (p.length === 2) {
            for (var k = 0; k < s.length; k++) {
                if (s[k] !== s[0]) {
                    return false;
                }
            }
            return true;
        }

        if (s[0] !== p[0]) {            
            return isMatchFun(s, p.slice(2));
        }
        else {
            var i = 0;
            while (i < s.length && (i === 0 || s[i - 1] === s[0])) {
                //console.log("s.length: " + s.length);
                if (isMatchFun(s.slice(i), p.slice(2))) {
                    return true;
                }
                i++;
            }
            
            if (isMatchFun(s, p.slice(2)) || (i === s.length && p.length === 2)) {
                return true;
            }

            return false;
        }
    }
    else {
        if (p[0] === '.') {
            return s.length > 0 && isMatchFun(s.slice(1), p.slice(1));
        }
        else {
            return s.length > 0 && s[0] === p[0] && isMatchFun(s.slice(1), p.slice(1));
        }
    }
};

//isMatch("aa", "a");

console.log(isMatch("aa","a"));
console.log(isMatch("aa","aa"));
console.log(isMatch("aaa","aa"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("aa", ".*"));
console.log(isMatch("ab", ".*"));
console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("aaa", "a*a"));
console.log(isMatch("aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*a*a*b"));
console.log(isMatch("bbab", "b*a*"));
console.log(isMatch("a", "ab*"));
console.log(isMatch("bb", "c*"));