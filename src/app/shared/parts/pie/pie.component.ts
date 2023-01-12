import { Component,OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  Number: number;
  Goals: number;
  Position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Number: 1, name: 'Lionel Messi', Goals: 10, Position:"Fw"},
  {Number: 2, name: '	Di Maria, Angel', Goals: 4,Position:"Lw"},
  {Number: 3, name: '	Gomez, Papu', Goals: 6, Position:"CDM"},
  {Number: 4, name: '	Gomez, Papu', Goals: 4, Position:"DEF"},
  {Number: 5, name: '	De Paul, Rodrigo', Goals: 3, Position:"CM"},
];

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  displayedColumns: string[] = ['Number', 'name', 'Goals', 'Position'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor () { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void {
   
  }
 
 }


 
