
class CartManager {
    constructor() {
        this.cart = this.loadCart();
        this.init();
    }


    loadCart() {
        try {
            const saved = localStorage.getItem('bloombare_cart');
            return saved ? JSON.parse(saved) : {};
        } catch (e) {
            console.error('Error loading cart:', e);
            return {};
        }
    }

  
    saveCart() {
        try {
            localStorage.setItem('bloombare_cart', JSON.stringify(this.cart));
            console.log('Cart saved:', this.cart);
        } catch (e) {
            console.error('Error saving cart:', e);
        }
    }


    addItem(productId) {
        const product = this.findProduct(productId);
        if (!product) {
            console.error('Product not found:', productId);
            return false;
        }

        if (this.cart[productId]) {
            this.cart[productId].quantity += 1;
        } else {
            this.cart[productId] = {
                ...product,
                quantity: 1
            };
        }
        this.saveCart();
        this.renderCart();
        console.log('Item added:', productId);
        return true;
    }

    removeItem(productId) {
        if (this.cart[productId]) {
            delete this.cart[productId];
            this.saveCart();
            this.renderCart();
            console.log('Item removed:', productId);
        }
    }


    updateQuantity(productId, change) {
        if (this.cart[productId]) {
            const newQty = this.cart[productId].quantity + change;
            if (newQty <= 0) {
                this.removeItem(productId);
            } else {
                this.cart[productId].quantity = newQty;
                this.saveCart();
                this.renderCart();
            }
        }
    }


