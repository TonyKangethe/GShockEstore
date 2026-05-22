let allWatches = [];
let currentCategory = 'all';
let currentSort = 'featured';

async function loadStoreWatches() {
  allWatches = await db.watches.toArray();
  applyFiltersAndSort();
}

function applyFiltersAndSort() {
  let filtered = allWatches;

  if (currentCategory !== 'all') {
    filtered = filtered.filter(w => w.category === currentCategory);
  }

  switch (currentSort) {
    case 'price-asc':
      filtered.sort((a, b) => a.priceKES - b.priceKES);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.priceKES - a.priceKES);
      break;
    case 'newest':
      filtered.sort((a, b) => b.id - a.id);
      break;
    case 'featured':
    default:
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.id - a.id);
      break;
  }

  renderStoreProducts(filtered);
}

function renderStoreProducts(watches) {
  const container = document.getElementById('store_products');
  container.innerHTML = '';

  watches.forEach(watch => {
    container.innerHTML += `
      <div class="group">
        <a href="product_details.html?sku=${watch.sku}" class="block">
          <div class="overflow-hidden rounded-xl bg-black/20">
            <img class="h-60 w-full object-contain transition-transform duration-500 group-hover:scale-105" src="${watch.image}" alt="${watch.name}">
          </div>
          <div class="pt-4">      
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs uppercase tracking-wide text-gray-500">${watch.category}</p>
                <h3 class="mt-1 text-sm font-medium text-black line-clamp-1">${watch.name}</h3>
              </div>
            </div>
            <p class="mt-1 text-lg font-semibold tracking-tight text-gray">KES ${watch.priceKES.toLocaleString()}</p>            
          </div>
        </a>
      </div>
    `;
  });
}

document.getElementById('sort-select').addEventListener('change', (e) => {
  currentSort = e.target.value;
  applyFiltersAndSort();
});

db.open().then(() => {
  loadStoreWatches();
});

async function addToCart(sku) {
  const watch = await db.watches.where('sku').equals(sku).first();
  const watchExist = await db.cart.where('sku').equals(sku).first();

  if(watchExist){
    await db.cart.update(watchExist.id, {quantity: watchExist.quantity + 1});
  } else {
    await db.cart.add({sku:watch.sku, name:watch.name, priceKES: watch.priceKES, image: watch.image, quantity: 1});
  }

  // remember to add toast notification 
  alert("Added to         cart") 

}

async function increaseQty(id) {
  const item = await db.cart.get(Number(id));

  await db.cart.update(Number(id), {
    quantity: item.quantity + 1
  });

  loadCart();
}

async function decreaseQty(id) {
  const item = await db.cart.get(Number(id));

  if (item.quantity <= 1) {
    await db.cart.delete(Number(id));
  } else {
    await db.cart.update(Number(id), {
      quantity: item.quantity - 1
    });
  }

  loadCart();
}

async function removeItem(id) {
  await db.cart.delete(Number(id));
  loadCart();
}

async function updateTotal() {

  const items = await db.cart.toArray();

  const total = items.reduce((sum, item) => {
    return sum + (item.priceKES * item.quantity);
  }, 0);

  document.getElementById("cart_total").innerHTML = `
    <h2 class="text-xl font-bold">
      Total: KES ${total.toLocaleString()}
    </h2>
  `;
}

async function loadWatches() {

  const watches = await db.watches.toArray();
  const featuredWatches = watches.filter(watch => watch.featured === false);
  const container = document.getElementById("products");

  featuredWatches.forEach(watch => {

    container.innerHTML += `
    
      <div id="product_cards" class="group">
        <a href="product_details.html?sku=${watch.sku}" class="block">
          <div class="overflow-hidden rounded-xl bg-black/20">
            <img class="h-60 w-full object-contain transition-transform duration-500 group-hover:scale-105" src="${watch.image}" alt="${watch.name}">
          </div>
          <div class="pt-4">      
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs uppercase tracking-wide text-gray-500">${watch.category}</p>
                <h3 class="mt-1 text-sm font-medium text-black line-clamp-1">${watch.name}</h3>
              </div>
            </div>
            <p class="mt-1 text-lg font-semibold tracking-tight text-gray">KES ${watch.priceKES.toLocaleString()}</p>            
          </div>
        </a>
      </div>

    `;
  });

};
loadWatches();

async function loadWatchDetails() {
    const params = new URLSearchParams(window.location.search);
    const sku = params.get('sku');

    const container = document.getElementById('product_details');

    if (!sku) {
      container.innerHTML = '<p class="text-center text-xl">No product selected.</p>';
      return;
    }

    const watch = await db.watches.where({ sku }).first();

    if (!watch) {
      container.innerHTML = '<p class="text-center text-xl">Product not found.</p>';
      return;
    }

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
            ${watch.specifications
              ? Object.entries(watch.specifications)
                  .map(
                    ([key, value]) =>
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
          <button class="rounded-full bg-black px-10 py-4 text-sm uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-gray-900 hover:shadow-lg" onclick="addToCart('${watch.sku}')">
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
  const sku = params.get('sku');
  const watch = await db.watches.where('sku').equals(sku).first();
  const relatedWatch = await db.watches.filter(item => item.sku !== watch.sku && (item.series === watch.series || item.category === watch.category)).toArray();

  const relatedContainer = document.getElementById('related_products');

  if (relatedWatch.length > 0) {

    relatedContainer.innerHTML = relatedWatch.map(item => `
      <div class="group">
        <a href="product_details.html?sku=${item.sku}" class="block">
          <div class="overflow-hidden rounded-xl bg-black/20">
            <img class="h-60 w-full object-contain transition-transform duration-500 group-hover:scale-105" src="${item.image}" alt="${item.name}">
          </div>
          <div class="pt-4">      
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="text-xs uppercase tracking-wide text-gray-500">${item.category}</p>
                <h3 class="mt-1 text-sm font-medium text-black line-clamp-1">${item.name}</h3>
              </div>
            </div>
            <p class="mt-1 text-lg font-semibold tracking-tight text-gray">KES ${item.priceKES.toLocaleString()}</p>            
          </div>
        </a>
      </div>
    `).join('');

  } else {
    container.innerHTML = `
      <p>No related products found.</p>
    `;
  }

};
relatedWatches();


