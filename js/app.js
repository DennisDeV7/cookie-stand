'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// ************ WINDOW INTO THE DOM ***************8

let locationSection = document.getElementById('location-profiles');
console.log(locationSection);

// *********** HELPER FUNCTION - Generate random number ***********
// from mdn docs
function randomCust(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// from https://stackoverflow.com/questions/7342957/how-do-you-round-to-1-decimal-place-in-javascript 
function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}


// ****** OBJECT LITERALS *************

let seattle = {
  location: 'Seattle',
  customers: 0,
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  getCust: function(){
    this.customers = `${randomCust(this.minCust, this.maxCust)}`;
  },
  // ****** DOM Manipulation ***************
  render: function(){
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    let totCookies = 0;

    for(let i = 0; i< hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      let hourCookies = this.customers * this.avgCookie;
      totCookies += round(hourCookies, 2);
      liElem.textContent = `${hours[i]}: ${round(hourCookies, 1)} Cookies`;
      ulElem.appendChild(liElem);
    }

    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${round(totCookies, 1)} Cookies`;
    ulElem.appendChild(liTotal);

  }
};

let tokyo = {
  location: 'Tokyo',
  customers: 0,
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  getCust: function(){
    this.customers = `${randomCust(this.minCust, this.maxCust)}`;
  },
  // ****** DOM Manipulation ***************
  render: function(){
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    let totCookies = 0;

    for(let i = 0; i< hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      let hourCookies = this.customers * this.avgCookie;
      totCookies += round(hourCookies, 2);
      liElem.textContent = `${hours[i]}: ${round(hourCookies, 1)} Cookies`;
      ulElem.appendChild(liElem);
    }

    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${round(totCookies, 1)} Cookies`;
    ulElem.appendChild(liTotal);

  }
};

let dubai = {
  location: 'Dubai',
  customers: 0,
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  getCust: function(){
    this.customers = `${randomCust(this.minCust, this.maxCust)}`;
  },
  // ****** DOM Manipulation ***************
  render: function(){
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    let totCookies = 0;

    for(let i = 0; i< hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      let hourCookies = this.customers * this.avgCookie;
      totCookies += round(hourCookies, 2);
      liElem.textContent = `${hours[i]}: ${round(hourCookies, 1)} Cookies`;
      ulElem.appendChild(liElem);
    }

    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${round(totCookies, 1)} Cookies`;
    ulElem.appendChild(liTotal);

  }
};

let paris = {
  location: 'Paris',
  customers: 0,
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  getCust: function(){
    this.customers = `${randomCust(this.minCust, this.maxCust)}`;
  },
  // ****** DOM Manipulation ***************
  render: function(){
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    let totCookies = 0;

    for(let i = 0; i< hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      let hourCookies = this.customers * this.avgCookie;
      totCookies += round(hourCookies, 2);
      liElem.textContent = `${hours[i]}: ${round(hourCookies, 1)} Cookies`;
      ulElem.appendChild(liElem);
    }

    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${round(totCookies, 1)} Cookies`;
    ulElem.appendChild(liTotal);

  }
};

let lima = {
  location: 'Lima',
  customers: 0,
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  getCust: function(){
    this.customers = `${randomCust(this.minCust, this.maxCust)}`;
  },
  // ****** DOM Manipulation ***************
  render: function(){
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    let totCookies = 0;

    for(let i = 0; i< hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      let hourCookies = this.customers * this.avgCookie;
      totCookies += round(hourCookies, 2);
      liElem.textContent = `${hours[i]}: ${round(hourCookies, 1)} Cookies`;
      ulElem.appendChild(liElem);
    }

    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${round(totCookies, 1)} Cookies`;
    ulElem.appendChild(liTotal);

  }
};


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
