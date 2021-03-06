import { Injectable } from '@angular/core';
import { Autor } from './autor.interface';
import { Libro } from './libro.interface';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public users: Array<User> = [];
  public autores: Array<Autor> = [];
  public libros: Array<Libro> = [];

  constructor() { }
}
