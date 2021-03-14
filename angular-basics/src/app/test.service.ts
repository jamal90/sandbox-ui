import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  writeToConsole(arg) {
    console.log("From Test Service: " + arg);
  }
}
