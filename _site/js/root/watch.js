address = document.location.href.split("/");
if (typeof address[4] == 'undefined' || address[4] == "") {
    window.location.href = "/"
} else
var video = {
    item: address[4],
    s: address[5],
    ep: address[6]
};
document.title = (video.ep + " - " + video.item + " - Murloc's stream");
document.getElementById("bar-right").innerHTML = (video.item + " season" + video.s + " episode" + video.ep + "..." + collection[0]);