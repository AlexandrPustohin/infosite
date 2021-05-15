
		var shift = false,
		capslock = false;
		character="";
		var lastResFind=""; // последний удачный результат
		var copy_page=""; // копия страницы в исходном виде
		var locale_HTML="";
function	keyboard_li(ch){
		$write = document.getElementById('write')
		var $this = $(this),
			character = ch;//$this.value;  If it's a lowercase letter, nothing happens to this variable
			//alert(character);
		// Shift keys
		if (character =='shift') {
			$('.letter').toggleClass('uppercase');
			$('.symbol span').toggle();
 
			shift = (shift === true) ? false : true;
			capslock = false;
			return false;
		}
 
		// Caps lock
		if (character=='caps lock') {
			$('.letter').toggleClass('uppercase');
			capslock = true;
			return false;
		}
 
		// Delete
		if (character=='del') {
			var html = $write.value;
			temp = html.substr(0, html.length - 1);
			$write.value = temp;
			return false;
		}
 
		// Special characters
		//if ($this.hasClass('symbol') character = $('span:visible', $this).html();
		if (character==' ') character = ' ';
		if ($this.hasClass('tab')) character = "	";
		if (character=='ret' ) {
				FindOnPage();
		}
 
		// Uppercase letter
		if (capslock || shift) character = character.toUpperCase();
 
		// Remove shift once a key is clicked.
		if (shift === true) {
			$('.symbol span').toggle();
			if (capslock === false) $('.letter').toggleClass('uppercase');
 
			shift = false;
		}
 
		// Add the character  $write.html($write.html() + character);
		
		$write.value=$write.value + character;
	};


function ShowKeyboard(){
	
	input = window.document.getElementById('write');
	input.value="";
  if (keyboard.style.display == 'block')
    keyboard.style.display = 'none';
  else
    keyboard.style.display = 'block'
	document.getElementById ("write").focus ();
};
 



function func() {
 	locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Первоначальный)
}
function FindOnPage() {//ищет текст на странице, в параметр передается ID поля для ввода
	
	func();
	input = document.getElementById('write').value; //получаем значение из поля в html
	
	if(input.length<3&&status==true)
	{
		alert('Для поиска вы должны ввести три или более символов');
		 FindOnPageBack();
	}
	
	if(input.length>=3)
	{
		 FindOnPageGo();
	}
	
	if(status) { 
		FindOnPageBack(); //чистим прошлое и Выделяем найденное
		FindOnPageGo(); 
	}
	if(!status) { 
	FindOnPageBack(); //Снимаем выделение
	} 
 };
 
function FindOnPageBack() { 
		document.body.innerHTML = locale_HTML; 
}
function FindOnPageGo() {
			
			search = '/'+input+'/g';  //делаем из строки регуярное выражение
			 pr = document.body.innerHTML;   // сохраняем в переменную весь body
		     result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текстalert(result);   
			result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)
			alert(result);
			var warning = true;
			for(var i=0;i<result.length;i++) {
				if(result[i].match(eval(search))!=null) {
					warning = false;
				}
			}
			if(warning == true) {
				alert('Не найдено ни одного совпадения');
			}

			for(var i=0; i<result.length;i++) {
				result_arr[i] = result[i].replace(eval(search), '<span style="background-color:yellow;">'+input+'</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
			}
			for(var i=0; i<result.length;i++) {
				pr=pr.replace(result[i],result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
			}
			document.body.innerHTML = pr;  //заменяем html код
		}

	
	
