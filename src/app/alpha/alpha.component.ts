import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this.numbers = this._dataservice.retriveNumvers();
  }

  pushOne() {
    this._dataservice.addNumber(1);
  }

}
