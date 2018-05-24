class Gallery {

  constructor(id, item, activeClass, prevItem, nextItem, slidesQuantity) {
    this.el = document.querySelector(id);
    this.items = this.el.querySelectorAll(item);
    this.index = 0;
    this.active = activeClass;
    this.prev = prevItem  
    this.next = nextItem;  
    this.slidesQuantity = slidesQuantity;
    this.autoslide.apply(this);
  }

  slide(index) {
    this.items.forEach((item, i, arr) => {
      item.classList.remove(this.active);
      item.classList.remove(this.prev);
      item.classList.remove(this.next);
    });

    switch(index) {
      case 0:
      this.items[this.items.length - 1].classList.add(this.prev);
      this.items[index + 1].classList.add(this.next);
      break;
      case this.items.length - 1: 
      this.items[index - 1].classList.add(this.prev);
      this.items[0].classList.add(this.next);
      break;  
      default:
      this.items[index - 1].classList.add(this.prev);
      this.items[index + 1].classList.add(this.next);
      break;    
    } 

    this.items[index].classList.remove(this.prev);
    this.items[index].classList.remove(this.next);
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