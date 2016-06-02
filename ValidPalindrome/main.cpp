class Solution {
public:
    bool isPalindrome(string s) {
        int i = 0;
        int j = 0;
        string sl = s;
        
        int len = sl.length();
        
        if (len <= 1) return true;
        
        for (int i = 0; i < len; i++) {
            sl[i] = tolower(sl[i]);
        }
        
        while (i < len && j < len) {
            while (i < len && !isAlphanumeric(sl[i])) {
                i++;
            }
            
            if (i >= len) break;
            
            while (j < len && !isAlphanumeric(sl[len - j - 1])) {
                j++;
            }
            
            if (j >= len) break;
            
            if (sl[i] != sl[len - j - 1]) {
                return false;
            }
            
            i++;
            j++;
        }
        
        return true;
    }
    
    bool isAlphanumeric(char c) {
        return ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'));
    }
};