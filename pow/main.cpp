class Solution {
public:
    double pow(double x, int n) {
        if (n == 0) return 1;
        if (n == 1) return x;
        if (n == -1) return 1/x;
        
        double temp = pow(x, n/2);
        if (n % 2 == 0) {
            return temp * temp;
        }
        else {
            if (n > 0){
                return temp * temp * x;
            }
            else {
                return temp * temp * (1/x);
            }
        }
     }
};