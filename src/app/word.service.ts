import { Injectable } from '@angular/core';
import { Word } from './word';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  public actualWord: Word = new Word();
  public words: Array<Word> = new Array<Word>();
  public gameWords: Array<Word> = new Array<Word>();
  public actualGameWords: Word = new Word();
  public actualTry: string = '';
  public resultState: boolean = false;
  
  
  constructor() {
    this.import();
   }

  
  public add(){

    this.words.push(this.actualWord.GetCopy());
    this.actualWord = new Word();
    this.export();
  }

  public remove(id: string){
    this.words = this.words.filter(t => t.id != id);
    this.export();
  }

  public import(){
    let data = localStorage.getItem('words');
    if(data == null){
      this.words = new Array<Word>();
    }
    else{
      this.words = JSON.parse(data);
    }
  }

  public export(){

    localStorage.setItem('words', JSON.stringify(this.words));
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  gameInit(num: number){
    //csinálunk egy uj tömböt amiben kiválogatunk pont ennyi véleltlenszerű szót
    this.gameWords = new Array<Word>();
    for(let i = 1; i <= num; i++){
      let w: Word =this.words[this.getRndInteger(0,this.words.length-1)];
      if(this.gameWords.filter(t => t.id == w.id).length > 0){
        i--;
      }
      else{
        this.gameWords.push(w);
      }
      
    }
    this.actualGameWords = this.gameWords.pop() as Word;
  }
  check(){
    this.resultState = true;
    if(this.actualGameWords.eng == this.actualTry){
      this.actualGameWords.goods++;
    }
    else{
      this.actualGameWords.bads++;
    }
    this.export();
  }

  next(){
    this.resultState = false;
    this.actualGameWords = this.gameWords.pop() as Word;
    this.actualTry ='';
  }



}
