
const menu = document.getElementById('menu');
const cancel = document.getElementById('cancel');
const offcanvas = document.getElementById('offcanvas');


menu.onclick = () => {
    offcanvas.classList.remove('-translate-x-full');
    offcanvas.classList.add('translate-x-0');
}

cancel.onclick = () => {
    offcanvas.classList.remove('translate-x-0');
    offcanvas.classList.add('-translate-x-full');
}


 


const footer = document.getElementById('bloombare-footer');

function getFooterHTML() {
    return `
        <!-- FAQ Section -->
        <div class="px-4 py-8 md:px-8 lg:px-16">
            <div class="max-w-4xl">
                <h2 class="text-2xl md:text-3xl mb-8">Frequently Asked<br>Question</h2>
                
                <!-- FAQ Items -->
                <div class="space-y-4">
                    <div class="bg-white/90 rounded-lg">
                        <button class="w-full px-6 py-4 text-left text-gray-700 hover:bg-white/95 transition-colors duration-200 flex justify-between items-center group">
                            <span class="text-sm md:text-base">What makes Bloombare unique?</span>
                            <svg class="w-5 h-5 text-sage-500 group-hover:rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="bg-white/90 rounded-lg">
                        <button class="w-full px-6 py-4 text-left text-gray-700 hover:bg-white/95 transition-colors duration-200 flex justify-between items-center group">
                            <span class="text-sm md:text-base">In what size can i order an Bloombare?</span>
                            <svg class="w-5 h-5 text-sage-500 group-hover:rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="bg-white/90 rounded-lg">
                        <button class="w-full px-6 py-4 text-left text-gray-700 hover:bg-white/95 transition-colors duration-200 flex justify-between items-center group">
                            <span class="text-sm md:text-base">Where do you ship to?</span>
                            <svg class="w-5 h-5 text-sage-500 group-hover:rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="bg-white/90 rounded-lg">
                        <button class="w-full px-6 py-4 text-left text-gray-700 hover:bg-white/95 transition-colors duration-200 flex justify-between items-center group">
                            <span class="text-sm md:text-base">How do you ensure my plant will arrive safely?</span>
                            <svg class="w-5 h-5 text-sage-500 group-hover:rotate-180 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Links Section -->
        <div class="px-4 py-8 md:px-8 lg:px-16 border-t border-white/20">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
                <!-- Company -->
                <div>
                    <h3 class="font-medium mb-4 text-base">Company</h3>
                    <ul class="space-y-2 text-white/80">
                        <li><a href="#" class="hover:text-white transition-colors">Small Plants</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Medium Plants</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Large Plants</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Hug Plants</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Collection</a></li>
                    </ul>
                </div>

                <!-- Follow Us -->
                <div>
                    <h3 class="font-medium mb-4 text-base">Follow Us</h3>
                    <ul class="space-y-2 text-white/80">
                        <li><a href="#" class="hover:text-white transition-colors">FaceBook</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Instagram</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Twitter</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">TikTok</a></li>
                    </ul>
                </div>

                <!-- Support -->
                <div>
                    <h3 class="font-medium mb-4 text-base">Support</h3>
                    <ul class="space-y-2 text-white/80">
                        <li><a href="#" class="hover:text-white transition-colors">FAQ</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Chat with us</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Accessibility</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Your Privacy Choices</a></li>
                    </ul>
                </div>

                <!-- Offers -->
                <div>
                    <h3 class="font-medium mb-4 text-base">Offers</h3>
                    <ul class="space-y-2 text-white/80">
                        <li><a href="#" class="hover:text-white transition-colors">Coupons</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Plant Award</a></li>
                    </ul>
                </div>

                <!-- Get In Touch -->
                <div class="col-span-2 md:col-span-3 lg:col-span-1">
                    <h3 class="font-medium mb-4 text-base">Get In Touch</h3>
                    <ul class="space-y-2 text-white/80 text-xs md:text-sm">
                        <li>Tel: +92-882-4235</li>
                        <li>WhApp: 6708122442</li>
                        <li>Email: bloombare@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Bottom Footer -->
        <div class="px-4 py-6 md:px-8 lg:px-16 border-t border-white/20">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div class="flex flex-wrap gap-4 text-xs text-white/60">
                    <a href="#" class="hover:text-white/80 transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-white/80 transition-colors">Cookie Policy</a>
                    <a href="#" class="hover:text-white/80 transition-colors">Term Of Use</a>
                    <a href="#" class="hover:text-white/80 transition-colors">Accessibility Statement</a>
                </div>
                <div class="text-xs text-white/60">
                    ©2025, Bloombare<br class="md:hidden">
                    <span class="hidden md:inline"> - </span>Allright Served
                </div>
            </div>
        </div>
    `;
}

function loadFooter(targetId = 'bloombare-footer') {
    const footerElement = document.getElementById(targetId);
    if (footerElement) {
        footerElement.innerHTML = getFooterHTML();
        

        footerElement.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                const icon = this.querySelector('svg');
                icon.classList.toggle('rotate-180');
                console.log('FAQ item clicked:', this.querySelector('span').textContent);
            });
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    loadFooter();
});






























//header left side
// const menu = [
//     'HOME' ,'PLANTS' ,'ABOUT' , 'CONTACT' ,
// ]

// menu.map((elements, index) => {
//     const span = document.createElement('span');
//     span.textContent= elements;
//     span.className='textHeader cursor-pointer text-2xl font-bold inline-block';

//     rightSide.appendChild(span);
// })

