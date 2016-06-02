function logMapElements(value, key, map) {
    console.log("m[" + key + "] = " + value);
}
//chars.forEach(logMapElements);

var lengthOfLongestSubstring = function(s) {
    
    var chars = new Map();
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        process.stdout.write("i: " + i + "\n");
        var ch = s.charAt(i);
        chars.forEach(logMapElements);
        if (chars.has(ch)) {
            if (result < chars.size) {
                result = chars.size;
            }
            var temp = i;
            i = chars.get(ch);
           
            chars.clear();
            //chars.set(ch, temp);
        }
        else {
            chars.set(ch, i);
        }
    }
    chars.forEach(logMapElements);
    if (result < chars.size) {
        result = chars.size;
    }
    return result;
}

process.stdout.write("Result: " + lengthOfLongestSubstring("dvdf") + "\n");