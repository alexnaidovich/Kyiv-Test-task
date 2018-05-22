class AutoCarousel {

  constructor(id, activeClass, inactiveClass, slidesQuantity) {
    this.el = document.querySelector(id);
    this.items = this.el.querySelectorAll('.car-item');
    this.index = 0;
    this.active = activeClass;  
    this.inactive = inactiveClass;  
    this.slidesQuantity = slidesQuantity;
    this.autoslide.apply(this);
  }

  slide(index) {
    this.items.forEach((item, i) => {
      item.classList.remove(this.active);
      item.classList.add(this.inactive);
    });
    this.items[index].classList.remove(this.inactive);
    this.items[index].classList.add(this.active);
    this.index++; 
    if (this.index === this.slidesQuantity) {
      this.index = 0;
    }
  }

  autoslide() {
    let as = setTimeout(() => {
      this.slide(this.index);
      setTimeout(this.autoslide.apply(this), 4000);
    }, 4000);
  }

}