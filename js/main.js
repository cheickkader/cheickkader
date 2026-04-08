// function changeLanguage(){
// 	//console.log("lang:",lang);
// 	selectedLang = $('.selectpicker').val();
// 	console.log("lang:",selectedLang);

// 	if(selectedLang == "it"){
// 		//$("[lang='"+selectedLang+"']").hide();
// 		$("[lang='en']").hide();
// 		$("[lang='it']").show();
// 	}
// 	if(selectedLang == "en"){
// 		//$("[lang='"+selectedLang+"']").hide();
// 		$("[lang='it']").hide();
// 		$("[lang='en']").show();
// 	}
// }

// changeLanguage(); // TODO aggiungi css che di partenza nasconde uno dei due

function changeLanguageButton(selectedLang){
	if(selectedLang == "it"){
		//$("[lang='"+selectedLang+"']").hide();
		$("[lang='en']").hide();
		$("[lang='it']").show();
	}
	if(selectedLang == "en"){
		//$("[lang='"+selectedLang+"']").hide();
		$("[lang='it']").hide();
		$("[lang='en']").show();
	}
}

changeLanguageButton("en");