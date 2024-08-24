import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Output() eventoNro = new EventEmitter<number>()
  @Output() eventoSigno = new EventEmitter<string>()
  valor1 : number | undefined
  valor2 : number | undefined
  signo : string = ""

  enviarDatos(){
    this.eventoNro.emit(this.valor1)
    this.eventoNro.emit(this.valor2)
    this.eventoSigno.emit(this.signo)
  }
}
