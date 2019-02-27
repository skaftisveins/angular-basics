import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showContent = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.showContent = !this.showContent;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

}
