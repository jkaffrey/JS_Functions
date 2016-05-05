'using strict';

function palindrome(string) {

  string = string.replace(/[^a-zA-Z0-9]/g, "");
  string = string.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) !== string.charAt(string.length - i - 1)) {

      return false;
    }
  }

  return true;
}

console.log(palindrome("Amore, Roma"));
