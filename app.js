async function allWatches(){
    const watches = await db.watches.toArray();
    const container = document.getElementById("All");

    watches.forEach(watch=> {
        container.innerHTML +=`
        
        <div class="group">
            <a href="product_details.html?id=${watch.id}" class="block">
            <div class="overflow-hidden">
                <img class="h-60 w-full object-contain" src="${watch.image}" alt="${watch.name}">
            </div>
            <div class="pt-4">      
                <div class="flex items-start justify-between gap-3">
                <div>
                    <p class="text-xs uppercase tracking-wide text-gray-500">${watch.category}</p>
                    <h3 class="mt-1 text-sm font-medium text-black line-clamp-1">${watch.name}</h3>
                </div>
                </div>
                <p class="mt-1 text-sm font-semibold tracking-tight text-gray">KES ${watch.priceKES.toLocaleString()}</p>            
            </div>
            </a>
        </div>

        `;
    });
};
allWatches();

async function DigitalWatches(){
    const watches = await db.watches.toArray();
    const digitalWatches = watches.filter(watch => watch.category === 'Digital');
    const container = document.getElementById("Digital");

    digitalWatches.forEach(watch=> { container.innerHTML +=`
        
    <div class="group">
        <a href="product_details.html?id=${watch.id}" class="block">
          <div class="overflow-hidden">
            <img class="h-60 w-full object-contain" src="${watch.image}" alt="${watch.name}">
          </div>
          <div class="pt-4">      
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs uppercase tracking-wide text-gray-500">${watch.category}</p>
                <h3 class="mt-1 text-sm font-medium text-black line-clamp-1">${watch.name}</h3>
              </div>
            </div>
            <p class="mt-1 text-sm font-semibold tracking-tight text-gray">KES ${watch.priceKES.toLocaleString()}</p>            
          </div>
        </a>
      </div>

        `;
    });
};
DigitalWatches();

async function analogDigitalWatches(){
    const watches = await db.watches.toArray();
    const a_DWatches = watches.filter(watch => watch.category === 'Analog-Digital');
    const container = document.getElementById("Analog-Digital");

    a_DWatches.forEach(watch=> { container.innerHTML +=`
        
    <div class="group">
        <a href="product_details.html?id=${watch.id}" class="block">
          <div class="overflow-hidden">
            <img class="h-60 w-full object-contain" src="${watch.image}" alt="${watch.name}">
          </div>
          <div class="pt-4">      
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs uppercase tracking-wide text-gray-500">${watch.category}</p>
                <h3 class="mt-1 text-sm font-medium text-black line-clamp-1">${watch.name}</h3>
              </div>
            </div>
            <p class="mt-1 text-sm font-semibold tracking-tight text-gray">KES ${watch.priceKES.toLocaleString()}</p>            
          </div>
        </a>
      </div>

        `;
    });
};
analogDigitalWatches();

async function outdoorWatches(){
    const watches = await db.watches.toArray();
    const outdoorWatches = watches.filter(watch => watch.category === 'Outdoor');
    const container = document.getElementById("Outdoor");

    outdoorWatches.forEach(watch=> { container.innerHTML +=`
        
    <div class="group">
        <a href="product_details.html?id=${watch.id}" class="block">
          <div class="overflow-hidden">
            <img class="h-60 w-full object-contain" src="${watch.image}" alt="${watch.name}">
          </div>
          <div class="pt-4">      
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs uppercase tracking-wide text-gray-500">${watch.category}</p>
                <h3 class="mt-1 text-sm font-medium text-black line-clamp-1">${watch.name}</h3>
              </div>
            </div>
            <p class="mt-1 text-sm font-semibold tracking-tight text-gray">KES ${watch.priceKES.toLocaleString()}</p>            
          </div>
        </a>
      </div>

        `;
    });
};
outdoorWatches();

async function premiumWatches(){
    const watches = await db.watches.toArray();
    const premiumWatches = watches.filter(watch => watch.category === 'Premium');
    const container = document.getElementById("Premium");

    premiumWatches.forEach(watch=> { container.innerHTML +=`
        
    <div class="group">
        <a href="product_details.html?id=${watch.id}" class="block">
          <div class="overflow-hidden">
            <img class="h-60 w-full object-contain" src="${watch.image}" alt="${watch.name}">
          </div>
          <div class="pt-4">      
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs uppercase tracking-wide text-gray-500">${watch.category}</p>
                <h3 class="mt-1 text-sm font-medium text-black line-clamp-1">${watch.name}</h3>
              </div>
            </div>
            <p class="mt-1 text-sm font-semibold tracking-tight text-gray">KES ${watch.priceKES.toLocaleString()}</p>            
          </div>
        </a>
      </div>

        `;
    });
};
premiumWatches();

