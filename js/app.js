(function() {
  var app = angular.module("store", []);

  app.controller("StoreController", function(){
    this.product = jewel;
  });

  var jewel = {
    name : "Sapphire Crystal",
    price : "13.65",
    colour : "Blue",
    canPurchase : true,
    soldOut : true,
    description : "These crystals have a good action within your brain to assist learning. They help you to feel greater mental discipline and might also kindle lucid dreaming.",
  }


})();
