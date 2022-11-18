var url = window.location.href;
var i;

var category = "tops_sweaters";
var item_name = "Box Logo L/S Tee";
var item_color = "Navy";

function pickCategory(){
	chrome.storage.sync.get('category', function(data) {
		var redirect = "https://www.supremenewyork.com/shop/all/sweatshirts";
		var replace = redirect.replace("sweatshirts", category);
		chrome.runtime.sendMessage({redirect: replace});

	});
}

function pickItem(){
	chrome.storage.sync.get('item_name', function(data) {
		var items = document.getElementsByClassName('name-link');

		for(i = 0; i < items.length; i++){
			if((items[i].innerHTML).includes(item_name)) {
				if((items[i+1].innerHTML).includes(item_color)) {
					chrome.runtime.sendMessage({redirect: items[i+1].href});
				break;

				}
				//chrome.runtime.sendMessage({redirect: items[i].href});
				//break;
			}
		}
	});
}







if(url =="https://www.supremenewyork.com/shop/new") {
	pickCategory();
} 

else if(url !="https://www.supremenewyork.com/shop/new"){
	pickItem();
}


document.getElementById("order_billing_name").value = "#full name";
document.getElementById("order_email").value = "#email_address";
document.getElementById("order_tel").value = "#phone number";
document.getElementById("bo").value = "#address";
document.getElementById("oba3").value = "#address line 2";
document.getElementById("order_billing_zip").value = "#zip";
document.getElementById("order_billing_city").value = "#city";
document.getElementById("order_billing_state").value = "#state abbrevation";
document.getElementsByClassName("iCheck-helper")[0].click();
document.getElementById("rnsnckrn").value = "0000000000000000";
document.getElementById("credit_card_month").value = "07";
document.getElementById("credit_card_year").value = "2026";
document.getElementById("orcer").value = "000";
document.getElementsByClassName("iCheck-helper")[1].click();
setTimeout(()=> {document.getElementsByName("commit")[0].click();}, 300)