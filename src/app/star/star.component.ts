import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;
  @Output() notify: EventEmitter<String> = new EventEmitter<string>();

  onClick(){
    this.notify.emit('click!');
  }
  constructor() { }

  ngOnInit() {
    this.starWidth = this.rating * 86/5;
  }

}
