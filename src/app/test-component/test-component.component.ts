import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  car =
  {
    make: 'Ford',
    model: 'Mustang',
    year: 1979
  }

  constructor() { }

  ngOnInit(): void {
  }

}
