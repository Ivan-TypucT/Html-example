const max = 2;
let current = 0;
const slides = document.querySelectorAll('.mySlide')

function plusSlides (num){
	let prev = current;
	let next = prev;
	let deg = num*100;
	slides[prev].style.transform='translateX(' + (-deg).toString() +'%)';
	current++;
	if(current>2)
	{
		current = 0;
	}
	
	if(current<0)
	{
		current = 2;
	}
	next = current;

	slides[next].style.transform='translateX(' + deg.toString() +'%)';
	setTimeout(() => {
	slides[prev].classList.remove('showed');
	slides[next].classList.add('showed');
	slides[next].style.transform='translateX(0%)';
	}, 1000);

}
