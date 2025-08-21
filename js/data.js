const products = [
  // --- SM Plants ---
  {id: 1, name: "Venus", price: 79, plant: "Epipremnum", size: "SM", label: 'new' , reviews: 28, img: 'img/venus.png' },
  {id: 2, name: "Piña",  price: 85, plant: "Pineapple plant", size: "SM", reviews: 30, img: 'img/pina.png' },
  {id: 3, name: "Ven",   price: 79, plant: "Epipremnum", size: "SM", label: 'new', reviews: 28, img: 'img/ven.png' },

  // --- Medium Plants ---
  { id: 4, name: "Rachel", price: 70, plant: "Caladium 'Ballet Slippers'", size: "Medium", label: 'Best Seller', reviews: 54, img: 'img/Rachel.png'},
  { id: 5, name: "Hugo",   price: 65, plant: "Hydroponic Anthurium",       size: "Medium", label: 'new', reviews: 52, img: 'img/Hugo.png' },
  { id: 6, name: "Misty",  price: 65, plant: "Caladium 'Ballet Slippers'", size: "Medium", reviews: 49, img: 'img/Mist.png' },

  { id: 7, name: "Mindi",  price: 33, plant: "Sansevieria 'Fernwood Mikado'", size: "Medium", reviews: 34, img: 'img/Mindi.png' },
  { id: 8, name: "Mid",    price: 54, plant: "Sansevieria 'Tough Lady'",     size: "Medium", reviews: 39, img: 'img/Mid.png' },
  { id: 9,name: "Zey",    price: 30, plant: "Sansevieria zeylanica",        size: "Medium",label: 'Trending',  reviews: 31, img: 'img/Zey.png' },

  { id: 10,name: "Cedric",   price: 49, plant: "Sansevieria cylindrica", size: "Medium",label: 'Trending', reviews: 49, img: 'img/Cedric.png' },
  { id: 11,name: "Isabella", price: 39, plant: "Parodia warasii",       size: "Medium", reviews: 20, img: 'img/Isabella.png' },
  { id: 12,name: "Dylan",    price: 43, plant: "Euphorbia trigona",      size: "Medium", reviews: 25, img: 'img/Dylan.png' },

  // --- Large Plants ---
  { id: 13,name: "Pippa",   price: 92,  plant: "Peach lily",               size: "Large", label: 'Best Seller', reviews: 40, img: 'img/Pippa.png' },
  { id: 14,name: "Anna",    price: 67,  plant: "Aglaonema 'Silver Bay'",   size: "Large", reviews: 32, img: 'img/Anna.png' },
  { id: 15,name: "Nicolau", price: 73,  plant: "Strelitzia nicolai",       size: "Large", reviews: 36, img: 'img/Nicolau.png' },

  { id: 16,name: "Elise",   price: 35,  plant: "Alocasia macrorrhizos",    size: "Large", reviews: 23, img: 'img/Elise.png' },
  { id: 17,name: "Reggie",  price: 50,  plant: "Bird of Paradise",         size: "Large", label: 'New', reviews: 20, img: 'img/Reggie.png' },
  { id: 18,name: "Howard",  price: 75,  plant: "ASPIDISTRA",               size: "Large", reviews: 28, img: 'img/Howard.png' },

  { id: 19,name: "Alicia",  price: 83,  plant: "Clusia rosea",             size: "Large",label: 'Best Seller', reviews: 44, img: 'img/Alicia.png' },
  { id: 20,name: "Rob",     price: 32,  plant: "Rubber plant",             size: "Large", reviews: 31, img: 'img/Rob.png' },
  { id: 21,name: "Robin",   price: 46,  plant: "Rubber plant",             size: "Large", label: 'New', reviews: 43, img: 'img/Robin.png' },

  // --- Huge Plants ---
  { id: 22,name: "Fidal Tree", price: 59,  plant: "Broadleaf fig",       size: "Huge",label: 'New',  reviews: 35, img: 'img/FidalTree.png' },
  { id: 23,name: "Ficus lyrata", price: 66, plant: "Fiddle-leaf fig",    size: "Huge",  reviews: 34, img: 'img/FicusLyrata.png' },
  { id: 24,name: "Fidal Big Tree", price: 99,  plant: "Giant-leaf fig",      size: "Huge",label: 'Best Seller',  reviews: 35, img: 'img/FidalBigTree.png' },

  { id: 25,name: "Fidal Tree", price: 59,  plant: "Fiddle-leaf fig",     size: "Huge",  reviews: 35, img: 'img/FidalLeafTree.png' },
  { id: 26,name: "Rapunzel",   price: 73,  plant: "Devil's ivy",         size: "Huge",  reviews: 47, img: 'img/Rapunzel.png' },
  { id: 27,name: "Wallace",    price: 86,  plant: "Monstera adansonii",  size: "Huge",label: 'Best Seller',  reviews: 38, img: 'img/Wallace.png' },

  { id: 28,name: "Flick",   price: 97,  plant: "Dracaena marginata",      size: "Huge", label: 'Best Seller',   reviews: 50, img: 'img/Flick.png' },
  { id: 29,name: "Mick",    price: 102, plant: "Dracaena fragrans",       size: "Huge", label: 'Best Seller',   reviews: 55, img: 'img/Mick.png' },
  { id: 30,name: "Ariel",   price: 112, plant: "Pachira aquatica",        size: "Huge", label: 'Best Seller',   reviews: 43, img: 'img/Ariel.png' },
];

