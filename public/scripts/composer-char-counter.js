//Responsible for character counter

//.ready ensures that all the html documentation is loaded before the javascript scripts run
$(document).ready(() => {
  //keyup event counts a character when the key is released
  $('textarea').keyup(function(){
    const tweetLength = this.value.length;
    const maxCharacterLimit = 140;
    const charsLeft = maxCharacterLimit - tweetLength;
    let counter = $('.counter')
    counter.val(charsLeft);

    // if (counter.val() < 0) {
    //   counter.css('color', 'red');
    // } else {
    //   counter.css('color', '#545149');
    // }
    // Ternary operator
    charsLeft < 0 ? counter.css('color', 'red')  : counter.css('color', '#545149');

    //Incase the character limit for a tweet is passed
      //This will ensure that the user understands why the tweet won't submit, and it will disable the tweet button while the counter displays red and negative.
    if (charsLeft < 0) {
      $('#error-tweet-length').css('visibility', 'visible');
      $('#tweet-button').attr('disabled', true);
    } else {
      $('#error-tweet-length').css('visibility', 'none');
      $('#tweet-button').attr('disabled', false);
    }
  });
});