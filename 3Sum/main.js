/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
    if (nums.length < 3) return result;
    
    nums.sort((a, b) => {return a - b;});

    console.log(nums);
    
    for (var i = 0; i < nums.length - 2; i++) {
        var j = i+1;
        var k = nums.length - 1;
        
        while(j < k) {
            console.log("i: " + i + " j: " + j + " k: " + k);
            if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
            }
            else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            }
            else {
                j++;
            }
        }
    }
    
    var res = [];
    console.log(result);
    
    for (var x = 0; x < result.length; x++) {
        var found = false;
        for (y = 0; y < res.length; y++) {
            if (result[x][0] === res[y][0] && result[x][1] === res[y][1] && result[x][2] === res[y][2]) {
                found = true;
                break;
            }
        }
        if (!found) {
            res.push(result[x]);
        }
    }
    
    return res;
};

console.log(threeSum([3,0,-2,-1,1,2]));