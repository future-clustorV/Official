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
    '#first':{newsTitle:'一期生初配信', imagePath:'../images/newsImage/first.png', newsText:'ついにミライノムレより4人のVtuberたちが生まれました！\n阿古町孤夢\nお喋り大好き孤。のんびり雑談系VTuber\n猫山ノラ\nコーヒーや温泉みたいにのんびりできる配信をしていきます。野良猫系VTuber\n月ノ宮レイン\nゲームとお絵描きが大好きな駅員系Vtuber(？)\nはんぺん王子inukai\n涙も全部はんぺんで拭ってあげるからあなたの隣でしょうもなく生きる！天ぷら犬Vtuber\n関わってくれた全ての人に感謝です...😌今後とも応援のほどどうぞよろしくお願いいたします。'},
};