/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const escape =  function(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//How an escape function works line by line

/* <script>$('body').empty()</script>

<div></div>

<div><script>$('body').empty()</script>
</div>

returns as string using .innerHTML script $() */


 //Create a function that will generatre the DOM structure for a tweet, given a tweet object
//return a tweet <article> element which gets prepended (to show the newest tweet) to the Tweet Box section in the html file (.tweets)
const createTweetElement = function(tweetData) {
  return `
<article class='the-box'>
    <div class='tweet-header'>
      <div class='tweet-username'>
        <img class="user-image" src="${tweetData.user.avatars}"/>
        <h6 class='username'>${tweetData.user.name}</h6>
      </div>
      <div class='tweet-handle'>
        <h6 class='handle'>${tweetData.user.handle}</h6>
      </div>
    </div>
    <div class='tweet-message'>
      <h4 class='user-tweet'>${escape(tweetData.content.text)}</h4>
    </div>
    <hr class='tweet-divider'>
    <footer class='tweet-footer'>
      <p>${tweetData.created_at}</p>
      <div class='the-images'>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article> 
`;
}

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const tweetHTML = createTweetElement(tweet);
    $('.tweets').prepend(tweetHTML);
  }
}


const loadtweets = function() {
//Getting data using Jquery
$.getJSON('http://localhost:8080/tweets')
  .then((tweets) => {
    renderTweets(tweets);
  })
}

$(document).ready(function(){
  //Loads tweets on refresh
  loadtweets();

  //Form Submission Using Jquery
  const $form = $(".the-form");
  $form.submit(function(event) {
    event.preventDefault();
    const serialized = $(this).serialize();

    $.ajax('/tweets/', {method:'POST', data:serialized})
    .then(() => {
      $('.tweets').empty();
      loadtweets();
    });
  }); 
});



