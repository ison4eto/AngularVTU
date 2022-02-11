import {Component, Input, OnInit} from '@angular/core';
import {Game} from 'src/app/models/Game';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  @Input() game: Partial<Game> = {};

  constructor() {
  }

  ngOnInit(): void {
  }

}
