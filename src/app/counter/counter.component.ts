import { Component } from "@angular/core";

@Component({
    selector: 'cnt-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    products = [
        {
            id: 1,
            count: 0,
            productImg: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 2,
            count: 0,
            productImg: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
            id: 3,
            count: 0,
            productImg: 'https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
            id: 4,
            count: 0,
            productImg: 'https://images.unsplash.com/photo-1559678478-1839b04e292b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
        }
    ];

    handleDecrement(id: number) {
        const product = this.products.find((product) => product.id === id);

        if (product && product.count) {
            product.count = product.count - 1;
        }
    }

    handleIncrement(id: number) {
        const product = this.products.find((product) => product.id === id);

        if (product) {
            product.count = product.count + 1;
        }
    }
}