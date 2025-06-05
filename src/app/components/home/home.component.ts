import { Component } from '@angular/core';
import { LogoTopoComponent } from '../logo-topo/logo-topo.component';
import { BuscaComponent } from '../busca/busca.component';

@Component({
  selector: 'app-home',
  imports: [LogoTopoComponent, BuscaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
