import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style , transition, animate} from '@angular/animations';

@Component({
  selector: 'app-cell',
  animations: [
    trigger('bounce', [
      state('clicked', style({
        color: 'red',
      })),
      state('noClicked', style({
        background: 'white',

      })),
      transition('noClicked => clicked', 
        animate('1s')),
    ])
  ],

  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']

})
export class CellComponent implements OnInit {

  @Input('color') color: boolean = false;
  @Input('turno') turno: boolean | undefined = undefined;
  @Output('clicked') emitClicked = new EventEmitter();
  isClicked = false;

  constructor() { }

  ngOnInit(): void {
  }
  emitClick(click:any) {
    click.preventDefault();
    click.stopPropagation();
    this.isClicked = true;
    this.emitClicked.emit()

  }


}
