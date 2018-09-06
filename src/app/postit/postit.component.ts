import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.scss']
})
export class PostitComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;
  loveIts: number = 0;

  ngOnInit() {
  }

like()
{
  this.loveIts = this.loveIts + 1 ;
  console.log('valeur du compteur' + this.loveIts);
}

dislike()
{
  this.loveIts = this.loveIts - 1;
  console.log('valeur du compteur' + this.loveIts);
}

}
