var data = [];

//渲染
function render(val) {
	var show = document.getElementById("show");
	show.innerHTML = "";
	for (var i in data) {
		if (val == data[i]) {
			var html = document.createElement("div");
			html.setAttribute("class", "msg");
			html.setAttribute("id", "msg");
			html.style.backgroundColor = "red";
			html.innerHTML = data[i];
			show.appendChild(html);
		} else {
			var html = document.createElement("div");
			html.setAttribute("class", "msg");
			html.setAttribute("id", "msg");
			html.innerHTML = data[i];
			show.appendChild(html);
		}	
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

function valAddToData(val, direction) {
	var array = val.split(" ").filter(function(val) {
					return val != " ";
				});
	if (direction == "left") {
		for (var i in array) {
			data.unshift(array[i]);
		}
	} else {
		for (var i in array) {
			data.push(array[i]);
		}
	}
}

//为按钮绑定事件
function bindButton() {
	
	var btn = document.getElementById("top");
	btn.addEventListener("click", function(e) {
		var val = document.getElementById("textarea").value;
		document.getElementById("textarea").value = "";
		
		switch (e.target.value) {
			case "leftIn":
				if (val) {
					// data.unshift(val);
					valAddToData(val, "left");
					render();
				}
			break;
			case "rightIn":
				if (val) {
					// data.push(val);
					valAddToData(val, "right");
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
	var find = document.getElementById("find");
	find.addEventListener("click", function(e) {
		var val = document.getElementById("num").value;
		render(val);
	});
}

// function findVal(val) {

// }

function init() {
	bindButton();
}

init();



