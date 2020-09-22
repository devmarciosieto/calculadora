import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent implements OnInit {
  visibleSidebar1;
  visibleSidebar2;
  visibleSidebar3;
  visibleSidebar4;
  visibleSidebar5;


  constructor() { }

  ngOnInit(): void {
  }

}
