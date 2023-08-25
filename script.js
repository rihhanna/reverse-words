// Good Luck 💪🏾
function reverseWords(sentence) {
    // split the sentence by spaces
    let words = sentence.split(" ");
    // reverse the order of the words
    words.reverse();
    // join the words by spaces
    let reversed = words.join(" ");
    // return the reversed sentence
    return reversed;
  }

 console.log(reverseWords("fikrcamp bootcamp"))  
 console.log(reverseWords("hello there!"))
 console.log(reverseWords("welcome to my city"))
