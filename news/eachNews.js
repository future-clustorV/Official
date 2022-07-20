const newsTitleElem = document.getElementById('newsTitle');
const newsTitleImage = document.getElementById('newsImage');
const newsTextElem = document.getElementById('newsTexts');

window.addEventListener('DOMContentLoaded', function() {
    const pageHash = window.location.hash;
    newsTitleElem.innerText = newsData[pageHash].newsTitle;
    newsTitleImage.src = newsData[pageHash].imagePath;
    newsTextElem.innerText = newsData[pageHash].newsText;
});

const newsData = {
    '#first':{newsTitle:'一期生初配信', imagePath:'../images/newsImage/first.png', newsText:'初配信らしいわよ\nわわ'},
    '#hello':{newsTitle:'ご挨拶', imagePath:'../images/group-logo.png', newsText:'なぜかこんなところまで来させてもらえたのでせいぜいあがくぜ'}
};