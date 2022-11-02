import { Component, OnInit } from '@angular/core';

import { Serie } from './Serie';
import { Series } from './Series';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

series : Array<Serie> = [];
  promedio: number = 0;

  constructor(private SerieService: SerieService) { }
  getSeriesList(){
    this.SerieService.getSeries().subscribe(series => {
      this.series = Series;
      let suma: number = 0;
      for(let item of Series){
          suma = suma + item.temporadas;
      }

      this.promedio = suma/Series.length;
    })

  }

  ngOnInit() {
    this.getSeriesList();
  }

}
