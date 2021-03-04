import { Component, OnInit } from '@angular/core';
import { title } from 'process';

const tools = [
"Одежда",  
"Обувь",  
"Аксессуары",
]

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  toolbarTitle = tools;

  constructor() { }

  ngOnInit(): void {
  }

}
