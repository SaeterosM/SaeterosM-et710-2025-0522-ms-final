import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    JumbotronComponent,
    ProductsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}



