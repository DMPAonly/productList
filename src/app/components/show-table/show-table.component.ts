import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-show-table',
  standalone: true,
  imports: [ NgFor, NgIf ],
  templateUrl: './show-table.component.html',
  styleUrl: './show-table.component.css'
})
export class ShowTableComponent {
  @Input() productList: {id: number, selectedProduct: string, selectedQuantity: number}[] = [];
  url : string = environment.API_URL; 
  apiKey : string = environment.API_KEY;
  order: string = '';
  speakOrder(){
    this.order = '';
    for(var i=0; i<this.productList.length; i++){
      if(this.productList[i].selectedProduct !== '' || this.productList[i].selectedQuantity !== 0){
        this.order = this.order+"Order number "+this.productList[i].id;
        this.order = this.order+" ,Product name "+this.productList[i].selectedProduct;
        this.order = this.order+" ,Quantity "+this.productList[i].selectedQuantity+". ";
      }
    }
    console.log(this.order);
    try{
      new Audio(this.buildURL(this.order)).play();
    } catch(error){
      console.log(error);
    }
  }
  buildURL(str : string){
    return `${this.url}?key=${this.apiKey}&src=${str}&f=48khz_16bit_stereo`;
  }
}
    

