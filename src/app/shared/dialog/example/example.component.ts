import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  constructor() {}
  showModal = false;
  ngOnInit(): void {}

  open() {
    this.showModal = true;
    console.log(this.showModal);
  }
}
