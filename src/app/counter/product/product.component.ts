import { Component, Input, Output, EventEmitter } from '@angular/core';

interface ProductInfo {
  id: number;
  count: number;
  productImg: string;
}

@Component({
  selector: 'cnt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  @Input()
  productInfo!: ProductInfo;

  @Output()
  decrementEvent: EventEmitter<any> = new EventEmitter();
  
  @Output()
  incrementEvent: EventEmitter<any> = new EventEmitter();

  // count: number = 0;
  // productImg: string = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  handleDecrement(): void {
    this.decrementEvent.emit(this.productInfo.id);
    // if (this.count) {
    //   this.count = this.count - 1;
    // }
    
  }

  handleIncrement(): void {
    this.incrementEvent.emit(this.productInfo.id);
    // this.count = this.count + 1;
  }

  handleDelete(): void {
    console.log('Are you sure? you are about to delete the product');
  }
}
