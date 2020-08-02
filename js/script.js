let progressBar = $("#myProgressBar");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let currentProgress = 0;
btn1.addEventListener('click', function() { event(1); });
btn2.addEventListener('click', function() { event(3); });
btn3.addEventListener('click', function() { event(7); });

function event(n) {
	currentProgress = currentProgress + n;
	if (currentProgress > 100) {
		$(".btn1").hide();
		$(".btn2").hide();
		$(".btn3").hide();
		$("#message").removeClass("d-none");
	}
	$('.progress-bar').width(currentProgress + "%");
    console.log('Выполнилось btn', n, currentProgress)
}