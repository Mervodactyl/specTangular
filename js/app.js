(function() {

  var app = angular.module("store", []);

  app.controller("StoreController", function(){
    this.products = jewels;
  });

  var jewels = [
  {
    name : "Sapphire Crystal",
    price : "13.65",
    colour : "Blue",
    canPurchase : true,
    // soldOut : false,
    description : "These crystals have a good action within your brain to assist learning. They help you to feel greater mental discipline and might also kindle lucid dreaming.",
  },
  {
    name : "Serpentine Stone",
    price : "14.85",
    colour : "Green/ Yellow",
    canPurchase : true,
    // soldOut : false,
    description : "This causes very strong reactions as the energy moves up your spine. The intensity of this experience often stimulates sexual feelings, as it opens new areas to create 'enlightenment'.",
  },
  {
    name : "Citrine Crystals",
    price : "14.25",
    colour : "Pale Yellow",
    canPurchase : true,
    // soldOut : true,
    description : "These are one of the strongest stones for manifestation, as they help you to let go of fear. This will allow the flow of positive energy into your life, and create an increase in your prosperity, and this includes your capacity to manifest money.",
  },
  {
    name : "Thulite",
    price : "13.90",
    colour : "Pink",
    canPurchase : true,
    // soldOut : false,
    description : "It helps to break destructive thought patterns and will enhance your problem solving skills. It aids emotional healing, and encourages happiness, contentment and a joy filled life.",
  }
]


})();
