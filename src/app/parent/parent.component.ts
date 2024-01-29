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
      // console.log(`Card ${index + 1}:`, card.nativeElement);

      const childElement = this.cardElements.toArray()[index];
      console.log(`Child Element ${index + 1}:`, childElement.nativeElement);
      // childElement.nativeElement.style.position = 'absolute';
      // childElement.nativeElement.style.right = '20';

      const menuElement = childElement.nativeElement.querySelector('.menu');
      console.log(`Menu Element ${index + 1}:`, menuElement);

      // Modify the styles or content of the menu element
      if (menuElement) {
        menuElement.style.backgroundColor = 'lightblue'; // Example style modification
        // You can perform other modifications as needed
      }
    });
  }
}
