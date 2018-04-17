function setColor()
{
    colors = ["gold", "red", "green", "purple"];
    colorNum = Math.floor(Math.random() * 4);
    document.getElementById('geral').style.color = colors[colorNum];
    //document.getElementById('geral').value = colors[colorNum];
}
setInterval(setColor, 1);
jQuery(function($){
	$('result').load('www.google.com #ytp-time-current');
});
