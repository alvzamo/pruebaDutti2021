import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/api-rest/model/user';
import { SharedService } from 'src/app/core/share/shared.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  user:User;
  constructor(private sharedService:SharedService) { 
    this.user=this.sharedService.getUser();
    console.log("usersss",this.user);
  }

  ngOnInit(): void {
  }

  logout(){
      this.sharedService.setUser(null)
  }

}
