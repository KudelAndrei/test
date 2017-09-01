window.onload = function(){

	var content = document.getElementById('content');
	var lang = document.getElementById('lang');
	var selXHR = new XMLHttpRequest();
	var tmp = new Array();		// два вспомагательных
	var tmp2 = new Array();		// значение
	var langs = ['de', 'en', 'es', 'fr', 'it', 'ja', 'ru'];

	var get = location.search;	// строка GET запроса
	if (get != ""){
		tmp = (get.substr(1)).split('&');	// разделяем переменные
		for(var i = 0; i < tmp.length; i++) { 
			tmp2 = tmp[i].split('='); 
		}
		if (tmp2[0] == 'lang'){
			for (var j = 0; j < langs.length; j++){
				if (tmp2[1] == langs[j]){
					getSelectItem(tmp2[1]);
					break;
				}
			} 
		} else { getSelectItem('en'); }
	} else { getSelectItem('en'); }
	
	function getSelectItem(_lang){
		lang.className = '';
		console.log(_lang);
		selXHR.open("GET", "./data/"+ _lang +".json", true);
		selXHR.setRequestHeader('Content-Type', 'application/json');
		selXHR.onreadystatechange = function(){
			if (selXHR.readyState == 4 && selXHR.status == 200){
				var returnRequest = JSON.parse(selXHR.response);
				for (var i = 0; i < returnRequest.length; i++){
					lang.classList.add(returnRequest[i].lang);
					content.querySelector('.header__text-head').innerHTML = returnRequest[i].head;
					content.querySelector('.header__text-cat').innerHTML = returnRequest[i].cat;
					content.querySelector('.header__text-sec').innerHTML = returnRequest[i].sec;
					content.querySelector('.header__text-desc').innerHTML = returnRequest[i].desc;
				}
			}
		}
		selXHR.send();
	}
}