class Solution {
public:
    vector<int> twoSum(vector<int> &numbers, int target) {
        vector<int> result;
        
        int index1 = 0;
        int index2 = 0;
        int len = numbers.size();
        map<int, int> mapResult; 
        for (int i = 0; i < len; i++) {
            map<int, int>::iterator it = mapResult.find(numbers[i]);
            if (it != mapResult.end()) {
                result.push_back(it->second + 1);
                result.push_back(i + 1);
                return result;
            }
            
            int another = target - numbers[i];
            mapResult.insert(make_pair(another, i));
        }
    }
};
