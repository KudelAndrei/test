window.onload = function(){

	var selectBtn = document.getElementById('langSelect');
	var content = document.getElementById('content');
	var lang = document.getElementById('lang');
	var selXHR = new XMLHttpRequest();
	var selLang = new XMLHttpRequest();
	var countOpen = 0;
	var selOpn = document.querySelectorAll('option');

	function getSelectItem(){
		lang.className = '';
		selXHR.open("GET", "./data/langs.json", true);
		selXHR.setRequestHeader('Content-Type', 'application/json');
		selXHR.onreadystatechange = function(){
			if (selXHR.readyState == 4 && selXHR.status == 200){
				var returnRequest = JSON.parse(selXHR.response);
				if (countOpen < 2){
					for (var i = 0; i < returnRequest.length; i++){
						var option = document.createElement('option');
						option.innerHTML = returnRequest[i].lang;
						option.value = returnRequest[i].lang;
						selectBtn.appendChild(option);
					}
				} 
				for (var i = 0; i < returnRequest.length; i++){
					if (selectBtn.value == returnRequest[i].lang){
						lang.classList.add(returnRequest[i].lang);
						content.querySelector('.header__text-head').innerHTML = returnRequest[i].head;
						content.querySelector('.header__text-cat').innerHTML = returnRequest[i].cat;
						content.querySelector('.header__text-sec').innerHTML = returnRequest[i].sec;
						content.querySelector('.header__text-desc').innerHTML = returnRequest[i].desc;
					}
				}
			}
		}
		countOpen++;
		selXHR.send();
	}

	getSelectItem(); // инициализация

	selectBtn.addEventListener('click', function(event){
		getSelectItem();
	});

}