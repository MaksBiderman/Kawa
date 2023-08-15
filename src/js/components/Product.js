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
    return compiledTemplate(thisProduct);
  }
}
export default Product;