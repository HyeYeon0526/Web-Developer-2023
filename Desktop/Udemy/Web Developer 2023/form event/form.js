const tweetForm = document.querySelector('#tweets');
const tweetContainer = document.querySelector('#tweetContainer');

tweetForm.addEventListener('submit',(e) => {
    e.preventDefault();

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    
    newTweetFunc(usernameInput.value, tweetInput.value)
    
    usernameInput.value = '';
    tweetInput.value = '';

})

const newTweetFunc = (username, tweet) => {
    const newTweet = document.createElement('li');
    newTweet.append(`${username} - ${tweet}`);
    tweetContainer.append(newTweet);
}

tweetContainer.addEventListener('click',function(e) {
    e.target.nodeName === 'LI' && e.target.remove();
})