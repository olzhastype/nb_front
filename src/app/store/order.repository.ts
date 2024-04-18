import { createStore, select, withProps } from "@ngneat/elf";
import { OrderClient, OrderDto } from "./client";
import { Injectable, NgModule } from "@angular/core";

interface OrderProps {
    currentOrder: OrderDto | null
}

const orderStore = createStore(
    { name: 'order-store' },
    withProps<OrderProps>({
        currentOrder: null
    })
);

@Injectable({
    providedIn: 'root'
})
export class OrderRepositroy {
    constructor(private orderClient: OrderClient) { }
    create(data: OrderDto) {
        this.orderClient.orderPost(data).subscribe();
    }
}