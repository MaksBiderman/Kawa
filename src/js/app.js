import { settings } from './settings.js';
import Product from './components/product.js';

const app = {
  initData: function() {
    const thisApp = this;
    const url = settings.db.url + '/' + settings.db.products;
    
    thisApp.data = {};
    
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
        thisApp.initProducts();
      });
  },
  initProducts: function() {
    const thisApp = this;
    thisApp.products = [];

    for (const productData of thisApp.data.products) {
      const product = new Product(productData);
      thisApp.products.push(product);
    }

    const productsContainer = document.getElementById('products-container');

    for (const product of thisApp.products) {
      const productHTML = product.renderInMenu();
      productsContainer.innerHTML += productHTML;
    }
  },
  initPages: function() {
    const thisApp = this;
  
    thisApp.pages = document.querySelectorAll('section');
    thisApp.navLinks = document.querySelectorAll('a[href^="#"]');
  
    const idFromHash = window.location.hash.replace('#/', '');
    let defaultPage = 'home'; // Domyślna strona to "home"
  
    if (idFromHash) {
      defaultPage = idFromHash;
    }
  
    thisApp.activatePage(defaultPage);
  
    for (const link of thisApp.navLinks) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const id = link.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  },
  
  activatePage: function(pageId) {
    const thisApp = this;
  
    for (const section of thisApp.pages) {
      if (pageId === 'home' && section.id !== 'contact-section') {
        section.style.display = 'block';
      } else if (pageId === 'products' && section.id !== 'about-section' && section.id !== 'contact-section') {
        section.style.display = 'block';
      } else if (pageId === 'contact' && section.id !== 'about-section' && section.id !== 'products-section') {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    }
  },
  
  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.initPages();

  },
};

app.init();