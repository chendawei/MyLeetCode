#include <vector>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
 

class Solution {
public:
    ListNode *mergeKLists(vector<ListNode *> &lists) {
        int minVal = 0;
        ListNode* result = NULL;
        
        while (findMinValue(lists, minVal)) {
            if (result == NULL) {
                result = new ListNode(minVal);
                result = result->next;
            }
        }
        
        return result;
    }
    
    bool findMinValue(vector<ListNode*>& lists, int& minVal) {
        int position = -1;
        int tempMin = 0;
        for (int i = 0; i < lists.size(); i++) {
            ListNode* list = lists[i];
            if (list == NULL) continue;
            
            if (position == -1 || list->val < tempMin) {
                tempMin = list->val;
                position = i;
            }
        }
        
        if (position != -1) {
            minVal = lists[position]->val;
            lists[position] = lists[position]->next;
            return true;
        }
        else {
            return false;
        }
    }
};

int main() {
    Solution solu;
    ListNode* node = new ListNode(1);
    std::vector<ListNode*> v;
    v.push_back(node);

    ListNode* result = solu.mergeKLists(v);
}