#include <iostream>
#include <sstream>
#include <cctype>
using namespace std;

int countVowels(string s) {
    int count = 0;
    for (char c : s) {
        c = tolower(c);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
            count++;
    }
    return count;
}

string reverseString(string s) {
    string rev = s;
    int n = s.length();
    for (int i = 0; i < n / 2; i++)
        swap(rev[i], rev[n - i - 1]);
    return rev;
}
int countWords(string s) {
    int count = 0;
    bool inWord = false;
    for (char c : s) {
        if (isspace(c))
            inWord = false;
        else if (!inWord) {
            inWord = true;
            count++;
        }
    }
    return count;
}

string toTitleCase(string s) {
    bool newWord = true;
    for (int i = 0; i < s.size(); i++) {
        if (isspace(s[i])) {
            newWord = true;
        } else {
            if (newWord) {
                s[i] = toupper(s[i]);
                newWord = false;
            } else {
                s[i] = tolower(s[i]);
            }
        }
    }
    return s;
}

int main() {
    string sentence;
    cout << "Enter a sentence: ";
    getline(cin, sentence);

    cout << "Vowels: " << countVowels(sentence) << endl;
    cout << "Reversed: " << reverseString(sentence) << endl;
    cout << "Words: " << countWords(sentence) << endl;
    cout << "Title Case: " << toTitleCase(sentence) << endl;
    return 0;
}
