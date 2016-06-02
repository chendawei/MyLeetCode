var isSquare = function(n) {
    var squareRoot = Math.ceil(Math.sqrt(n));
    return (squareRoot*squareRoot === n);
} 

var mapResult = new Map();

var numSquares = function(n) {
    if (n < 4) {
        return n;
    }    
    else if (mapResult.has(n))
    {
        return mapResult.get(n);
    }
    else if (isSquare(n)) {
        return 1;
    }
    else {
        var minNum = 5;
        for (var i = Math.ceil(n/2); i >= 1; i--) {
            var num = numSquares(i) + numSquares(n - i);
            if (num < minNum) {
                minNum = num;
            }
            if (minNum === 2) {
                break;
            }
        }
        mapResult.set(n, minNum);
        return minNum;
    }
};

var numSquares2 = function (n) {
    var squareRoot = Math.ceil(Math.sqrt(n));
    if (squareRoot*squareRoot === n) {
        return 1;
    }

    var result = [];
    for (var i = 1; i <= n+1; i++) {
        result.push(4);
    }

    for (var j = 1; j*j <= n; j++) {
        result[j*j] = 1;
    }

    for (var k = 1; k <= n; k++) {
        for (var h = 1; h*h+k <= n; h++) {
            if (result[h*h+k] > (result[k] + 1)) {
                result[h*h+k] = result[k] + 1;
            }
        }
    }

    return result[n];
}

var number = parseInt(process.argv[2]);
var start = new Date().getTime();

process.stdout.write(number + ": " + numSquares2(number) + "\r\n");
var end = new Date().getTime();

process.stdout.write("cost time: " + (end-start) + "ms\r\n");