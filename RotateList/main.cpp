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
    ListNode *rotateRight(ListNode *head, int k) {
        if (head == NULL) return NULL;
        if (k == 0) return head;
        
        ListNode* tail = head;
        int len = 1;
        while (tail->next != NULL) {
            tail = tail->next;
            len ++;
        }
        
        tail->next = head;
        
        int i = 0;
        k = k % len;
        
        ListNode* node = tail;
        while (i < len - k) {
            node = node->next;
            i++;
        }
        
        ListNode* res = node->next;
        node->next = NULL;
        
        return res;
    }
};