const CartUtils = {
 
  addToCart: function(productId) {
    let cart = this.getCart();
    
    if (cart[productId]) {
      cart[productId].quantity += 1;
    } else {
      const product = products.find(p => p.id === productId);
      if (product) {
        cart[productId] = {
          ...product,
          quantity: 1
        };
      }
    }
    
    this.saveCart(cart);
    this.updateCartCount();
    this.showAddToCartMessage(productId);
    return true;
  },

  getCart: function() {
    try {
      return JSON.parse(localStorage.getItem('bloombare_cart')) || {};
    } catch (e) {
      return {};
    }
  },


  saveCart: function(cart) {
    localStorage.setItem('bloombare_cart', JSON.stringify(cart));
  },


  updateCartCount: function() {
    const cart = this.getCart();
    const count = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    
    if (badge) {
      if (count > 0) {
        badge.textContent = count;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }
  },

  showAddToCartMessage: function(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
    
      const message = document.createElement('div');
      message.className = 'fixed top-20 right-4 bg-[var(--main-color)] text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300';
      message.innerHTML = `
        <div class="flex items-center">
          <i class="bi bi-check-circle mr-2"></i>
          ${product.name} added to cart!
        </div>
      `;
      
      document.body.appendChild(message);
      
      setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(message);
        }, 300);
      }, 3000);
    }
  }
};

const productGrid = document.getElementById("product-grid");

const labelColors = {
  "New": "bg-[var(--main-color)]",
  "Best Seller": "bg-[var(--main-color)]",
  "Trending": "bg-[var(--main-color)]",
};

