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

    $('#error-tweet-length').removeClass('show-error');
    // $('#tweet-button').attr('disabled', false);
    counter.removeClass('red-text'); 
    if (charsLeft < 0) {
      $('#error-tweet-length').addClass('show-error');
      $('#tweet-button').attr('disabled', true);
      counter.addClass('red-text');
    }
  });
});