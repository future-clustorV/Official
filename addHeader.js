var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "./header.html";//読み込まれるHTMLを指定
var headerBox=document.getElementById("headerBox");//読み込みたい位置を指定

xhr.responseType="document";//XMLとして扱いたいので一応記述
xhr.open(method, url, true);
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        var restxt=xhr.responseXML;//重要
        var int=restxt.getElementsByTagName("header")[0].getElementsByTagName("ul")[0];//読み込まれるセレクタを指定
        box.innerHTML=int.outerHTML;//完了
    }
};
xhr.send();
