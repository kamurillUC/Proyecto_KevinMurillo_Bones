import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nombre = '';
  public apellido = '';
  public edad = 0;
  public fechaNacimiento = new Date().toLocaleDateString(); 
  public genero = '';

 
}

