import { Component, OnInit } from '@angular/core';

import {WordLink} from './wordlink';

import {WordlinkService} from './wordlink.service';

@Component({
  selector: 'app-wordlink',
  templateUrl: './wordlink.component.html',
  styleUrls: ['./wordlink.component.css']
})
export class WordlinkComponent implements OnInit {

  words : WordLink[];

  constructor(private wordService: WordlinkService) { }


  ngOnInit() {
     this.wordService.getWords()
        .subscribe(words=> this.words = words);
  }

}
