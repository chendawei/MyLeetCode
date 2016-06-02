var numberInArray = function(num, ary, start, end) {
    if (end > start) {
        return numberInArray(num, ary, start, start + Math.floor((end - start)/2) ) +
            numberInArray(num, ary, start + Math.floor((end-start)/2) + 1, end);
    }
    else {
        return ary[start] === num ? 1 : 0;
    }
}

var findDuplicate = function(nums) {
    for (var i = 1; i <= nums.length - 1; i++) {
        var nFound = numberInArray(i, nums, 0, nums.length - 1);
        if (nFound >= 2) {
            return i;
        }
    }
    return 0;
};

findDuplicate([1,3,4,2,2]);