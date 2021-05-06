import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'list-action',
  templateUrl: './list-action.component.html',
  styleUrls: ['./list-action.component.css']
})
export class ListActionComponent implements OnInit {

  @Input() paramId: number
  @Output() onDelete = new EventEmitter

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick(){
    this.onDelete.emit()
  }

}
