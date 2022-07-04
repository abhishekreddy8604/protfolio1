import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { iTimeLine } from '../modals/timeLine';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit {
  events1: iTimeLine[];
  events2: any[];

  constructor() {
    this.events1 = [
      {
        status: 'Block Chain',
        icon: PrimeIcons.CIRCLE,
        readMore: false,
        data: 'In this project customer has a register with all details then login. Customer has a create aaccount.Cutomer has a search a data. Customer has a request. Customer has a key.Uber eats has aregister and then login.Uber eats has a customer.Uber eats has a restaurant.Uber eats has a no oflists.Uber eats has arequest.Restaurant has a register and then login.Restaurant has a upload aproduct.Restaurant has a send product.Restaurant has a courier information. Courier has a login.Courier has a search a company. Courier has a add a delivery. Courier has a added a deliveryboy. Courier has also have a delivery boy. Courier has a provided a key. Delivery boy has alogin. Delivery boy has a product key. Delivery boy was also a buyer key.',
      },
      {
        status: 'Full Stack',
        icon: PrimeIcons.CIRCLE,
        readMore: false,
        data: "Every Business starting from startup's to multi national companies they need a website to show case there products or services to the customer so bulding website should be very essential . As a full stack Web developer i can build a website from scratch and and deploye it on servers like aws or custom server using nodejs and mongodb.",
      },
      {
        status: 'Android',
        icon: PrimeIcons.CIRCLE,
        readMore: false,
        data: 'E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.The terms e-commerce and e-business are often used interchangeably. The term e-tail is also sometimes used in reference to the transactional processes that make up online retail shopping.',
      },
    ];

    this.events2 = ['2020', '2021', '2022', '2023'];
  }
  readData(data: any) {
    this.events1.forEach((e) => {
      if (e?.status == data) e.readMore = !e.readMore;
    });
  }
  ngOnInit(): void {}
}
