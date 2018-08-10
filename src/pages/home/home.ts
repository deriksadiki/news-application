import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import {DisplayPage } from '../display/display';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


newsArray = [];
newsARR = [];
title;
  constructor(public navCtrl: NavController, private apinews: NewsProvider, public navParams: NavParams) {

    apinews.getNews(this.navParams.get("ctgry")).then((data:any) =>
    {    var x = 0;
     
      this.title =  this.navParams.get("ctgry");
      this.newsArray.push(data.articles);
      
    this.newsArray.forEach(a => {
 
      for (var i =0; i < 1000; i++){
      
        if (a[x] != null && a[x].publishedAt != null){
          this.newsARR.push(a[x]);
          this.newsARR[i].publishedAt = this.newsARR[i].publishedAt.substr(0,10)
          x++;
        }
     
      }
     
      });
     
    })
  }

  more(i){
      this.navCtrl.push(DisplayPage, {obj:i});
  }
}

