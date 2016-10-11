window.onload = function() {
	var divList = [];
	var pre_trv = document.getElementById("btn-01");
	var root = document.getElementById("root");
	pre_trv.addEventListener("click", function(e) {
		// console.log(root);
		preTrv(root);
		changeColor();
	});

	
	function preTrv(root) {

		// setTimeout(function() {
		// 	if (root !== null) {
		// 		root.style.background = "red";
		// 		setTimeout(function() {
		// 			root.style.background = "#fff";
		// 		}, 1000);
		// 		preTrv(root.firstElementChild);
		// 		setTimeout(function() {
		// 			preTrv(root.lastElementChild);
		// 		}, 1000);
		// 	} else {
		// 		// root.parentNode.style.background = "#fff";
		// 		console.log("kong=" + root);
		// 	}
		// }, 1000);
		
		if (root !== null) {
			divList.push(root);
			preTrv(root.firstElementChild);
			preTrv(root.lastElementChild);
		}
	}
	function changeColor() {
		var i = 0;
		divList[i].style.backgroundColor = 'skyblue'
		timer = setInterval(function (argument) {
			i++;
			if (i < divList.length) {
				divList[i-1].style.backgroundColor = '#fff';
				divList[i].style.backgroundColor = 'skyblue';
			} else {
				clearInterval(timer);
				divList[divList.length-1].style.backgroundColor = '#fff';
			}
		}, 500)
	}
};







