#include <string>

using std::string;

    /*680. Valid Palindrome II
    Easy
    Topics
    premium lock icon
    Companies
    Given a string s, return true if the s can be palindrome after deleting at most one character from it.
    
     
    
    Example 1:
    
    Input: s = "aba"
    Output: true
    Example 2:
    
    Input: s = "abca"
    Output: true
    Explanation: You could delete the character 'c'.
    Example 3:
    
    Input: s = "abc"
    Output: false
     
    
    Constraints:
    
    1 <= s.length <= 105
    s consists of lowercase English letters.

    */
    bool isPalindromeRange(const string &s, int left, int right) {
        while (left < right) {
            if (s[left] != s[right]) {
                return false;
            }
            ++left;
            --right;
        }
        return true;
    }

    bool validPalindrome(string s) {
        int left = 0;
        int right = static_cast<int>(s.size()) - 1;

        while (left < right) {
            if (s[left] == s[right]) {
                ++left;
                --right;
                continue;
            }
            // Skip either the left or right mismatching character.
            return isPalindromeRange(s, left + 1, right) ||
                   isPalindromeRange(s, left, right - 1);
        }

        return true;
    }
