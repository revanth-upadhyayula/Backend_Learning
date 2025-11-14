#include <bits/stdc++.h>
using namespace std;

const long MOD = 1e9 + 7;

// Function to trim leading and trailing spaces (as used in the original code)
string ltrim(const string &str) {
    string s(str);
    s.erase(s.begin(), find_if(s.begin(), s.end(), [](unsigned char ch) { return !isspace(ch); }));
    return s;
}

string rtrim(const string &str) {
    string s(str);
    s.erase(find_if(s.rbegin(), s.rend(), [](unsigned char ch) { return !isspace(ch); }).base(), s.end());
    return s;
}

long increasingArrays(vector<long> a, vector<long> b) {
    int n = a.size();
    
    // dp[i][val] = number of ways to form a strictly increasing array up to index i-1
    // with the value at index i-1 being val
    vector<vector<long>> dp(n + 1, vector<long>(1001, 0));
    
    // Base case: for i = 0, we can place any value between a[0] and b[0]
    for (int val = a[0]; val <= b[0]; val++) {
        dp[1][val] = 1;
    }
    
    // For each position i from 1 to n-1
    for (int i = 1; i < n; i++) {
        // Compute prefix sums for dp[i][val] to optimize transitions
        vector<long> prefix(1001, 0);
        prefix[0] = dp[i][0];
        for (int val = 1; val <= 1000; val++) {
            prefix[val] = (prefix[val - 1] + dp[i][val]) % MOD;
        }
        
        // For each possible value at position i
        for (int val = a[i]; val <= b[i]; val++) {
            // We need the previous value to be strictly less than val
            int max_prev = min(val - 1, (int)b[i - 1]);
            if (max_prev < a[i - 1]) continue; // No valid previous values
            int start = a[i - 1];
            if (start <= max_prev) {
                long ways = (prefix[max_prev] - (start > 0 ? prefix[start - 1] : 0) + MOD) % MOD;
                dp[i + 1][val] = ways;
            }
        }
    }
    
    // Sum up all possible values for the last position
    long result = 0;
    for (int val = a[n - 1]; val <= b[n - 1]; val++) {
        result = (result + dp[n][val]) % MOD;
    }
    
    return result;
}

int main() {
    string a_count_temp;
    getline(cin, a_count_temp);
    int a_count = stoi(ltrim(rtrim(a_count_temp)));
    
    vector<long> a(a_count);
    for (int i = 0; i < a_count; i++) {
        string a_item_temp;
        getline(cin, a_item_temp);
        long a_item = stol(ltrim(rtrim(a_item_temp)));
        a[i] = a_item;
    }
    
    string b_count_temp;
    getline(cin, b_count_temp);
    int b_count = stoi(ltrim(rtrim(b_count_temp)));
    
    vector<long> b(b_count);
    for (int i = 0; i < b_count; i++) {
        string b_item_temp;
        getline(cin, b_item_temp);
        long b_item = stol(ltrim(rtrim(b_item_temp)));
        b[i] = b_item;
    }
    
    long result = increasingArrays(a, b);
    cout << result << endl;
    
    return 0;
}