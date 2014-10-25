#include <string>
#include <unordered_set>
#include <iostream>
using namespace std;

bool wordBreak(string s, unordered_set<string> &dict) {
    if (dict.empty()) return false;
    int len = s.size();
    int start = 0;
    int sublen = 1;

    for (int i = 0; i < len; i++) {
        char c = s[i];
        bool bFound = false;
        for (unordered_set<string>::iterator it = dict.begin(); it != dict.end(); it++) {
            string str = *it;
            if (str.find(c) != -1) {
                bFound = true;
                break;
            }
        }

        if (!bFound) return false;
    }

    for (unordered_set<string>::iterator it = dict.begin(); it != dict.end(); it++) {

            if (s.substr(start, it->size()) == *it) {
                int newStart = start + it->size();
                if (newStart == len) return true;
                if (newStart > len) return false;

                if (wordBreak(s.substr(newStart, len - newStart), dict)) {
                    return true;
                }
            }
    }
    return false;
}

int main() {
	unordered_set<string> dict;
	dict.insert("a");
	dict.insert("aa");
	dict.insert("aaa");
	dict.insert("aaaa");
	dict.insert("aaaaa");
	dict.insert("aaaaaa");
	dict.insert("aaaaaaa");
	dict.insert("aaaaaaaa");
	dict.insert("aaaaaaaaa");
	dict.insert("aaaaaaaaaa");
	string s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
	if (wordBreak(s, dict)) {
        cout << "True" << endl;
	}
	else {
        cout << "False" << endl;
	}
	return 0;
}


