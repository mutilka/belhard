import { Component, OnInit } from '@angular/core';


const card = {
  sales: false,
  atitle: "Подарочный сертификат",
  htitle: "Туфли летние",
  hsubtitle: "Rieker Men",
  images: "13.jpg",
  mtitle: "Туфли летние Rieker Men - натуральная кожа",
  msubtitle: "Ограниченная серия",
  url: "https://ya.ru/",
  price: 148
}

const showElement = {
  myElement: false
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  showElement = showElement;

  toogleElement(myElement: any) {
    showElement.myElement = !showElement.myElement;

  }

  card = card;

  constructor() { }

  ngOnInit(): void {
  }

}
