function removeDuplicates(str) {
    var unique = "";
    for (var i = 0; i < str.length; i++) {
      if (unique.indexOf(str[i]) === -1) {
        unique += str[i];
      }
    }
    return unique;
  }
  
  // Example usage
  var input = "abcadeecfb";
  var output = removeDuplicates(input);
  console.log(output); // Output: "abcdef"

  function countAlphabets(str) {
    var charCount = {};
  
    // Count occurrences of each alphabet
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    // Print the counts
    for (var char in charCount) {
      console.log(char + "=" + charCount[char]);
    }
  }
  var input = "abcadeecfb";
  countAlphabets(input);