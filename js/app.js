'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



// ************ WINDOW INTO THE DOM ***************8

let locationSection = document.getElementById('location-profiles');
console.log(locationSection);

let locationsTable = document.getElementById('table');
console.log(locationsTable);

// *********** HELPER FUNCTION - Generate random number ***********
// from mdn docs
function randomCust(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ************Declaring Global Table***********************
let tableElem = document.createElement('table');
locationsTable.appendChild(tableElem);


// ******CONSTRUCTOR FUNCTION REFACTOR***************
let cookieLocations = [];

function CookieStand(location, minCust, maxCust, avgCookie){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.customers = 0;
  this.results = [];

  cookieLocations.push(this);
}

// ********** METHODS TO PROTOTYPES *****************8
CookieStand.prototype.getCust = function(){
  this.customers = `${randomCust(this.minCust, this.maxCust)}`;
};

CookieStand.prototype.render = function(){
  let totCookies = 0;

  let newRow = document.createElement('tr');
  tableElem.appendChild(newRow);

  let rowHeading = document.createElement('th');
  rowHeading.textContent = this.location;
  newRow.appendChild(rowHeading);

  for(let i = 0; i< hours.length; i++){
    let newElement = document.createElement('td');
    this.getCust();
    let hourCookies = this.customers * this.avgCookie;
    totCookies += hourCookies;
    newElement.textContent = `${Math.round(hourCookies)}`;
    newRow.appendChild(newElement);
    this.results.push(Math.round(hourCookies));
  }

  let newElement = document.createElement('td');
  newElement.textContent = Math.round(totCookies);
  newRow.appendChild(newElement);

};

//******Creating External Functions ************/
function tableHeader(){
  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = ' ';
  row1.appendChild(th1Elem);

  for(let i = 0; i < hours.length; i++){
    let th1Elem = document.createElement('th');
    th1Elem.textContent += hours[i];
    row1.appendChild(th1Elem);
  }

  let thTotal = document.createElement('th');
  thTotal.textContent += 'Total';
  row1.appendChild(thTotal);
}

function tableFooter(){
  let totalArr = [];
  for(let i = 0; i < hours.length; i++){
    totalArr.push(0);
  }
  for(let i = 0; i < cookieLocations.length; i++){
    let currentCity = cookieLocations[i];
    for(let j = 0; j < currentCity.results.length; j++){
      totalArr[j] += currentCity.results[j];
    }
  }

  let totalTotal = 0;
  for(let i = 0; i < totalArr.length; i++){
    totalTotal += totalArr[i];
  }
  totalArr.push(totalTotal);

  let lastRow = document.createElement('tr');
  tableElem.appendChild(lastRow);

  let rowFooter = document.createElement('th');
  rowFooter.textContent = 'Total';
  lastRow.appendChild(rowFooter);
  for(let i = 0; i < totalArr.length; i++){
    let newTotal = document.createElement('td');
    newTotal.textContent = totalArr[i];
    lastRow.appendChild(newTotal);

  }
}

function renderAllStands(){
  for(let i = 0; i < cookieLocations.length; i++){
    cookieLocations[i].getCust();
    cookieLocations[i].render();
  }
}

//********* INITIATE COOKIE STANDS **************
new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai', 11, 38, 3.7);
new CookieStand('Paris', 20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);

//**********Calling All Functions************** */
tableHeader();
renderAllStands();
tableFooter();
