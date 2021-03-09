import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
