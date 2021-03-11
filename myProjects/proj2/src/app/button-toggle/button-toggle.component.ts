import { Component, OnInit } from '@angular/core';

const menWears = [
  {
    sales: false,
    atitle: 'Подарочный сертификат',
    htitle: 'Туфли летние',
    hsubtitle: 'Rieker Men',
    image: '13.jpg',
    mtitle: 'Материал верха: натуральная кожа',
    msubtitle: 'Ограниченная серия',
    url: '#',
    price: 148
},
{
  sales: false,
  atitle: 'Подарочный сертификат',
  htitle: 'Сумка мужская',
  hsubtitle: 'Kari',
  image: '7.jpg',
  mtitle: 'Материал: натуральная кожа',
  msubtitle: 'Ограниченная серия',
  url: '#',
  price: 77
},
{
  sales: true,
  atitle: 'Распродажа',
  htitle: 'Куртка мужская',
  hsubtitle: 'ALPEX',
  image: '8.jpg',
  mtitle: 'Мембрана с двойным покрытием',
  msubtitle: 'КАЧЕСТВО ALPEX',
  url: 'product',
  price: 241
},
{
  sales: false,
  atitle: 'Подарочный сертификат',
  htitle: 'Пальто мужское',
  hsubtitle: 'BAZIONI',
  image: '16.jpg',
  mtitle: 'Пальто классическое',
  msubtitle: 'химическая чистка разрешена',
  url: '#',
  price: 439.02
}

]

const womenWears = [
  {
    sales: false,
    atitle: 'Подарочный сертификат',
    htitle: 'Пальто женское',
    hsubtitle: 'Zlata',
    image: '15.jpg',
    mtitle: 'Искусственный кашемир',
    msubtitle: 'Ограниченная серия',
    url: '#',
    price: 135
},
{
  sales: true,
  atitle: 'Распродажа',
  htitle: 'Сапоги женские',
  hsubtitle: 'Pierre Cardin',
  image: '5.jpg',
  mtitle: 'Материал: натуральная кожа',
  msubtitle: 'Ограниченная серия',
  url: '#',
  price: 477
},
{
  sales: false,
  atitle: 'Подарочный сертификат',
  htitle: 'Сумка женская',
  hsubtitle: 'Suffle',
  image: '14.jpg',
  mtitle: 'Искусственная кожа',
  msubtitle: 'С тиснением',
  url: '#',
  price: 129.93
},
{
  sales: true,
  atitle: 'Распродажа',
  htitle: 'Сумка женская',
  hsubtitle: 'Roberta Rossi',
  image: '6.jpg',
  mtitle: 'Искусственная кожа',
  msubtitle: 'застежка на молнию',
  url: '#',
  price: 89
}
]

const accessories = [
  {
    sales: true,
    atitle: 'Распродажа',
    htitle: 'Сумка-рюкзак',
    hsubtitle: 'Passo Avanti',
    image: '1.jpg',
    mtitle: 'Два отделения',
    msubtitle: 'Спереди карман',
    url: '#',
    price: 65
},
{
  sales: false,
  atitle: 'Подарочный сертификат',
  htitle: 'Зонт мужской',
  hsubtitle: 'BR-5005',
  image: '2.jpg',
  mtitle: 'Полуавтомат с чехлом',
  msubtitle: 'Цвет: черный',
  url: '#',
  price: 28.55
},
{
  sales: false,
  atitle: 'Подарочный сертификат',
  htitle: 'Браслет',
  hsubtitle: 'LAMBRE',
  image: '3.jpg',
  mtitle: 'Французская бижутерия',
  msubtitle: 'На каждый день',
  url: '#',
  price: 52
},
{
  sales: false,
  atitle: 'Подарочный сертификат',
  htitle: 'Подвеска',
  hsubtitle: 'Roberta Rossi',
  image: '4.jpg',
  mtitle: 'Медный сплав',
  msubtitle: 'Цирконий',
  url: '#',
  price: 27
}
]

const showElement = []
for (let i=0; i<menWears.length; i++) { showElement.push(false) }

const showElement1 = []
for (let i=0; i<womenWears.length; i++) { showElement1.push(false) }

const showElement2 = []
for (let i=0; i<accessories.length; i++) { showElement2.push(false) }

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent implements OnInit {

  showElement=showElement
  showElement1=showElement1
  showElement2=showElement2
  menWears = menWears
  womenWears = womenWears
  accessories=accessories
  
  toggleElement(curelement: any) {
   showElement[curelement] = !showElement[curelement] 
  //  console.log(showElement)
}    

toggleElement1(curelement: any) {
  showElement1[curelement] = !showElement1[curelement] 
}    

toggleElement2(curelement: any) {
  showElement2[curelement] = !showElement2[curelement] 
}    

  constructor() { }

  ngOnInit() {
  }

}

