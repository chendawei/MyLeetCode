/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
        ListNode* result = NULL;
        ListNode* first = l1;
        ListNode* second = l2;
        ListNode* combine = NULL;
        int remain = 0;
        while (remain != 0 || first != NULL || second != NULL) {
            int first_val = (first != NULL) ? first->val : 0;
            int second_val = (second != NULL) ? second->val : 0;
            
            int self = (first_val + second_val + remain) % 10;
            remain = (first_val + second_val + remain) / 10;
            
            if (result == NULL) {
                result = new ListNode(self);
                combine = result;
            }
            else {
                combine->next = new ListNode(self);
                combine = combine->next;
            }
            
            if (first != NULL) first = first->next;
            if (second != NULL) second = second->next;
            
        }
        
        return result;
    }
};
