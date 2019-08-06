const app = angular.module('DavidApp', []);

app.controller('DavidController', function ($http) {
  let vm = this;
  vm.rossQuotes = [];
  vm.davidQuotes = [];
  vm.davidAlive = 'alive';
  vm.aliveStatus = true;

  $http({
    method: 'GET',
    url: 'https://en.wikipedia.org/w/api.php?action=parse&format=json&page=David_Schwimmer&section=0'
  }).then((response) => {
    if(response.parse.text.search('died') === -1){
      vm.davidAlive = 'alive';
      vm.aliveStatus = true;
      console.log('David lives!')
    } else {
      vm.davidAlive = 'dead';
      vm.aliveStatus = false; 
      console.log('David is dead')
    }
  })
  vm.addQuote = function (){
    let quoteToadd = {
      name: vm.newName,
      quote: vm.newQuote
    }
    $http({
      method: 'POST',
      url: '/quotes', 
      data: quoteToadd
    }).then(function(response){
      alert(`Success!`);
      vm.newRossQuote();
      vm.newDavidQuote();
      vm.newName = '';
      vm.newName = '';
    }).catch(function(error){
      console.log('error posting quotes', error);
      alert('Something went wrong submitting your quote!'); 
    })
  }
  vm.newRossQuote = function () {
    vm.rLabel = 'Ross: '; 
    console.log('new ross quote clicked');
    $http({
      method: 'GET',
      url: '/ross'
    }).then(function (response) {
      vm.rossQuotes = response.data;
      let randomNumber = Math.floor(Math.random() * (vm.rossQuotes.length));
      vm.randomRossQuote = vm.rossQuotes[randomNumber];
    })
  }//end newRossQuote

  vm.newDavidQuote = function () { 
    vm.dLabel = 'David Schwimmer: '; 
    $http({
      method: 'GET',
      url: '/david'
    }).then(function (response) {
      vm.davidQuotes = response.data;
      let randomNumber = Math.floor(Math.random() * (vm.davidQuotes.length));
      vm.randomDavidQuote = vm.davidQuotes[randomNumber];
    })
  }//end newDSQuote

  vm.date = new Date();


})






