//declaring my varibales from html
var addButton = document.querySelector('.addBtn');
var searchButton = document.querySelector('.searchBtn');
var addText = document.querySelector('.addTxt');
var searchText = document.querySelector('.searchTxt');
var colorRadioBtn = document.querySelector('#color');
var brandRadioBtn = document.querySelector('#brand');
var shoeBrand = document.querySelector('#brandTxt');
var shoeName = document.querySelector('#nameTxt');
var shoeColor = document.querySelector('#colorTxt');
var shoePrices = document.querySelector('#pricesTxt');
var shoeStock = document.querySelector('#stockTxt');
var shoeSize = document.querySelector('#sizeTxt');

//declaring my textbox id's
var brandTextBox = document.querySelector('#brandTxt');
var nameTextBox = document.querySelector('#nameTxt');
var colorTextBox = document.querySelector('#colorTxt');
var pricesTextBox = document.querySelector('#pricesTxt');
var stockTextBox = document.querySelector('#stockTxt');
var sizeTextBox = document.querySelector('#sizeTxt');
var image = document.querySelector("#image");

//Display data on program load
var shoeTempText = document.querySelector('.shoesTemp').innerHTML;
var brandTempText = document.querySelector('.brandTemp').innerHTML;
var colorTempText = document.querySelector('.colorTemp').innerHTML;

//for template compile
var shoesTemplate = Handlebars.compile(shoeTempText);
var brandTemplate = Handlebars.compile(brandTempText);
var colorTemplate = Handlebars.compile(colorTempText);

//targets the div on the html file
var shoeListElem = document.querySelector('.shoeList');
var brandListElem = document.querySelector('#brand');
var colorListElem = document.querySelector('#color');

//loop over the array
var brandMap = {};
var colorMap ={};
//create a unique array list
var uniqueBrand = [];
var uniqueColor = [];

//check if current stock is in the unique array
  for (var i = 0; i < shoeData.length; i++) {
    var brandValue = shoeData[i].brand;
    var colorValue = shoeData[i].color;

    if (brandMap[brandValue] === undefined) {
      brandMap[brandValue] = brandValue;
      uniqueBrand.push({
        brand : brandValue,
      });
    }
    if (colorMap[colorValue] === undefined) {
      colorMap[colorValue] = colorValue;
      uniqueColor.push({
        color : colorValue,
      });
    }
    console.log(uniqueBrand, uniqueColor);
  }

//display all shoes on program load
shoeListElem.innerHTML = shoesTemplate({shoeData});
brandListElem.innerHTML = brandTemplate({brandData : uniqueBrand});
colorListElem.innerHTML = colorTemplate({colorData : uniqueColor});

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
    filteredList.push(shoes);
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
  if ((colour.value === "all") && (brands.value === "all")){
    return shoeListElem.innerHTML = shoesTemplate({shoeData});
  }
  //else if (()) {

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
  if ((brands.value === "all") && (colour.value === "all")) {
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

//add new stock
function AddStock() {

  var brandValue = shoeBrand.value;
  var nameValue = shoeName.value;
  var colorValue = shoeColor.value;
  var pricesValue = shoePrices.value;
  var stockValue = shoeStock.value;
  var sizeValue = shoeSize.value;

  //console.log(brandValue, nameValue, colorValue, pricesValue, stockValue, sizeValue);
//create a unique array list
 var uniqueShoe = [];

//loop over the array
  var shoeMap = {};

  //declare new
  var reader = new FileReader();

if (brandValue !== '' && nameValue !== '' && colorValue !== ''
    && pricesValue !== '' && stockValue !== '' && sizeValue !== '') {
//check if current stock is in the unique array
reader.addEventListener('load', function(){
  for (var i = 0; i < shoeData.length; i++) {
    var shoes = shoeData[i];
    var foundShoe = false;
    //onsole.log(shoes);.


    if (shoeMap[shoes] === undefined) {
      shoeMap[shoes] = shoes;
      shoeData.push({
      //shoeListElem.innerHTML = shoesTemplate ({
        brand : brandValue,
        name : nameValue,
        color : colorValue,
        prices : Number(pricesValue),
        stock : Number(stockValue),
        size : sizeValue,
        image: reader.result
      });
    }

  }
    shoeListElem.innerHTML = shoesTemplate({shoeData})
    }, false);
        reader.readAsDataURL(image.files[0]);
  }
    brandTextBox.value = "";
    nameTextBox.value = "";
    colorTextBox.value = "";
    pricesTextBox.value = "";
    stockTextBox.value = "";
    sizeTextBox.value = "";
    //console.log(shoeData);
}

searchText.addEventListener('keyup', search);
searchButton.addEventListener('click', searchField);
addButton.addEventListener('click', AddStock);
