import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordService } from '../word.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{

  num: number = 0;

  service: WordService;
  router: Router;
  constructor(service: WordService, router: Router) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit(): void {
    //this.service.import(); a wordservice.ts nek a konstruktroában lett meghivva az inport függvény igy csak ott kell 
  }

  play(){

    if(this.num < 1){
      alert('Please choose langer number');
    }
    else if(this.num > this.service.words.length){
      alert('Please choose smaller number');
    }
    else{
      this.router.navigate(['game',this.num]);
    }
  }

}
