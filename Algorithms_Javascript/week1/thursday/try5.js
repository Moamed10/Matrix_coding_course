var checkPalindrome = function(word){
    cleanword = word.split('').join('').toLowerCase
    let revword = '';
    for (let x = word.length -1 ; x >= 0; x-- ){
        revword += word[x];
    }

    if (revword.toLowerCase() === word.toLowerCase()) {
        console.log(word + ' is a palindrome');
    } else {
        console.log(word + ' is not a palindrome');
    }
}

checkPalindrome("Beb");