async function luxuryWatches(){
    const watches = await db.watches.toArray();
    const luxuryWatches = watches.filter(watch => watch.category === 'Luxury');
    const container = document.getElementById("Luxury");

    luxuryWatches.forEach(watch=> { container.innerHTML +=`
        
    <div class="group">
        <a href="product_details.html?id=${watch.id}" class="block">
          <div class="overflow-hidden">
            <img class="h-60 w-full object-contain" src="${watch.image}" alt="${watch.name}">
          </div>
          <div class="pt-4">      
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs uppercase tracking-wide text-gray-500">${watch.category}</p>
                <h3 class="mt-1 text-sm font-medium text-black line-clamp-1">${watch.name}</h3>
              </div>
            </div>
            <p class="mt-1 text-sm font-semibold tracking-tight text-gray">KES ${watch.priceKES.toLocaleString()}</p>            
          </div>
        </a>
      </div>

        `;
    });
};
luxuryWatches();

async function fitnessWatches(){
    const watches = await db.watches.toArray();
    const fitnessWatches = watches.filter(watch => watch.category === 'Fitness');
    const container = document.getElementById("Fitness");

    fitnessWatches.forEach(watch=> { container.innerHTML +=`
        
    <div class="group">
        <a href="product_details.html?id=${watch.id}" class="block">
          <div class="overflow-hidden">
            <img class="h-60 w-full object-contain" src="${watch.image}" alt="${watch.name}">
          </div>
          <div class="pt-4">      
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs uppercase tracking-wide text-gray-500">${watch.category}</p>
                <h3 class="mt-1 text-sm font-medium text-black line-clamp-1">${watch.name}</h3>
              </div>
            </div>
            <p class="mt-1 text-sm font-semibold tracking-tight text-gray">KES ${watch.priceKES.toLocaleString()}</p>            
          </div>
        </a>
      </div>

        `;
    });
};
fitnessWatches();

async function loadWatchDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");    
    const watch = await db.watches.get(Number(id));
    const container = document.getElementById('product_details'); 

    container.innerHTML = `

    <div class="flex flex-wrap mx-1 items-start">
        <div class="w-80 lg:w-1/2 px-6 mb-12 lg:mb-0 rounded-3xl">
          <div class="overflow-hidden">
            <img id="${watch.name}" class="w-76 h-76 object-cover" src="${watch.image}" alt="${watch.name}">
          </div>
        </div>

      <div class="w-auto h-full lg:w-1/2 px-6 bg-gray-100 rounded-3xl">
        <p class="mt-3 mb-2 text-xs uppercase tracking-[0.25em] text-gray-400">
          ${watch.series} Series
        </p>
        <h1 class="mb-4 text-5xl font-semibold tracking-tight text-black">
          ${watch.name}
        </h1>
        <div class="mb-8">
          <span class="text-3xl tracking-tight text-black">
            KES ${watch.priceKES.toLocaleString()}
          </span>
        </div>

        <p class="mb-10 max-w-xl leading-relaxed text-gray-600">
          ${watch.description}
        </p>

        <div class="border-t border-gray-200 pt-8">
          <div class="grid grid-cols-1 gap-y-6 text-sm">
            ${watch.specifications ? Object.entries(watch.specifications).map(([key, value]) =>
                      `<div>
                        <p class="mb-1 text-sm uppercase tracking-[0.18em] text-gray-400"><i>${key}</i></p>
                        <p class="font-medium text-black">${value}</p>
                      </div>`
                  )
                  .join('')
              : '<p class="text-gray-500">Specifications not available</p>'}
          </div>
        </div>

        <div class="my-12 flex flex-wrap gap-4">
          <button onclick="addToCart('${watch.id}')" class="rounded-full bg-black px-10 py-4 text-sm uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-gray-900 hover:shadow-lg">
            Add to Cart
          </button>
          <button class="rounded-full border border-gray-300 px-10 py-4 text-sm uppercase tracking-[0.2em] text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white">
            Buy Now
          </button>
        </div>
      </div>        
    `;
    document.title = `${watch.name}`;
    
};
loadWatchDetails();

async function relatedWatches(){
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const watch = await db.watches.get(id);
  const relatedWatch = await db.watches.filter(item => item.id !== watch.id && (item.series === watch.series || item.category === watch.category)).toArray();

  const relatedContainer = document.getElementById('related_products');

  if (relatedWatch.length > 0) {

    relatedContainer.innerHTML = relatedWatch.map(item => `
      <div class="group">
        <a href="product_details.html?id=${item.id}" class="block">
          <div class="overflow-hidden">
            <img class="h-60 w-full object-contain transition-transform duration-500 group-hover:scale-105" src="${item.image}" alt="${item.name}">
          </div>
          <div class="pt-4">      
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs uppercase tracking-wide text-gray-500">${item.category}</p>
                <h3 class="mt-1 text-sm font-medium text-black line-clamp-1">${item.name}</h3>
              </div>
            </div>
            <p class="mt-1 text-sm font-semibold tracking-tight text-gray">KES ${item.priceKES.toLocaleString()}</p>            
          </div>
        </a>
      </div>
    `).join('');

  } else {
    relatedContainer.innerHTML = `
      <p>No related products found.</p>
    `;
  }

};
relatedWatches();

