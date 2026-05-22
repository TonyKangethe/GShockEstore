const db = new Dexie("GShockEstoreDB");

db.version(1).stores({
  watches: "++id, sku, name, series, priceKES, category, featured",
  cart: "++id, sku, name, priceKES, image, quantity",
  orders: "++id, sku, quantity, priceKES, createdAt",
});

db.on("populate", async () => {

  await db.watches.bulkAdd([

    {
      sku: "DW5600BB-1",
      name: "G-Shock DW5600BB-1",
      series: "5600",
      priceKES: 12999,
      category: "Digital",
      featured: true,
      image: "images/dw5600bb-1.jpg",
      description: "Classic all-black square G-Shock with shock resistance, EL backlight, and 200M water resistance.",
      specifications: {
        display: "Digital",
        waterResistance: "200M",
        batteryLife: "2 Years",
        material: "Resin Case & Strap"
      },
      reviews: [
        "Very durable and lightweight for daily wear.",
        "Love the stealth black design and simple layout.",
        "Battery lasts long and the watch feels rugged.",
      ]
    },

    {
      sku: "GA2100-1A1",
      name: "G-Shock GA2100-1A1",
      series: "2100",
      priceKES: 15600,
      category: "Analog-Digital",
      featured: true,
      image: "images/ga2100-1a1.jpg",
      description: "Slim carbon-core octagonal G-Shock inspired by the original DW5000 design.",
      specifications: {
        display: "Analog-Digital",
        waterResistance: "200M",
        batteryLife: "3 Years",
        material: "Carbon Core Guard"
      },
      reviews: [
        "The CasiOak design looks premium and modern.",
        "Comfortable enough to wear all day.",
        "Excellent value for a stylish G-Shock."
      ]
    },

    {
      sku: "GA-100BEG-1A",
      name: "G-Shock GA-100BEG-1A",
      series: "GA100",
      priceKES: 14300,
      category: "Analog-Digital",
      featured: false,
      image: "images/GA-100BEG-1A.jpg",
      description: "Bold oversized G-Shock with world time, stopwatch, and military-inspired styling.",
      specifications: {
        display: "Analog-Digital",
        waterResistance: "200M",
        batteryLife: "2 Years",
        material: "Resin"
      },
      reviews: [
        "Large face makes it easy to read outdoors.",
        "Perfect watch for gym and casual wear.",
        "Buttons are responsive and easy to use."
      ]
    },

    {
      sku: "GW9400-1",
      name: "G-Shock Rangeman",
      series: "Master of G",
      priceKES: 41600,
      category: "Outdoor",
      featured: true,
      image: "images/gw9400-1.jpg",
      description: "Professional outdoor survival watch with Triple Sensor technology and solar charging.",
      specifications: {
        display: "Digital",
        waterResistance: "200M",
        batteryLife: "Solar Powered",
        material: "Resin"
      },
      reviews: [
        "Amazing for hiking and outdoor adventures.",
        "Compass and altimeter work accurately.",
        "Built like a tank and worth the price."
      ]
    },

    {
      sku: "GG1000-1A3",
      name: "G-Shock Mudmaster",
      series: "Mudmaster",
      priceKES: 36400,
      category: "Outdoor",
      featured: true,
      image: "images/gg1000-1a3.jpg",
      description: "Mud-resistant tactical watch built for extreme environments and outdoor activities.",
      specifications: {
        display: "Analog-Digital",
        waterResistance: "200M",
        batteryLife: "2 Years",
        material: "Mud Resistant Resin"
      },
      reviews: [
        "Excellent build quality for rough conditions.",
        "Looks aggressive and masculine.",
        "Very reliable during camping trips."
      ]
    },

    {
      sku: "GA700-1B",
      name: "G-Shock GA700",
      series: "GA700",
      priceKES: 17550,
      category: "Analog-Digital",
      featured: false,
      image: "images/ga700-1b.jpg",
      description: "Heavy-duty analog-digital watch with oversized buttons and sporty styling.",
      specifications: {
        display: "Analog-Digital",
        waterResistance: "200M",
        batteryLife: "5 Years",
        material: "Resin"
      },
      reviews: [
        "The illumination is bright and clear.",
        "Feels strong and durable on the wrist.",
        "Great for sports and everyday use."
      ]
    },

    {
      sku: "DW6900-1V",
      name: "G-Shock DW6900",
      series: "6900",
      priceKES: 12350,
      category: "Digital",
      featured: false,
      image: "images/dw6900-1v.jpg",
      description: "Iconic round-face digital G-Shock with classic streetwear appeal.",
      specifications: {
        display: "Digital",
        waterResistance: "200M",
        batteryLife: "2 Years",
        material: "Resin"
      },
      reviews: [
        "Classic design that never gets old.",
        "Super comfortable and lightweight.",
        "Excellent durability for the price."
      ]
    },

    {
      sku: "GA110GB-1A",
      name: "G-Shock GA110GB",
      series: "GA110",
      priceKES: 19500,
      category: "Analog-Digital",
      featured: true,
      image: "images/ga110gb-1a.jpg",
      description: "Glossy black and gold G-Shock with oversized face and premium styling.",
      specifications: {
        display: "Analog-Digital",
        waterResistance: "200M",
        batteryLife: "2 Years",
        material: "Resin"
      },
      reviews: [
        "Gold accents look very premium.",
        "Perfect statement watch for casual outfits.",
        "Strong and stylish at the same time."
      ]
    },

    {
      sku: "GSTB400-1A",
      name: "G-Steel GSTB400",
      series: "G-Steel",
      priceKES: 54600,
      category: "Premium",
      featured: true,
      image: "images/gstb400-1a.jpg",
      description: "Slim stainless-steel G-Shock with Bluetooth connectivity and solar charging.",
      specifications: {
        display: "Analog",
        waterResistance: "200M",
        batteryLife: "Solar Powered",
        material: "Stainless Steel"
      },
      reviews: [
        "Feels luxurious without losing toughness.",
        "Bluetooth sync works perfectly.",
        "Excellent finishing and comfort."
      ]
    },

    {
      sku: "GM2100-1A",
      name: "G-Shock GM2100",
      series: "2100 Metal",
      priceKES: 31200,
      category: "Premium",
      featured: true,
      image: "images/gm2100-1a.jpg",
      description: "Metal bezel version of the popular GA2100 with refined premium aesthetics.",
      specifications: {
        display: "Analog-Digital",
        waterResistance: "200M",
        batteryLife: "3 Years",
        material: "Metal Bezel & Resin Strap"
      },
      reviews: [
        "Looks much more expensive than it is.",
        "The metal finish is beautiful.",
        "Great blend of elegance and toughness."
      ]
    },

    {
      sku: "GBD200-1",
      name: "G-Shock GBD200",
      series: "G-Squad",
      priceKES: 23400,
      category: "Fitness",
      featured: false,
      image: "images/gbd200-1.jpg",
      description: "Fitness-focused G-Shock with Bluetooth connectivity and step tracking.",
      specifications: {
        display: "Digital",
        waterResistance: "200M",
        batteryLife: "2 Years",
        material: "Resin"
      },
      reviews: [
        "Perfect for running and workouts.",
        "Display is sharp and easy to read.",
        "App integration is smooth and useful."
      ]
    },

    {
      sku: "GBA900-1A",
      name: "G-Shock GBA900",
      series: "G-Squad",
      priceKES: 22100,
      category: "Fitness",
      featured: false,
      image: "images/gba900-1a.jpg",
      description: "Sporty fitness watch with smartphone link and activity tracking features.",
      specifications: {
        display: "Analog-Digital",
        waterResistance: "200M",
        batteryLife: "2 Years",
        material: "Resin"
      },
      reviews: [
        "Tracks workouts accurately.",
        "Very sporty and lightweight design.",
        "Good smartwatch features without daily charging."
      ]
    },

    {
      sku: "MTGB3000B-1A",
      name: "G-Shock MTG-B3000",
      series: "MT-G",
      priceKES: 136500,
      category: "Luxury",
      featured: true,
      image: "images/mtgb3000b-1a.jpg",
      description: "Luxury MT-G model featuring carbon-reinforced construction and premium detailing.",
      specifications: {
        display: "Analog",
        waterResistance: "200M",
        batteryLife: "Solar Powered",
        material: "Carbon & Stainless Steel"
      },
      reviews: [
        "Absolutely stunning luxury G-Shock.",
        "Premium materials and perfect craftsmanship.",
        "Feels solid yet surprisingly comfortable."
      ]
    },

    {
      sku: "MRGB5000B-1",
      name: "G-Shock MRGB5000",
      series: "MR-G",
      priceKES: 494000,
      category: "Luxury",
      featured: true,
      image: "images/mrgb5000b-1.jpg",
      description: "Flagship titanium MR-G square G-Shock crafted with elite Japanese finishing.",
      specifications: {
        display: "Digital",
        waterResistance: "200M",
        batteryLife: "Solar Powered",
        material: "Titanium"
      },
      reviews: [
        "The best G-Shock money can buy.",
        "Titanium finish feels ultra premium.",
        "Exceptional attention to detail."
      ]
    },

    {
      sku: "GX56BB-1",
      name: "G-Shock GX56BB",
      series: "King",
      priceKES: 20800,
      category: "Digital",
      featured: false,
      image: "images/gx56bb-1.jpg",
      description: "Massive oversized King G-Shock with extreme shock resistance and bold styling.",
      specifications: {
        display: "Digital",
        waterResistance: "200M",
        batteryLife: "Solar Powered",
        material: "Resin"
      },
      reviews: [
        "Huge watch with incredible wrist presence.",
        "Extremely rugged and durable.",
        "Perfect for collectors of big watches."
      ]
    },

    {
      sku: "GA2200M-1A",
      name: "G-Shock GA2200",
      series: "GA2200",
      priceKES: 18850,
      category: "Analog-Digital",
      featured: false,
      image: "images/ga2200m-1a.jpg",
      description: "Modern carbon-core G-Shock with industrial-inspired rugged styling.",
      specifications: {
        display: "Analog-Digital",
        waterResistance: "200M",
        batteryLife: "3 Years",
        material: "Carbon Core Resin"
      },
      reviews: [
        "Modern design looks fantastic.",
        "Very lightweight despite rugged build.",
        "Excellent visibility in daylight."
      ]
    }

  ]);

});
db.open();
