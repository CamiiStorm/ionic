import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private altura: number;
  private resultado: number;

  constructor() {}

  calcularF(){
    this.resultado = (this.altura -100) * 0.85;
  }

  exibeResultado(): number{
    return this.resultado;
  }

}