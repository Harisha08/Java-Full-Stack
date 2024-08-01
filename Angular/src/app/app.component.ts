import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { FactorialService } from './factorial.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /**title = 'MyAngularProject';
  name : string;
  age : number;
  email : string;
  txtColor : string;
  image : string;
  fname : string = "";
  flag : boolean;
  vehicles : string[];
  selectedVehicle : string ="";
  myStyle : {};
  MyClass : string ;*/
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
  /**constructor(){
    this.name = "Harisha";
    this.age = 20;
    this.email = "harsha@gmail.com";
    this.txtColor = "green";
    this.image = "./assets/logo2.png";
    this.fname = "Harisha !!";
    this.flag = true;
    this.vehicles = ["TwoWheeler","ThreeWheeler","FourWheeler"];
    this.myStyle = {'width' : '40%','border': '2px solid green'}
    this.MyClass = "MyClass1"
  }
  getAddition(a:number , b:number){
    let sum = a+b;
    return sum;
  }
  changeName(){
    this.name = "Harsha";
  }
  changeAge(){
    this.age = 21;
  }
  changeEmail(){
    this.email = "harisha@gmail.com";
  }
  changeImage(){
    this.image = "./assets/logo2.png";
  }
  changeFlag(){
    this.flag = ! this.flag;
  }
  setSelectedItem(vec: string){
    this.selectedVehicle =  vec;
  }
  changeClass(){
    this.MyClass = "MyClass2";
  }
}
  */