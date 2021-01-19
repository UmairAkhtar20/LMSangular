import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { of } from 'rxjs/internal/observable/of';
import { Observable, observable} from 'rxjs';

@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.component.html',
  styleUrls: ['./adminlog.component.css']
})
export class AdminlogComponent implements OnInit {
 username:'string';
 password:"string";
  constructor(public login:LoginService) { }

  ngOnInit(): void {
  }
  onclicklogin(){
       this.login.Validateadmin(this.username,this.password).subscribe(
         m=>{
           if(m){
             alert('u r ritr');
           }
           else{
             alert("u r wrong")
           }
         }
       );
  }

}
