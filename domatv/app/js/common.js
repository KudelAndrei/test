window.onload = function(){

	var getBook = document.getElementById('getBook');
	var messageError = document.getElementById('error');
	var modal = document.getElementById('modal');
	var modalClose = document.getElementById('mobalClose');

	function closeModal(){
		modal.style.display = "none";
		document.querySelector('.getbook__input-name').value = "";
		document.querySelector('.getbook__input-email').value = "";
	}

	mobalClose.addEventListener('click', function(){
		closeModal();
	})

	getBook.addEventListener('click', function(){

		var bookName = document.querySelector('.getbook__input-name').value;
		var bookEmail = document.querySelector('.getbook__input-email').value;
		at = bookEmail.indexOf("@");
		dot = bookEmail.indexOf(".");

		if (bookName == 0 && bookName == 0){
			messageError.innerHTML = 'Заполните все поля!';
			return false;
		} else if (bookName.indexOf(' ') >= 0 || bookEmail.indexOf(' ') >= 0){
			messageError.innerHTML = 'Заполните поле без пробелов!';
			return false;
		} else if (at < 1 || dot < 1){
			messageError.innerHTML = "*email введен не верно";
			return false;
		} else {
			modal.style.display = 'block';
			messageError.innerHTML = " ";
			setTimeout(function(){
				closeModal();
			}, 3000);
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