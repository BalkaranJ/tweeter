//Responsible for character counter

//.ready ensures that all the html documentation is loaded before the javascript scripts run

//JQuery Steps
// Step 1: Target 
// Step 2: Add Eventlistener 
// Step 3: Retarget (optional)
// Step 4: Effect

$(document).ready(() => {

  $('.the-name').mouseenter(function() {
    $('h2').text("Hello");
  });

  //keyup event counts a character when the key is released
  $('textarea').keyup(function(){
    const tweetLength = this.value.length;
    const maxCharacterLimit = 140;
    let counter = $('.counter')
    
    counter.val(maxCharacterLimit - tweetLength);
    console.log(counter.val());

    // if (counter.val() < 0) {
    //   counter.css('color', 'red');
    // } else {
    //   counter.css('color', '#545149');
    // }

    // Ternary operator
    counter.val() < 0 ? counter.css('color', 'red')  : counter.css('color', '#545149');
  });
});