var topKFrequent = function(nums, k) {
    var resultMap = new Map();
    
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];
        if (resultMap.has(value)) {
            resultMap.set(value, resultMap.get(value) + 1);
        }
        else {
            resultMap.set(value, 1);
        }
    }

    var result = [];
    resultMap.forEach((value, key, map) => {        
        if (result.length === 0) {
            result.push(key);
        }
        else {
            var inserted = false;
            for (var x = 0; x < result.length; x++) {
                if (value > map.get(result[x])) {
                    result.splice(x, 0, key);
                    inserted = true;
                    break;
                }
            }
            
            if (!inserted && result.length < k) {
                result.push(key);
            }
            else if (result.length > k) {
                result.pop();
            }
        }
    });
    
    return result;
};

console.log(topKFrequent([-1,1,4,-4,3,5,4,-2,3,-1], 3));