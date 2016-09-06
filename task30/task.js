
var pass = "";

function gotFocus(txId, pId, text) {

	var p = document.getElementById(pId);
	var ele = document.getElementById(txId);
	ele.addEventListener("focus", function(e) {
		p.innerHTML = text;
	});
}

function gotBlur(txId, pId, func) {
	
	var p = document.getElementById(pId);
	var ele = document.getElementById(txId);
	ele.addEventListener("blur", function(e) {
		console.log(ele.value);
		func(p, ele.value, ele);
	});
}

function varifyName(p, str, t_ele) {
	var len = 0;
	var s = str.trim();
	if (s.length > 0) {
		
		if (s.length >= 4 && s.length <= 16) {
			p.innerHTML = "正确";
			t_ele.style.borderColor = "skyblue";
			p.style.color = "skyblue";
		} else {
			p.innerHTML = "长度为4~16个字符";
			t_ele.style.borderColor = "red";
			p.style.color = "red";
		}
	} else {
		p.innerHTML = "不能为空";
		t_ele.style.borderColor = "red";
		p.style.color = "red";
	}
}
function varifyPass(p, str, t_ele) {
	
	var s = str.trim();
	if (s.length >= 6) {
		for (var i = 0; i< s.length; ++i) {
			if (s.charCodeAt(i) > 128) {
				p.innerHTML = "密码不可为其他字符";
				t_ele.style.borderColor = "red";
				p.style.color = "red";
				return ;
			}
		}
		p.innerHTML = "密码符合";
		t_ele.style.borderColor = "skyblue";
		p.style.color = "skyblue";
		pass = s;
	} else if (s.length > 0 && s.length < 6){

		p.innerHTML = "密码长度错误，为6~16位";
		t_ele.style.borderColor = "red";
		p.style.color = "red";
	} else if (s.length == 0) {
		p.innerHTML = "密码不可为空，6~16数字和字母";
		t_ele.style.borderColor = "red";
		p.style.color = "red";
	}
}
function varifyPassAgn(p, strOld, t_ele) {
	var s = strOld.trim();
	if (s == pass && s != "") {
		p.innerHTML = "密码正确";
		t_ele.style.borderColor = "skyblue";
		p.style.color = "skyblue";
	} else {
		p.innerHTML = "密码不正确";
		t_ele.style.borderColor = "red";
		p.style.color = "red";
	}
}
function varifyEmail(p, str, t_ele) {
	var s = str.trim();
	var reg = new RegExp('^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$', 'i');
	if (s.match(reg)) {
		p.innerHTML = "邮箱格式正确";
		t_ele.style.borderColor = "skyblue";
		p.style.color = "skyblue";
	} else {
		p.innerHTML = "邮箱格式不正确";
		t_ele.style.borderColor = "red";
		p.style.color = "red";
	}
}
function varifyPhone(p, str, t_ele) {
	var s = str.trim();
	if (s.match(/^1\d{10}$/)) {
		p.innerHTML = "号码格式正确";
		t_ele.style.borderColor = "skyblue";
		p.style.color = "skyblue";
	} else {
		p.innerHTML = "号码格式不正确";
		t_ele.style.borderColor = "red";
		p.style.color = "red";
	}
}


gotFocus("tx_name", "p_name", "必填，长度为4~16个字符");
gotBlur("tx_name", "p_name", varifyName);
gotFocus("tx_pass", "p_pass1", "6~16数字和字母");
gotBlur("tx_pass", "p_pass1", varifyPass);
gotFocus("tx_pass_cf", "p_pass2", "重复输入密码");
gotBlur("tx_pass_cf", "p_pass2", varifyPassAgn);
gotFocus("tx_email", "p_email", "ygxqqx@163.com");
gotBlur("tx_email", "p_email", varifyEmail);
gotFocus("tx_phone", "p_phone", "请输入11位手机号码");
gotBlur("tx_phone", "p_phone", varifyPhone);
gotBlur("tx_name", "p_name");

