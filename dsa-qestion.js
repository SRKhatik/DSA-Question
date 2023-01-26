// Nice Subsequence
// Question Name: Nice Subsequence
 
// Problem Statement
 
// Given an array A consisting of N integers.
 
// A subsequence is a sequence that can be derived from the given array by deleting zero or more elements(not all) without changing the order of the remaining elements.
 
// A nice subsequence is a subsequence of array A in which the difference between any two elements equals the difference between their original indices in array A.
 
// More formally a subsequence [Ai1 Ai2 Ai3 … AiL] of array A is nice if for any 1<=p,q<=L, Aip-Aiq = ip-iq holds.
 
// Now you have to find the largest possible length of a nice subsequence of array A.
 
// Input Format
 
// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.
// Output Format
 
// Print the largest possible length of a nice subsequence of array A.
// Constraints
 
// 1<=N<=105
// 1<=Ai<=109
// Sample Input 1
 
// 6
 
// 2 1 4 10 7 7
 
// Sample Output 1
 
// 3
 
// Explanation of Sample 1
 
// A possible nice subsequence of length 3 is [A1 A3 A6] = [2 4 7]


function solve(arr) {
  // to subtract current index from current value
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i] - i;
  }
 
  // Count the value which is coming maximum number of times.
  let freqMap = {};
  for(let i = 0; i < arr.length; i++){
    if(arr[i] in freqMap)freqMap[arr[i]]++;
    else freqMap[arr[i]] = 1;
  }
 
  // I need to find the maximum value among all the values in freqMap
   return Math.max(...Object.values(freqMap));
}
 
let arr = [2, 1, 4, 10, 7, 7];
console.log(solve(arr));