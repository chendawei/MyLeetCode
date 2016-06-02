
function Interval(start, end) {
    this.start = start;
    this.end = end;
}
 

var insert = function(intervals, newInterval) {
    var result = [];
    var start;
    var end;
    var done = false;
    
    if (intervals.length === 0) {
        result.push(newInterval);
        return result;
    }
    
    var i = 0;
    while (i < intervals.length) {
        var interval = intervals[i];
        var iterated = false;
        if (interval.end < newInterval.start) {
            result.push(interval);
        }
        else if (interval.start > newInterval.end) {
            if (!done) {
                result.push(newInterval);
            }
            result.push(interval);
            done = true;
        }
        else if (interval.start <= newInterval.start) {
            if (interval.end > newInterval.end) {
                result.push(interval);
                done = true;
            }
            else {
                start = interval.start;
                while (i < intervals.length && interval.end < newInterval.end) {
                    interval = intervals[i];
                    i++;
                    iterated = true;                    
                }
                if (interval.start <= newInterval.end) {
                    end = (interval.end < newInterval.end) ? newInterval.end : interval.end;
                    result.push(new Interval(start, end));
                }
                else {
                    end = newInterval.end;
                    result.push(new Interval(start, end));
                    result.push(interval);
                }
                
                done = true;
            }
        }
        else if (newInterval.start < interval.start) {
            start = newInterval.start;
            while (i < intervals.length && interval.end < newInterval.end) {
                interval = intervals[i];
                i++;
                iterated = true;
            }
            if (interval.start <= newInterval.end) {
                end = (interval.end < newInterval.end) ? newInterval.end : interval.end;
                result.push(new Interval(start, end));
            }
            else {
                end = newInterval.end;
                result.push(new Interval(start, end));
                result.push(interval);
            }
            done = true;
        }
        if (!iterated) {
            i++;
        }
    }
    
    if (!done) {
        result.push(newInterval);
    }
    
    return result;
};

console.log(insert([new Interval(2, 4), new Interval(5, 7), new Interval(8, 10), new Interval(11, 13)], new Interval(3, 8)));
console.log(insert([new Interval(1, 5)], new Interval(0, 3)));
console.log(insert([new Interval(3, 8), new Interval(9, 11)], new Interval(3, 7)));
console.log(insert([new Interval(0, 4), new Interval(7, 12)], new Interval(0, 5)));