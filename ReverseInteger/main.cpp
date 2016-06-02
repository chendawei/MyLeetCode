class Solution {
public:
    int reverse(int x) {
        if (x == 0) return 0;
        
        bool negative = (x < 0);
        
        int num = (x > 0) ? x : -x;
        
        int digits = floor(log10(num)) + 1;
        
        int result = 0;
        for (int i = 0; i < digits; i++) {
            result += ((num % (int)(pow(10, i+1))) / (int)(pow(10, i))) * pow(10, digits - i - 1);
        }
        
        if (negative) result = 0 - result;
        
        return result;
    }
};