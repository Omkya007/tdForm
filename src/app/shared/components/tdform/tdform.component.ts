import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss']
})
export class TdformComponent implements OnInit {


  // num:Array<number> =[10,20,30,40];

  // of$= of(1,2,3,4)
  // numsObs$=from(this.num)

  userDetails=
 {
    "userInfo": {
        "userName": "OmkarKhot",
        "email": "omkhot0000@gmail.com"
    },
    "secQuestion": "favBook",
    "answer": "aaaax",
    "isSubscribe": true,
    "'moc.mode'": "Phone"
}
  
  mocArrr=[
    {
      mode:'Phone',id:1
    },
     {
      mode:'Email',id:2
    },
     {
      mode:'FAX',id:3
    }
  ]

  @ViewChild('signUp') signUp!:NgForm
  maxlengthflag:boolean=false
  constructor() { }

  ngOnInit(): void {

    // setTimeout(()=>{
    //   this.signUp.controls['userName'].valueChanges
    //   .subscribe((res)=>{
     
    //     if(res .length>=12){
    //       this.maxlengthflag=true
    //     }else{
    //       this.maxlengthflag=false
    //     }
        
    //   })
    // })
   
 
     
      
     

    // this.of$.subscribe((num)=>{
    //   console.log(num);
      
    // })

    // this.numsObs$.subscribe((num)=>{
    //   console.log(this.num);
      
    // })

    // from(['HTML','CSS','JS','ANGULAR'])
    //   .subscribe((skill)=>{
    //     console.log(skill);
        
    //   })
  }

  onEdit() {
this.signUp.form.patchValue(this.userDetails)
}
  onSubmit() {
    
      
    if(this.signUp.valid){
      console.log(this.signUp.value);
    
    }
    
    
}

}
