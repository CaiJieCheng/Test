 window.load=doShowBonquet();
function SaveItem() {
			
	var items = document.forms.ShoppingList.items.value;
	var bonquetItems = document.forms.ShoppingList.bonquetItems.value;
	localStorage.setItem(items, bonquetItems);
	doShowBonquet();
	
}

function ModifyItem() {
	var items1 = document.forms.ShoppingList.items.value;
	var bonquetItems1 = document.forms.ShoppingList.bonquetItems.value;
			if (localStorage.getItem(items1) !=null)
			{
			  //update
			  localStorage.setItem(items1,bonquetItems1);
			  document.forms.ShoppingList.bonquetItems.value = localStorage.getItem(items1);
			}
		
	doShowBonquet();
}


function RemoveItem() {
	var items = document.forms.ShoppingList.items.value;
	document.forms.ShoppingList.bonquetItems.value = localStorage.removeItem(items);
	doShowBonquet();
}


function ClearAll() {
	localStorage.clear();
	doShowBonquet();
}

function doShowBonquet() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Item</th><th>Value</th></tr>\n";
		var i = 0;
		
		for (i = 0; i <= localStorage.length-1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		//if no item exists in the cart
		if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot save shopping list as your browser does not support HTML 5');
	}
}
 //below function may be redundant
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		return true;
	} else {
			return false;
	}
}