//declaring my varibales from html
var addButton = document.querySelector('.addBtn');
var searchButton = document.querySelector('.searchBtn');
var addText = document.querySelector('.addTxt');
var searchText = document.querySelector('.searchTxt');
var colorRadioBtn = document.querySelector('#color');
var brandRadioBtn = document.querySelector('#brand');

//for diaplay
var shoeTempText = document.querySelector('.shoesTemp').innerHTML;
var shoesTemplate = Handlebars.compile(shoeTempText);
var shoeListElem = document.querySelector('.shoeList');

//display all shoes on program load
shoeListElem.innerHTML = shoesTemplate({shoeData});


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
colorRadioBtn.addEventListener('click', function (evt){
  var colour = document.querySelector("input[name = 'color']:checked");
  var brands = document.querySelector("input[name = 'brand']:checked");
  var filteredBrandData = [];
  //alert(colour.value);
  var filteredShoeData = [];

  //show all items in stock
  if (colour.value === "all") {
    return shoeListElem.innerHTML = shoesTemplate({shoeData});
  }

  //put the required shoes in filteredShoeData according to colour
  for (var i=0; i<shoeData.length; i++){
    var shoe = shoeData[i];
    if (shoe.color === colour.value) {
      filteredShoeData.push(shoe);
    }
  }
  shoeListElem.innerHTML = shoesTemplate({shoeData : filteredShoeData});
});

brandRadioBtn.addEventListener('click', function (evt){
  var colour = document.querySelector("input[name = 'color']:checked");
  var brands = document.querySelector("input[name = 'brand']:checked");
  var filteredBrandData = [];

  //show all items in stock
  if (brands.value === "all") {
    console.log("brands");
    return shoeListElem.innerHTML = shoesTemplate({shoeData});
  }

  //put the required shoes in filteredShoeData according to brand name
  for (var i=0; i<shoeData.length; i++){
    var shoe = shoeData[i];
    if (shoe.brand === brands.value) {
      filteredBrandData.push(shoe);
    }
  }
  shoeListElem.innerHTML = shoesTemplate({shoeData : filteredBrandData});
});

searchText.addEventListener('keyup', search);
searchButton.addEventListener('click', searchField);
