import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowTableComponent } from '../show-table/show-table.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-input-table',
  standalone: true,
  imports: [FormsModule, ShowTableComponent, NgFor],
  templateUrl: './input-table.component.html',
  styleUrl: './input-table.component.css'
})
export class InputTableComponent {
  products : string[] = ['Pen', 'Pencil', 'Eraser', 'Sharpner', 'Ruler', 'Compass', 'Protactor'];
  quantity : number[] = [1, 2, 3, 4, 5];
  rows = [{id:1, selectedProduct:'', selectedQuantity: 0}];
  selected = {selectedProduct:'', selectedQuantity: 0};
  count = 1;
  Add(row: any){
    row.selectedProduct = this.selected.selectedProduct;
    row.selectedQuantity = this.selected.selectedQuantity;
    this.count++;
    let obj = {id: this.count, selectedProduct:'', selectedQuantity: 0};
    if(this.rows.length < 8){
      this.rows.push(obj);
    } else{
      alert("You can only choose maximum of 8 products");
    }
    console.log(this.rows);
  }
  onSelectedProduct(event: any){
    this.selected.selectedProduct = event.target.value;
  }
  onSelectedQuantity(event: any){
    this.selected.selectedQuantity = event.target.value;
  }
}
