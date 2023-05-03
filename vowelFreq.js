/*
 * Complete the 'vowelFrequency' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING str as parameter.
 */

function vowelFrequency(str) {
  let vowels = "aeiouAEIOU";
  let freq = {};
  let result = "";
  
  // Iterate over the string and count the frequency of each vowel
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      freq[char] = freq[char] ? freq[char] + 1 : 1;
    }
  }
  
  // Iterate over the frequency object and create the result string
  for (let vowel in freq) {
    result += vowel + freq[vowel];
  }
  
  return result;
}

