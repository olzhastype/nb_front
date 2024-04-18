import { Component } from '@angular/core';
import { OrderClient, OrderDto } from '../../store/client';
import { FormsModule } from "@angular/forms";
import { OrderRepositroy } from '../../store/order.repository';
@Component({
  selector: 'app-create-order-page',
  standalone: true,
  imports: [FormsModule],
  providers: [OrderClient,OrderRepositroy],
  templateUrl: './create-order-page.component.html',
  styleUrl: './create-order-page.component.scss'
})
export class CreateOrderPageComponent {
  order: OrderDto = new OrderDto({

  });
  constructor(private client: OrderRepositroy) {

  }

  click(){
    console.log(this.order);
    this.client.create(this.order);
  }
}
