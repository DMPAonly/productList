import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowTableComponent } from '../show-table/show-table.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-input-table',
  standalone: true,
  imports: [FormsModule, ShowTableComponent, NgFor, NgIf],
  templateUrl: './input-table.component.html',
  styleUrl: './input-table.component.css'
})
export class InputTableComponent {
  products : string[] = ['Pen', 'Pencil', 'Eraser', 'Sharpner', 'Ruler', 'Compass', 'Protactor', 'Crayons'];
  quantity : number[] = [1, 2, 3, 4, 5];
  rows : {id: number, selectedProduct: string, selectedQuantity: number}[] = [{id:1, selectedProduct:'', selectedQuantity: 0}];
  selected = {selectedProduct:'', selectedQuantity: 0};
  count = 1;
  show = false;

  Add(row: any){
    let button = document.getElementById(row.id);
    this.show = false;
    if(this.selected.selectedProduct == '' || this.selected.selectedQuantity == 0){
      alert('Please choose a product and its quantity.');
    } else{
      row.selectedProduct = this.selected.selectedProduct;
      row.selectedQuantity = this.selected.selectedQuantity;
      this.count++;
      let obj = {id: this.count, selectedProduct:'', selectedQuantity: 0};
      if(this.rows.length < 8){
        button?.setAttribute('disabled','');
        this.rows.push(obj);
      } else{
        alert("You can only choose maximum of 8 products");
      }
      console.log(this.rows);
    }
    this.selected = {selectedProduct: '', selectedQuantity: 0};
  }

  showTable(){
    if(this.rows[0].selectedProduct == ''){
      alert('Please choose products and their quantity first.')
    } else{
      this.show = true;
    }
  }
    
  onSelectedProduct(event: any){
    this.show = false;
    this.selected.selectedProduct = event.target.value;
  }
  onSelectedQuantity(event: any){
    this.show = false;
    this.selected.selectedQuantity = event.target.value;
  }

  getAvailableOptions(id : number){
    const temp_array = this.rows.filter(row => row['selectedProduct'] !== '').map(row => row['selectedProduct']);
    return this.products.filter((product) => (!temp_array.includes(product)) || temp_array.includes(this.rows[id-1].selectedProduct));
  }
}
