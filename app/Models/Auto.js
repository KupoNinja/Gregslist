export default class Auto {
  constructor(data) {
    this.title = data.title;
    this.image = data.image;
    this.price = data.price;
    this.description = data.description;
  }

  get Template() {
    return this.title;
  }
}