    findProduct(productId) {
        const products = [
            {id: 1, name: "Venus", price: 79, plant: "Epipremnum", size: "SM", label: 'new' , reviews: 28, img: 'img/venus.png' },
            {id: 2, name: "Piña",  price: 85, plant: "Pineapple plant", size: "SM", reviews: 30, img: 'img/pina.png' },
            {id: 3, name: "Ven",   price: 79, plant: "Epipremnum", size: "SM", label: 'new', reviews: 28, img: 'img/ven.png' },
            { id: 4, name: "Rachel", price: 70, plant: "Caladium 'Ballet Slippers'", size: "Medium", label: 'Best Seller', reviews: 54, img: 'img/Rachel.png'},
            { id: 5, name: "Hugo",   price: 65, plant: "Hydroponic Anthurium",       size: "Medium", label: 'new', reviews: 52, img: 'img/Hugo.png' },
            { id: 6, name: "Misty",  price: 65, plant: "Caladium 'Ballet Slippers'", size: "Medium", reviews: 49, img: 'img/Mist.png' },
            { id: 7, name: "Mindi",  price: 33, plant: "Sansevieria 'Fernwood Mikado'", size: "Medium", reviews: 34, img: 'img/Mindi.png' },
            { id: 8, name: "Mid",    price: 54, plant: "Sansevieria 'Tough Lady'",     size: "Medium", reviews: 39, img: 'img/Mid.png' },
            { id: 9,name: "Zey",    price: 30, plant: "Sansevieria zeylanica",        size: "Medium",label: 'Trending',  reviews: 31, img: 'img/Zey.png' },
            { id: 10,name: "Cedric",   price: 49, plant: "Sansevieria cylindrica", size: "Medium",label: 'Trending', reviews: 49, img: 'img/Cedric.png' },
            { id: 11,name: "Isabella", price: 39, plant: "Parodia warasii",       size: "Medium", reviews: 20, img: 'img/Isabella.png' },
            { id: 12,name: "Dylan",    price: 43, plant: "Euphorbia trigona",      size: "Medium", reviews: 25, img: 'img/Dylan.png' },
            { id: 13,name: "Pippa",   price: 92,  plant: "Peach lily",               size: "Large", label: 'Best Seller', reviews: 40, img: 'img/Pippa.png' },
            { id: 14,name: "Anna",    price: 67,  plant: "Aglaonema 'Silver Bay'",   size: "Large", reviews: 32, img: 'img/Anna.png' },
            { id: 15,name: "Nicolau", price: 73,  plant: "Strelitzia nicolai",       size: "Large", reviews: 36, img: 'img/Nicolau.png' },
            { id: 16,name: "Elise",   price: 35,  plant: "Alocasia macrorrhizos",    size: "Large", reviews: 23, img: 'img/Elise.png' },
            { id: 17,name: "Reggie",  price: 50,  plant: "Bird of Paradise",         size: "Large", label: 'New', reviews: 20, img: 'img/Reggie.png' },
            { id: 18,name: "Howard",  price: 75,  plant: "ASPIDISTRA",               size: "Large", reviews: 28, img: 'img/Howard.png' },
            { id: 19,name: "Alicia",  price: 83,  plant: "Clusia rosea",             size: "Large",label: 'Best Seller', reviews: 44, img: 'img/Alicia.png' },
            { id: 20,name: "Rob",     price: 32,  plant: "Rubber plant",             size: "Large", reviews: 31, img: 'img/Rob.png' },
            { id: 21,name: "Robin",   price: 46,  plant: "Rubber plant",             size: "Large", label: 'New', reviews: 43, img: 'img/Robin.png' },
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
        
        return products.find(p => p.id === productId);
    }

  
    getTotal() {
        return Object.values(this.cart).reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

   
    getTotalItems() {
        return Object.values(this.cart).reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    }


    clearCart() {
        this.cart = {};
        this.saveCart();
        this.renderCart();
        console.log('Cart cleared');
    }


    renderCart() {
        const container = document.getElementById('cart-items-container');
        const emptyCart = document.getElementById('empty-cart');
        const cartItems = Object.values(this.cart);

        if (cartItems.length === 0) {
            container.innerHTML = '';
            if (emptyCart) {
                container.appendChild(emptyCart);
                emptyCart.classList.remove('hidden');
            }
            const checkoutBtn = document.getElementById('checkout-btn');
            if (checkoutBtn) checkoutBtn.disabled = true;
        } else {
            if (emptyCart) emptyCart.classList.add('hidden');
            const checkoutBtn = document.getElementById('checkout-btn');
            if (checkoutBtn) checkoutBtn.disabled = false;
            
            container.innerHTML = cartItems.map((item, index) => `
                <div class="cart-item flex items-center justify-between ${index < cartItems.length - 1 ? 'border-b border-gray-200 pb-6 mb-6' : ''}">
                    <div class="flex items-center space-x-4">
                        <img src="${item.img}" alt="${item.name}" class="w-20 h-20 rounded-lg object-cover">
                        <div>
                            <h3 class="text-xl font-bold text-[var(--main-color)]">${item.name}</h3>
                            <p class="text-gray-600">${item.plant}</p>
                            <p class="text-gray-500 text-sm">Size: ${item.size}</p>
                            <p class="text-2xl font-bold text-[var(--main-color)] mt-1">${item.price}$</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div class="flex items-center border border-gray-300 rounded-lg">
                            <button class="quantity-btn px-3 py-1 text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-white transition-colors duration-200" 
                                    onclick="cartManager.updateQuantity(${item.id}, -1)" type="button">−</button>
                            <span class="px-4 py-1 font-semibold">${item.quantity}</span>
                            <button class="quantity-btn px-3 py-1 text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-white transition-colors duration-200" 
                                    onclick="cartManager.updateQuantity(${item.id}, 1)" type="button">+</button>
                        </div>
                        <button class="delete-btn bg-red-500 text-white p-2 rounded-lg hover:bg-red-600" 
                                onclick="cartManager.removeItem(${item.id})" type="button">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            `);
        }

        this.updateSummary();
        this.updateCartCount();
    }

    // Update order summary - FIXED VERSION
    updateSummary() {
        const subtotal = this.getTotal();
        const discount = 0; 
        const delivery = subtotal > 100 ? 0 : 10;
        const total = subtotal - discount + delivery;

        const subtotalEl = document.getElementById('subtotal');
        const discountEl = document.getElementById('discount');
        const deliveryEl = document.getElementById('delivery');
        const totalEl = document.getElementById('total');

        if (subtotalEl) subtotalEl.textContent = `${subtotal}`;
        if (discountEl) discountEl.textContent = `${discount}`;
        if (deliveryEl) deliveryEl.textContent = delivery === 0 ? 'Free' : `${delivery}`;
        if (totalEl) totalEl.textContent = `${total}`;
    }

    // Update cart count badge
    updateCartCount() {
        const count = this.getTotalItems();
        const badge = document.getElementById('cart-count');
        
        if (badge) {
            if (count > 0) {
                badge.textContent = count;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }
    }

    // Initialize cart
    init() {
        console.log('Initializing cart manager');
        this.renderCart();
        
        // Add checkout button functionality
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                if (this.getTotalItems() > 0) {
                    this.checkout();
                }
            });
        }
    }

    // Checkout process
    checkout() {
        const subtotal = this.getTotal();
        const delivery = subtotal > 100 ? 0 : 10;
        const total = subtotal + delivery;
        const itemCount = this.getTotalItems();
        
        if (confirm(`Proceed to checkout?\nSubtotal: $${subtotal.toFixed(2)}\nDelivery: $${delivery.toFixed(2)}\nTotal: $${total.toFixed(2)}\nItems: ${itemCount}`)) {
            alert('Order placed successfully! Thank you for your purchase.');
            this.clearCart();
        }
    }
}

// Initialize cart manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing cart manager');
    window.cartManager = new CartManager();
    
    // Mobile menu functionality
    const menuBtn = document.getElementById('menu');
    const cancelBtn = document.getElementById('cancel');
    const offcanvas = document.getElementById('offcanvas');
    const overlay = document.getElementById('overlay');

    if (menuBtn && cancelBtn && offcanvas && overlay) {
        function openMenu() {
            offcanvas.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        }

        function closeMenu() {
            offcanvas.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }

        menuBtn.addEventListener('click', openMenu);
        cancelBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);
    }
});

// Global function to add items to cart (can be called from other pages)
window.addToCart = function(productId) {
    console.log('Adding to cart:', productId);
    if (window.cartManager) {
        return window.cartManager.addItem(productId);
    } else {
        console.error('Cart manager not initialized');
    }
    return false;
};