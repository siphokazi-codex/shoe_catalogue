//declaring my varibales from html
var addButton = document.querySelector('.addBtn');
var searchButton = document.querySelector('.searchBtn');
var addText = document.querySelector('.addTxt');
var searchText = document.querySelector('.searchTxt');
var allRadio = document.querySelector('.all');
var blueRadio = document.querySelector('.blue');
var blackRadio = document.querySelector('.black');
var whiteRadio = document.querySelector('.white');
var yellowRadio = document.querySelector('.yellow');


//for diaplay
var shoeTempText = document.querySelector('.shoesTemp').innerHTML;
var shoesTemplate = Handlebars.compile(shoeTempText);
var shoeListElem = document.querySelector('.shoeList');

//function for my search textbox
function search () {

shoeListElem.innerHTML = "";
var filteredList = [];
for (var i=0; i < shoeData.length; i++) {
  var shoes = shoeData[i];

  if (shoes.name.indexOf(searchText.value) !=-1) {
    console.log(shoes);
    var div = document.createElement('div');
    div.textContent = shoes.name;
    shoeListElem.appendChild(div);
    //console.log(shoeListElem);
    //filteredList.push({shoes:name, shoes:brand, shoes:color});
    filteredList.push(shoes);
    //console.log(filteredList);
    shoeListElem.innerHTML = shoesTemplate({shoeData: filteredList});
  }
 }
}

//function for my search button
function searchField () {
  search ();
  searchText.value = "";
}

//function to filter by colour according to radio buttons
allRadio.addEventListener('click', function (){
  var colour = document.querySelector("input[name = 'color']:checked");
  shoeListElem.innerHTML = shoesTemplate({shoeData});
});

//
/**blueRadio.addEventListener('click', function {
  var colour = document.querySelector("input[name = 'color']:checked");

  for (var i=0, shoeData.length; i++)
  {
    varshoeListElem.innerHTML = shoesTemplate({shoeData});
  }
});

blackRadio.addEventListener('click', function {
  var colour = document.querySelector("input[name = 'color']:checked");
  shoeListElem.innerHTML = shoesTemplate({shoeData});
});

redRadio.addEventListener('click', function {
  var colour = document.querySelector("input[name = 'color']:checked");
  shoeListElem.innerHTML = shoesTemplate({shoeData});
});

whiteRadio.addEventListener('click', function {
  var colour = document.querySelector("input[name = 'color']:checked");
  shoeListElem.innerHTML = shoesTemplate({shoeData});
});

yellowRadio.addEventListener('click', function {
  var colour = document.querySelector("input[name = 'color']:checked");
  shoeListElem.innerHTML = shoesTemplate({shoeData});
});*/


searchText.addEventListener('keyup', search);
searchButton.addEventListener('click', searchField);
