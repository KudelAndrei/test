window.onload = function(){

	var getBook = document.getElementById('getBook');
	var messageError = document.getElementById('error');
	getBook.addEventListener('click', function(){

		var bookName = document.querySelector('.getbook__input-name').value;
		var bookEmail = document.querySelector('.getbook__input-email').value;
		at = bookEmail.indexOf("@");
		dot = bookEmail.indexOf(".");

		if (bookName.indexOf(' ') >= 0 || bookEmail.indexOf(' ') >= 0){
			if (bookName.length == 0 || bookName.length == 0){
				messageError.innerHTML = 'Данное поле обязательно для заполнения!';
				return false;
			}
			messageError.innerHTML = 'Заполните поле без пробелов!';
			return false;
		} else if (at < 1 || dot < 1){
			messageError.innerHTML = "*email введен не верно";
			return false;
		} else {
			messageError.innerHTML = " ";
			document.querySelector('.getbook__input-name').value = "";
			document.querySelector('.getbook__input-email').value = "";
			alert('спасибо за заявку!');
		}
	})

	var date = document.getElementById('date');
	var dateValue = new Date();
	date.innerHTML = ((dateValue.getDate() < 10) ? '0' + dateValue.getDate() : dateValue.getDate()) + "." + ((dateValue.getMonth() < 10) ? '0' + dateValue.getMonth() : dateValue.getMonth()) + "." + dateValue.getFullYear(); 


	$(".owl-carousel").owlCarousel({
		loop: false,
		margin: 10,
		nav: false,
		margin: 60,
		smartSpeed:450,
		responsive: {
			0:{
				items:1
			},
			992:{
				items:2
			}
		}
	});
	$(".owl__next").click(function(){
		$(".owl-carousel").trigger('next.owl.carousel');
	});
	$(".owl__prev").click(function(){
		$(".owl-carousel").trigger('prev.owl.carousel');
	});
};