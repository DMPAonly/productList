import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-show-table',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './show-table.component.html',
  styleUrl: './show-table.component.css'
})
export class ShowTableComponent {
  @Input() productList: {id: number, selectedProduct: string, selectedQuantity: number}[] = []; 
}
