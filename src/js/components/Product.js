class Product {
  constructor(data) {
    const thisProduct = this;
    thisProduct.id = data.id;
    thisProduct.title = data.title;
    thisProduct.description = data.description;
    thisProduct.image = data.image;
    thisProduct.roasting = data.roasting;
    thisProduct.intensity = data.intensity;
  }

  renderInMenu(){
    const thisProduct = this;
    console.log(thisProduct.image);
    const template = document.getElementById('template-menu-product').innerHTML;
    const compiledTemplate = Handlebars.compile(template);

    if (thisProduct.title.includes("02")) {
      console.log("Adding reverse class to product:", thisProduct.title);
      thisProduct.reverse = true;
    }
    return compiledTemplate(thisProduct);
  }
}
export default Product;