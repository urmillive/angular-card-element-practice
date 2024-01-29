import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  items = [
    {
      name: 'ram',
      age: 23,
    },
    {
      name: 'lakshman',
      age: 18,
    },
  ];

  @ViewChildren('cardElement')
  cardElements!: QueryList<ElementRef>;
  ngAfterViewInit() {
    this.cardElements.toArray().forEach((card, index) => {
      console.log(`Card ${index + 1}:`, card.nativeElement);
    });
  }
}
