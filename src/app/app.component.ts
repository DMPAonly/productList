import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTableComponent } from "./components/input-table/input-table.component";
import { ShowTableComponent } from "./components/show-table/show-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTableComponent, ShowTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-list';
}