function renderProducts(productsToShow) {
  productGrid.innerHTML = ''; 

productsToShow.map(productItems => {
  productGrid.innerHTML += `
    <div class="flex justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
      <div class="bg-[var(--main-color6)] p-3 sm:p-4 md:p-4 lg:p-4 relative group shadow-md hover:shadow-lg transition-all 
                  w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-xs 
                  flex flex-col justify-between 
                  min-h-[200px] sm:min-h-[250px] md:min-h-[330px] lg:min-h-[400px] 
                  rounded-lg">
        
        ${productItems.label ? `
          <span class="absolute top-2 sm:top-3 right-2 sm:right-5 
                       ${labelColors[productItems.label] || "bg-[var(--main-color)]"} 
                       text-white font-semibold text-xs px-2 py-1 rounded-full 
                       w-10 h-10 sm:w-12 sm:h-12 
                       flex items-center justify-center -rotate-12">
            ${productItems.label}
          </span>
        ` : ''}

        <!-- Action Buttons -->
        <div class="absolute right-1 sm:right-2 top-12 sm:top-14 md:top-16 
                    flex flex-col gap-1 sm:gap-2 
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                    transition-all duration-300 ease-in-out">
          <button class="bg-white w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 p-1 sm:p-1.5 md:p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow" onclick="addToWishlist(${productItems.id})">
            <i class="bi bi-heart text-[var(--main-color)] text-xs sm:text-xs md:text-sm"></i>
          </button>
          <button class="copyLinkBtn bg-white w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 p-1 sm:p-1.5 md:p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow" onclick="copyProductLink(event)">
            <i class="bi bi-arrow-left-right text-[var(--main-color)] text-xs sm:text-xs md:text-sm"></i>
          </button>
          <button class="bg-white w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 p-1 sm:p-1.5 md:p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow" onclick="CartUtils.addToCart(${productItems.id})" title="Add to Cart">
            <i class="bi bi-bag text-[var(--main-color)] text-xs sm:text-xs md:text-sm"></i>
          </button>
        </div>
        
        <!-- Product Image -->
        <div class="w-full flex justify-center mb-1 sm:mb-2 md:mb-2">
          <img src="${productItems.img}" alt="${productItems.name}" 
               class="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-48 lg:h-48 object-contain rounded-lg lg:ps-3">
        </div>
        
        <!-- Product Info -->
        <div class="text-center space-y-1 sm:space-y-1.5 md:space-y-2 flex flex-col flex-grow justify-between">
          <div class="pt-1 sm:pt-2 md:pt-4 lg:pt-[10%]">
            <div class="flex justify-between items-end gap-1 sm:gap-2">
              <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 truncate flex-1 text-left">
                ${productItems.name}
              </h2>
              <span class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 whitespace-nowrap">
                ${productItems.price}$
              </span>
            </div>
            <div class="flex justify-between items-center text-gray-600 mt-0.5 sm:mt-1">
              <span class="text-xs sm:text-sm md:text-base truncate min-w-0 flex-1 text-left">
                ${productItems.plant}
              </span>
              <span class="text-xs sm:text-sm md:text-base font-medium whitespace-nowrap ml-1 sm:ml-2">
                ${productItems.size}
              </span>
            </div>
          </div>
          
          <!-- Rating -->
          <div class="flex items-center justify-start gap-1 sm:gap-2 pt-1 sm:pt-1.5 md:pt-2 lg:ps-2">
            <div class="flex gap-0.5 sm:gap-1">
              <span class="text-yellow-400 text-sm sm:text-base md:text-lg">★</span>
              <span class="text-yellow-400 text-sm sm:text-base md:text-lg">★</span>
              <span class="text-yellow-400 text-sm sm:text-base md:text-lg">★</span>
              <span class="text-yellow-400 text-sm sm:text-base md:text-lg">★</span>
              <span class="text-yellow-400 text-sm sm:text-base md:text-lg">★</span>
            </div>
            <span class="text-[var(--main-color9)] text-xs sm:text-sm font-medium">
              ${productItems.reviews} Reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
});

}

function filterProducts(size) {
  if (size === "Collection") {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.size === size);
    renderProducts(filtered);
  }
}

// function addToWishlist(productId) {
//   console.log(`Added product ${productId} to wishlist`);
//   // Implement wishlist functionality here
// }

function copyProductLink(event) {
    const card = event.currentTarget.closest(".relative");
    if (!card) return;

    const toast = document.createElement("div");
    toast.textContent = "Link is copy!";
    toast.className = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--main-color)] text-white px-4 py-2 rounded-lg shadow-lg opacity-0 transition-opacity duration-300 z-[999]";

    card.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove("opacity-0");
    }, 50);

    setTimeout(() => {
        toast.classList.add("opacity-0");
        setTimeout(() => toast.remove(), 300);
    }, 800);
}


document.querySelectorAll("#btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const size = btn.getAttribute("data-size");
    filterProducts(size);
    
    const existingBtn = document.querySelector('.show-all-btn');
    if (existingBtn) {
      existingBtn.remove();
    }
  });
});


const searchIcon = document.getElementById('search-icon');
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

let isOpen = false;

function showSearchSelectionToast(product) {
  
  const existingToast = document.querySelector('.search-selection-toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = 'search-selection-toast fixed top-20 right-4 bg-[var(--main-color)] text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300';
  toast.style.opacity = '0';
  toast.style.transform = 'translateX(100px)';
  
  toast.innerHTML = `
    <div class="flex items-center">
      <i class="bi bi-eye mr-2"></i>
      Showing: ${product.name}
    </div>
  `;
  
  document.body.appendChild(toast);
  

  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(0)';
  }, 10);
  
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 300);
  }, 3000);
}


function addShowAllButton() {
 
  const existingBtn = document.querySelector('.show-all-btn');
  if (existingBtn) {
    existingBtn.remove();
  }
  
  const showAllBtn = document.createElement('div');
  showAllBtn.className = 'show-all-btn flex justify-center mb-6 mt-4';
  showAllBtn.innerHTML = `
    <button class="bg-[var(--main-color)] hover:bg-[var(--main-hover)] text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md">
      <i class="bi bi-grid"></i>
      Show All Products
    </button>
  `;

  const productGrid = document.getElementById('product-grid');
  if (productGrid && productGrid.parentNode) {
    productGrid.parentNode.insertBefore(showAllBtn, productGrid);
   
    showAllBtn.addEventListener('click', () => {
      renderProducts(products);
      showAllBtn.remove();
      
      showSearchSelectionToast({name: "All Products"});
    });
  }
}


if (searchIcon) {
  searchIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen = !isOpen;
    searchModal.classList.toggle('active', isOpen);
    
    if (isOpen) {
      setTimeout(() => searchInput.focus(), 300);
    } else {
      searchInput.value = '';
      searchResults.innerHTML = '';
    }
  });
}


document.addEventListener('click', (e) => {
  if (searchModal && searchIcon && !searchModal.contains(e.target) && !searchIcon.contains(e.target)) {
    searchModal.classList.remove('active');
    isOpen = false;
    if (searchInput) {
      searchInput.value = '';
      searchResults.innerHTML = '';
    }
  }
});


if (searchInput) {
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    searchResults.innerHTML = '';
    
    if (query === '') return;
    
   
    const matches = products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.plant.toLowerCase().includes(query) ||
      product.size.toLowerCase().includes(query)
    ).slice(0, 8); 
    
    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="p-4 text-center text-gray-500">
          <i class="bi bi-search text-2xl mb-2 block"></i>
          <div class="text-sm">No plants found for "${query}"</div>
          <div class="text-xs mt-1">Try searching for plant names, types, or sizes</div>
        </div>
      `;
      return;
    }
    
 
    if (matches.length > 1) {
      const showAllItem = document.createElement('div');
      showAllItem.className = 'flex items-center p-3 hover:bg-gray-50 cursor-pointer rounded transition-colors border-b border-gray-100 bg-gray-25';
      showAllItem.innerHTML = `
        <div class="w-10 h-10 rounded-full bg-[var(--main-color)] flex items-center justify-center mr-3">
          <i class="bi bi-grid text-white text-xs"></i>
        </div>
        <div class="flex-1">
          <div class="font-medium text-sm text-[var(--main-color)]">Show All Results</div>
          <div class="text-xs text-gray-500">${matches.length} plants found</div>
        </div>
        <i class="bi bi-arrow-right text-[var(--main-color)]"></i>
      `;
      
      showAllItem.addEventListener('click', () => {
 
        searchModal.classList.remove('active');
        isOpen = false;
        searchInput.value = '';
        searchResults.innerHTML = '';
       
        renderProducts(matches);
        
        
        setTimeout(() => {
          const productGrid = document.getElementById('product-grid');
          if (productGrid) {
            productGrid.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
        
      
        showSearchSelectionToast({name: `${matches.length} Search Results`});
        addShowAllButton();
      });
      
      searchResults.appendChild(showAllItem);
    }
    

    matches.forEach(product => {
      const resultItem = document.createElement('div');
      resultItem.className = 'flex items-center p-3 hover:bg-gray-50 cursor-pointer rounded transition-colors border-b border-gray-100 last:border-b-0';
      
      resultItem.innerHTML = `
        <img src="${product.img}" alt="${product.name}" 
             class="w-10 h-10 rounded-full object-cover mr-3 bg-gray-100 border border-gray-200"
             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAyOEMxNi42ODYzIDI4IDEzLjkgMjUuMzEzNyAxMy45IDIyQzEzLjkgMTguNjg2MyAxNi42ODYzIDE2IDIwIDE2QzIzLjMxMzcgMTYgMjYuMSAxOC42ODYzIDI2LjEgMjJDMjYuMSAyNS4zMTM3IDIzLjMxMzcgMjggMjAgMjhaIiBmaWxsPSIjOUNBM0FGII8+Cjwvc3ZnPgo='">
        <div class="flex-1 min-w-0">
          <div class="font-medium text-sm text-gray-800 truncate">${product.name}</div>
          <div class="text-xs text-gray-500 truncate">${product.plant} • ${product.size}</div>
        </div>
        <div class="flex items-center gap-2">
          <div class="text-sm font-semibold text-[var(--main-color)]">$${product.price}</div>
          <i class="bi bi-arrow-right text-gray-400 text-xs"></i>
        </div>
      `;
    
   
      resultItem.addEventListener('click', () => {
        
        searchModal.classList.remove('active');
        isOpen = false;
        searchInput.value = '';
        searchResults.innerHTML = '';
        
    
        renderProducts([product]);
        
       
        setTimeout(() => {
          const productGrid = document.getElementById('product-grid');
          if (productGrid) {
            productGrid.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
        
       
        showSearchSelectionToast(product);
        
      
        addShowAllButton();
      });
      
      searchResults.appendChild(resultItem);
    });
  });

 
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const query = this.value.trim();
      if (query) {
        
        const matches = products.filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) || 
          product.plant.toLowerCase().includes(query.toLowerCase()) ||
          product.size.toLowerCase().includes(query.toLowerCase())
        );
        
      
        searchModal.classList.remove('active');
        isOpen = false;
        this.value = '';
        searchResults.innerHTML = '';
        
        if (matches.length > 0) {
         
          renderProducts(matches);
          
          
          setTimeout(() => {
            const productGrid = document.getElementById('product-grid');
            if (productGrid) {
              productGrid.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
              });
            }
          }, 100);
          
          
          showSearchSelectionToast({name: `${matches.length} Search Results for "${query}"`});
          addShowAllButton();
        } else {
          
          showSearchSelectionToast({name: `No results found for "${query}"`});
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderProducts(products);
  CartUtils.updateCartCount();
});