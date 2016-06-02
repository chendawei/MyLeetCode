class Solution {
public:
    vector<vector<int> > generate(int numRows) {
        vector<vector<int> > result;
        
        if (numRows > 0) {
            for (int i = 0; i < numRows; i++) {
                vector<int> row;
                if (i == 0) {
                    row.push_back(1);
                }
                else {
                    for (int j = 0; j < i + 1; j++) {
                        if (j == 0 || j == i) {
                            row.push_back(1);
                        } 
                        else {
                            row.push_back(result[i-1][j-1] + result[i-1][j]);
                        }
                    }
                }
                result.push_back(row);
            }
        }
        
        return result;
    }
};