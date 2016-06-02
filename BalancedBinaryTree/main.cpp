/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    bool isBalanced(TreeNode *root) {
        if (root == NULL || (root->left == NULL && root->right == NULL)) return true;
        
        if (abs(GetDepth(root->left, 0) - GetDepth(root->right, 0)) <= 1) {
            if (!isBalanced(root->left) || !isBalanced(root->right)) {
                return false;
            }
            return true;
        }
        
        return false;
    } 
    
    int GetDepth(TreeNode* node, int nDepth) {
        if (node != NULL) {
            return max(GetDepth(node->left, nDepth), GetDepth(node->right, nDepth)) + 1;
        }
        return nDepth;
    }
};