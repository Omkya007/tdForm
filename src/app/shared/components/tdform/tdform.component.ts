import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss']
})
export class TdformComponent implements OnInit {


  @ViewChild('signUp')signUp!:NgForm
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log(this.signUp.value);
    this.signUp.reset();
    
}

}
