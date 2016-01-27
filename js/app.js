(function() {

  var app = angular.module("store", []);

  app.controller("StoreController", function(){
    this.products = jewels;
  });

  var jewels = [
  {
    name : "Sapphire Crystal",
    price : "14.65",
    colour : "Blue",
    canPurchase : true,
    // soldOut : false,
    description : "These crystals have a good action within your brain to assist learning. They help you to feel greater mental discipline and might also kindle lucid dreaming.",
    images [
      {
        full : "saphireCrystalFull.jpg",
        thumb : "saphireCrystalThumb.jpg",
      },
      {
        full : "saphireCrystalFull1.jpg",
        thumb : "saphireCrystalThumb1.jpg",
      }
    ]
  },
  {
    name : "Serpentine Stone",
    price : "14",
    colour : "Green/ Yellow",
    canPurchase : true,
    // soldOut : false,
    description : "This causes very strong reactions as the energy moves up your spine. The intensity of this experience often stimulates sexual feelings, as it opens new areas to create 'enlightenment'.",
    images [
      {
        full : "serpentineStoneFull.jpg",
        thumb : "serpentineStoneThumb.jpg",
      },
      {
        full : "serpentineStoneFull1.jpg",
        thumb : "serpentineStoneThumb1.jpg",
      }
    ]
  },
  {
    name : "Citrine Crystals",
    price : "14.25",
    colour : "Pale Yellow",
    canPurchase : true,
    // soldOut : true,
    description : "These are one of the strongest stones for manifestation, as they help you to let go of fear. This will allow the flow of positive energy into your life, and create an increase in your prosperity, and this includes your capacity to manifest money.",
    images [
      {
        full : "citrineCrystalFull.jpg",
        thumb : "citrineCrystalThumb.jpg",
      },
      {
        full : "citrineCrystalFull1.jpg",
        thumb : "citrineCrystalThumb1.jpg",
      }
    ]
  },
  {
    name : "Thulite Gem",
    price : "14.90",
    colour : "Pink",
    canPurchase : true,
    // soldOut : false,
    description : "It helps to break destructive thought patterns and will enhance your problem solving skills. It aids emotional healing, and encourages happiness, contentment and a joy filled life.",
    images [
      {
        full : "thuliteGemFull.jpeg",
        thumb : "thuliteGemThumb.jpeg",
      },
      {
        full : "thuliteGemFull1.jpeg",
        thumb : "thuliteGemThumb1.jpeg",
      }
    ]
  }
]


})();
