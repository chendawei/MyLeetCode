class Solution {
public:
    int findMin(vector<int> &num) {
        int len = num.size();
        for (int i = 0; i < len - 1; i++) {
            if (num[i] > num[i+1]) {
                return num[i+1];
            }
        }
        return num[0];
    }
};
