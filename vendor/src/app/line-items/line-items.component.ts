import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  quantity: number;
  unitprice: number;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {quantity: 1, name: 'Hydrogen', unitprice: 1.0079, total: 300},
  {quantity: 2, name: 'Helium', unitprice: 4.0026, total: 324},
  {quantity: 3, name: 'Lithium', unitprice: 6.941, total: 324},
  {quantity: 4, name: 'Beryllium', unitprice: 9.0122, total: 324},
  {quantity: 5, name: 'Boron', unitprice: 10.811, total: 13213},
  {quantity: 6, name: 'Carbon', unitprice: 12.0107, total: 4545},
  {quantity: 7, name: 'Nitrogen', unitprice: 14.0067, total: 234324},
  {quantity: 8, name: 'Oxygen', unitprice: 15.9994, total: 1334},
  {quantity: 9, name: 'Fluorine', unitprice: 18.9984, total: 3434},
  {quantity: 10, name: 'Neon', unitprice: 20.1797, total:3434},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'line-items',
  styleUrls: ['./line-items.component.scss'],
  templateUrl: './line-items.component.html',
})
export class LineitemsTable {
  displayedColumns: string[] = ['name', 'quantity', 'unitprice', 'total'];
  dataSource = ELEMENT_DATA;
}
