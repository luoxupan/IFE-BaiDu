var data = [];

//渲染
function render() {
	var show = document.getElementById("show");
	show.innerHTML = "";
	for (var i in data) {
		var html = document.createElement("div");
		html.setAttribute("class", "msg");
		data[i] += 10;
		html.style.height = data[i] + "px";
		// html.setAttribute("height", data[i]);
		// html.innerHTML = data[i];
		show.appendChild(html);
	}
}



function bubbleSort() {
	var len = data.length;
	var bool = true;
	while (bool) {
		bool = false;
		for (var i = 1; i < len; ++i) {
			if (data[i-1] > data[i]) {
				var val = data[i];
				data[i] = data[i-1];
				data[i-1] = val;
				bool = true;
				render();
			}
		}
	}
}


function verifyVal(val) {

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
					data.unshift(parseInt(val));
					render();
				}
			break;
			case "rightIn":
				if (val) {
					data.push(parseInt(val));
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

	var sort = document.getElementById("bubbleSort");
	sort.addEventListener("click", function(e) {
		bubbleSort();
		// render();
	});
}

function init() {
	bindButton();
}

init();



