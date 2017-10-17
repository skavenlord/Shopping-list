//import { Component,EventEmitter,Output } from '@angular/core';
import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  //@Output() featureSelected = new EventEmitter<string>();

  /*onSelect(feature : string) {
    this.featureSelected.emit(feature);
  }*/
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response : Response) => {
          console.log(response);
        }
      );
  }
  
  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
   this.authService.logout();
  }
}