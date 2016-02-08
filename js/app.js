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
    images : [
      {
        full : "./styles/images/saphireCrystalFull.jpg",
        thumb : "./styles/images/saphireCrystalThumb.jpg",
      },
      {
        full : "./styles/images/saphireCrystalFull1.jpg",
        thumb : "./styles/images/saphireCrystalThumb1.jpg",
      }
    ],
    reviews : [
        {
          stars : 3,
          body : "Donec consectetur, mi sed vulputate pretium, nisl dolor placerat leo, et tincidunt lorem orci at erat. Donec fringilla tempus placerat",
          author : "someone@blahblah.co.uk"
        },
        {
          stars : 4,
          body : "Donec consectetur, mi sed vulputate pretium, nisl dolor placerat leo, et tincidunt lorem orci at erat. Donec fringilla tempus placerat",
          author : "someone@blahblah.co.uk"
        },
        {
          stars : 6,
          body : "Donec consectetur, mi sed vulputate pretium, nisl dolor placerat leo, et tincidunt lorem orci at erat. Donec fringilla tempus placerat",
          author : "someone@blahblah.co.uk"
        },
      ],
    },
  {
    name : "Serpentine Stone",
    price : "14",
    colour : "Green/ Yellow",
    canPurchase : true,
    // soldOut : false,
    description : "This causes very strong reactions as the energy moves up your spine. The intensity of this experience often stimulates sexual feelings, as it opens new areas to create 'enlightenment'.",
    images : [
      {
        full : "./styles/images/serpentineStoneFull.jpg",
        thumb : "./styles/images/serpentineStoneThumb.jpg",
      },
      {
        full : "./styles/images/serpentineStoneFull1.jpg",
        thumb : "./styles/images/serpentineStoneThumb1.jpg",
      }
    ],
    reviews : [
        {
          stars : 3,
          body : "Donec consectetur, mi sed vulputate pretium, nisl dolor placerat leo, et tincidunt lorem orci at erat. Donec fringilla tempus placerat",
          author : "someone@blahblah.co.uk"
        },
        {
          stars : 4,
          body : "Donec consectetur, mi sed vulputate pretium, nisl dolor placerat leo, et tincidunt lorem orci at erat. Donec fringilla tempus placerat",
          author : "someone@blahblah.co.uk"
        },
        {
          stars : 6,
          body : "Donec consectetur, mi sed vulputate pretium, nisl dolor placerat leo, et tincidunt lorem orci at erat. Donec fringilla tempus placerat",
          author : "someone@blahblah.co.uk"
        },
      ],
    },
  {
    name : "Citrine Crystals",
    price : "14.25",
    colour : "Pale Yellow",
    canPurchase : true,
    // soldOut : true,
    description : "These are one of the strongest stones for manifestation, as they help you to let go of fear. This will allow the flow of positive energy into your life, and create an increase in your prosperity, and this includes your capacity to manifest money.",
    images : [
      {
        full : "./styles/images/citrineCrystalFull.jpg",
        thumb : "./styles/images/citrineCrystalThumb.jpg",
      },
      {
        full : "./styles/images/citrineCrystalFull1.jpg",
        thumb : "./styles/images/citrineCrystalThumb1.jpg",
      }
    ],
    reviews : [
        {
          stars : 3,
          body : "Donec consectetur, mi sed vulputate pretium, nisl dolor placerat leo, et tincidunt lorem orci at erat. Donec fringilla tempus placerat",
          author : "someone@blahblah.co.uk"
        },
        {
          stars : 4,
          body : "Donec consectetur, mi sed vulputate pretium, nisl dolor placerat leo, et tincidunt lorem orci at erat. Donec fringilla tempus placerat",
          author : "someone@blahblah.co.uk"
        },
        {
          stars : 6,
          body : "Donec consectetur, mi sed vulputate pretium, nisl dolor placerat leo, et tincidunt lorem orci at erat. Donec fringilla tempus placerat",
          author : "someone@blahblah.co.uk"
        },
      ],
    },
  {
    name : "Thulite Gem",
    price : "14.90",
    colour : "Pink",
    canPurchase : true,
    // soldOut : false,
    description : "It helps to break destructive thought patterns and will enhance your problem solving skills. It aids emotional healing, and encourages happiness, contentment and a joy filled life.",
    images : [
      {
        full : "./styles/images/thuliteGemFull.jpg",
        thumb : "./styles/images/thuliteGemThumb.jpg",
      },
      {
        full : "./styles/images/thuliteGemFull1.jpg",
        thumb : "./styles/images/thuliteGemThumb1.jpg",
      }
    ],
    reviews : [
        {
          stars : 3,
          body : "Donec consectetur, mi sed vulputate pretium, nisl dolor placerat leo, et tincidunt lorem orci at erat. Donec fringilla tempus placerat",
          author : "someone@blahblah.co.uk"
        },
        {
          stars : 4,
          body : "Donec consectetur, mi sed vulputate pretium, nisl dolor placerat leo, et tincidunt lorem orci at erat. Donec fringilla tempus placerat",
          author : "someone@blahblah.co.uk"
        },
        {
          stars : 6,
          body : "Donec consectetur, mi sed vulputate pretium, nisl dolor placerat leo, et tincidunt lorem orci at erat. Donec fringilla tempus placerat",
          author : "someone@blahblah.co.uk"
        },
      ],
    }
  ]
  
  app.controller("PanelController", function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

})();
