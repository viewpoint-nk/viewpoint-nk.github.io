// facebook いいね ページURL付与
var $facebook = document.getElementById("facebook");
$facebook.setAttribute("data-href", location.href);


// 別URLの場合 target[_blank]を追加
$("a[href^='http']:not([href*='" + location.hostname + "'])").attr('target', '_blank');
