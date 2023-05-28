import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsMock } from 'src/app/services/mock/NewsMock';
import { News } from 'src/app/services/models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news!: News;

  constructor(
    private route: ActivatedRoute 
  ) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( param => {
      this.news = NewsMock.filter(n => n.language == param.get('language'))[0]
    })  
  }
  
  
}
