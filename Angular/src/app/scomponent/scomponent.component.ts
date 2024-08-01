import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { FactorialService } from '../factorial.service';

@Component({
  selector: 'app-scomponent',
  templateUrl: './scomponent.component.html',
  styleUrl: './scomponent.component.css'
})
export class ScomponentComponent {
  sum : number;
  sub : number;
  mul : number;
  div : number;
  n : number;
  constructor(private calc : CalculatorService,private fact : FactorialService){
    this.sum = calc.getAddition(10,20);
    this.sub = calc.getSubraction(10,20);
    this.mul = calc.getMultiplication(10,20);
    this.div = calc.getDivision(10,20);
    this.n = fact.getFactorial(3);
  }
}
