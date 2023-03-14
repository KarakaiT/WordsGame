import { Component, OnInit } from '@angular/core';
import { Word } from '../word';
import { WordService } from '../word.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  
  service: WordService;
  constructor(service: WordService) {

    this.service = service;
  }

  ngOnInit(): void {
    //this.import();
    //this.service.import();a wordservice.ts nek a konstruktroában lett meghivva az inport függvény igy csak ott kell 
    //a kovetketző kod a listaelemek letöltése egy fáljba (nem nagyon használjuk de megmutatja) (JSON)
    let filename = 'words.json';
    let content = JSON.stringify(this.service.words);
    let btn: HTMLElement | null  = document.getElementById('exportBtn');
    btn?.setAttribute('href','data:text/json,' + content);
    btn?.setAttribute('download', filename);
  }

  import(ev: any){
    //importáljuka json fáljunkat adatokkal a szo játékhouz
    let file : File = ev.target.files[0];
    file.text().then(x => {
      this.service.words = JSON.parse(x);
    });
  }

}
