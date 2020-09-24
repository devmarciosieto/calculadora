import { Component, OnInit } from '@angular/core';

interface Cor {
  name: string;
  cor: string;
}

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

  selectedCor: Cor;
  selectedClass: any;
  myclass: any;
  cores: Cor[];

  selectedTamanho: any = null;
  tamanhos: any[] = [
    {name: '12px', key: '12px'},
    {name: '14px', key: '14px'},
    {name: '16px', key: '16px'},
    {name: '18px', key: '18px'}];

  constructor() { }

  ngOnInit(): void {
    this.cores = [
      {name: 'Preto', cor: 'black'},
      {name: 'Azul', cor: 'blue'},
      {name: 'Verde', cor: 'green'},
      {name: 'Vemelho', cor: 'red'}
    ];

    this.myclass = [
      {name: 'myclass1', cor: 'myclass1'},
      {name: 'myclass2', cor: 'myclass2'},
      {name: 'myclass3', cor: 'myclass3'}
    ];

    this.selectedClass = this.myclass[0];
    this.selectedTamanho = this.tamanhos[1];
    this.selectedCor = this.cores[1];


  }
}
