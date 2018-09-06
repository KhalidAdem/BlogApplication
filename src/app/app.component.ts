import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

postitTab = [
  new Postit('Mon premier post', 'Dum haec in oriente aguntur, Arelate hiemem agens Constantius post theatralis ludos atque circenses ambitioso editos apparatu diem sextum idus Octobres, qui imperii eius annum tricensimum terminabat, insolentiae pondera gravius librans, siquid dubium deferebatur aut falsum.'),
  new Postit('Mon deuxième post', 'Ibi victu recreati et quiete, postquam abierat timor, quae casu propinquabant, nec resistere planitie porrecta conati digressi sunt retroque concedentes omne iuventutis robur relictum in sedibus acciverunt.'),
  new Postit('Mon troisième post', 'Ciliciam vero, quae Cydno amni exultat, Tarsus nobilitat, urbs perspicabilis hanc condidisse Perseus memoratur.')
];

constructor() {
  }

}

export class Postit {
  private title: string;
  private content: string;
  private created_at: Date;
  private loveIts: number = 0;

  constructor(title: string,content: string) {
    this.title=title;
    this.content=content;
    this.created_at=new Date();
    this.loveIts = 0;
      }
  }

