import {Component, OnInit} from '@angular/core';
import {UserSharedDataService} from "../../service/user/user-shared-data.service";
import {UserViewModel} from "../../model/user/user-view-model";
import {ApiService} from "../../service/api/api.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authenticatedUser: UserViewModel;

  constructor(
    userSharedDataService: UserSharedDataService,
    public apiService: ApiService
  ) {
    userSharedDataService.getAuthenticatedUser().subscribe(
      result => {
        this.authenticatedUser = result;
        console.log(result);
      },
      error => {
        alert(error.error.error_description);
      }
    );
  }

  ngOnInit() {
  }
}
