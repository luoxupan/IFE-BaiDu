
var submit 	= document.getElementById("submit");
var text 	= document.getElementById("text");
var p 		= document.getElementById("p");

submit.addEventListener("click", function(e) {

	var len = 0;
	var str = text.value.trim();
	text.value = "";
	if (str.length > 0) {
		for (var i = 0; i < str.length; ++i) {
			if (str.charCodeAt(i) < 128) {
				len++;
			} else {
				len += 2;
			}
		}
	} else {
		p.innerHTML = "字符不能为空";
	}
	if (len < 4 || len > 16) {
		p.innerHTML = "字符数应为4~16位";
		p.style.color = "red";
		text.style.borderColor = "red";
	} else {
		p.innerHTML = "格式正确";
		p.style.color = "skyblue";
		text.style.borderColor = "skyblue";
	}
});