async function addToCart(id) {  
  const watch = await db.watches.get(Number(id));
  const watchExist = await db.cart.where('id').equals(Number(id)).first();

  if(watchExist){
    await db.cart.update(watchExist.id, {quantity: watchExist.quantity + 1});
  } else {
    await db.cart.add({id:watch.id, sku:watch.sku, name:watch.name, priceKES: watch.priceKES, image: watch.image, quantity: 1});
  }

  // remember to add toast notification 
  alert("Added to cart")

  cartItems();
};

async function removeFromCart(id) {
    await db.cart.delete(id);

    cartItems();    
};

async function addQuantity(id){
    const item = await db.cart.get(id);
    if(!(item.quantity > 9)){
        await db.cart.update(id, {quantity: item.quantity + 1});
    }

    cartItems();
};

async function subtractQuantity(id){
    const item = await db.cart.get(id);
    if(item.quantity > 1){
        await db.cart.update(id, {quantity: item.quantity - 1});
    }

    cartItems();
};

async function cartItems() {
    const items = await db.cart.toArray();
    const itemsCount = await db.cart.count();
    const container = document.getElementById("cart_items");

    container.innerHTML = "";

    let subtotal = 0;
    let shipping = 1500;
    let VAT = 0;
    let total = 0;


    if (itemsCount > 0){
        document.getElementById("cart_items_num").innerHTML = `(${itemsCount})`;

        items.forEach(item=>{subtotal += item.priceKES * item.quantity});
        items.forEach(item=>{VAT += (item.priceKES * item.quantity) * 0.16});
        total = subtotal + shipping + VAT;

        document.getElementById("Subtotal").innerHTML = `${subtotal.toLocaleString()}`;
        document.getElementById("Shipping").innerHTML = `${shipping.toLocaleString()}`;
        document.getElementById("VAT").innerHTML = `${VAT.toLocaleString()}`;
        document.getElementById("grand_total").innerHTML = `${total.toLocaleString()}`;
    }
    

    items.forEach(item=>{
        container.innerHTML += `

        <div class="bg-gray-100 rounded-3xl p-6 flex flex-col md:flex-row gap-6 my-5 mx-5">
                <img src="${item.image}" alt="${item.image}" class="w-full md:w-44 h-44 object-cover rounded-2xl">
                <div class="flex-1">
                    <h2 class="text-3xl font-semibold text-black mb-2">
                        ${item.name}
                    </h2>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        ${item.sku}
                    </p>
                    <div class="flex items-center justify-between flex-wrap gap-4">
                        <div class="flex items-center bg-white rounded-full px-2 py-2 border border-gray-200">
                            <button onclick="subtractQuantity(${item.id})" class="px-4 hover:text-red-600"><span class="pt-1 material-symbols-outlined">remove</span></button>
                            <input type="text" value="${item.quantity}" class="w-10 text-center outline-none bg-transparent">
                            <button onclick="addQuantity(${item.id})" class="px-4 hover:text-green-600"><span class="pt-1 material-symbols-outlined">add</span></button>
                        </div>

                        <div class="text-right">
                            <p class="text-lg font-semibold text-black">
                                KES ${(item.quantity * item.priceKES).toLocaleString()}
                            </p>
                            <button onclick="removeFromCart(${item.id})" class="text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-red-600 mt-2">
                                <span class="pt-1 material-symbols-outlined">delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
};
cartItems();

async function checkOut() {
    const items = await db.cart.toArray();
    const itemsCount = await db.cart.count();

    let subtotal = 0;
    let shipping = 1500;
    let VAT = 0;
    let total = 0;

    items.forEach(item => {
        subtotal += item.priceKES * item.quantity;
    });

    VAT = subtotal * 0.16;
    total = subtotal + shipping + VAT;

    document.getElementById("items_num").innerHTML = `${itemsCount}`;
    document.getElementById("Subtotal").innerHTML = `KES ${subtotal.toLocaleString()}`;
    document.getElementById("Shipping").innerHTML = `KES ${shipping.toLocaleString()}`;
    document.getElementById("VAT").innerHTML = `KES ${VAT.toLocaleString()}`;
    document.getElementById("grand_total").innerHTML = `KES ${total.toLocaleString()}`;

    const container = document.getElementById("checkout_items");
    container.innerHTML = "";

    items.forEach(item => {
        container.innerHTML += `
            <tr>
                <td class="px-5 py-3 text-left">${item.name}</td>
                <td class="px-5 py-3 text-left">${item.sku}</td>
                <td class="px-5 py-3 text-right">${item.quantity}</td>
                <td class="px-5 py-3 text-right">KES ${(item.priceKES * item.quantity).toLocaleString()}</td>
            </tr>
        `;
    });
};
checkOut();

async function placeOrder() {
    const items = await db.cart.toArray();

    if (items.length === 0) {
        alert("Your cart is empty!");
        return;
    }


    alert("Order placed successfully!");


    await db.cart.clear();

    // Refresh cart UI
    cartItems();
    checkOut();
}





