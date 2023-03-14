import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../word.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{

  service: WordService;
  route: ActivatedRoute;
  constructor(service: WordService, route: ActivatedRoute) { 
    this.service = service;
    this.route = route;
  }

  ngOnInit(): void {
    this.route.params.subscribe(t =>{
      this.service.gameInit(t['num']);
    })
  }
}
