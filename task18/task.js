var data = [];

//渲染
function render() {
	var show = document.getElementById("show");
	show.innerHTML = "";
	for (var i in data) {
		var html = document.createElement("div");
		html.setAttribute("class", "msg");
		html.setAttribute("id", "msg");
		html.innerHTML = data[i];
		show.appendChild(html);
	}
	bindDiv();
}

//为每个div绑定事件
function bindDiv() {
	var show = document.getElementById("show");
	for (var i = 0; i < show.childNodes.length; ++i) {
		(function(n) {
			show.childNodes[n].addEventListener("click", function(e) {
				data.splice(n, 1);//删除元素从第n个开始，删除一个元素
				// console.log(e.target);
				render();
			});
		})(i);
	}
}

//为按钮绑定事件
function bindButton() {
	
	var btn = document.getElementById("top");
	btn.addEventListener("click", function(e) {
		var val = document.getElementById("num").value;
		document.getElementById("num").value = "";
		
		switch (e.target.value) {
			case "leftIn":
				if (val) {
					data.unshift(val);
					render();
				}
			break;
			case "rightIn":
				if (val) {
					data.push(val);
					render();
				}
			break;
			case "leftOut":
				data.shift();
				render();
			break;
			case "rightOut":
				data.pop();
				render();
			break;
		}
	});
}

function init() {
	bindButton();
}

init();



