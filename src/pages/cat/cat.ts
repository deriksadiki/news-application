import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { NewsProvider } from '../../providers/news/news';
import {DisplayPage } from '../display/display';
/**
 * Generated class for the CatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cat',
  templateUrl: 'cat.html',
})
export class CatPage {
  newsArray = [];
  newsARR = []
  constructor(public navCtrl: NavController, public navParams: NavParams, private apinews: NewsProvider) {
    apinews.getNews('').then((data:any) =>
    {    var x = 0;
 
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

  more2(i){
      this.navCtrl.push(DisplayPage, {obj:i});
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatPage');
  }

  more(cat)
  {
      this.navCtrl.push(HomePage, {ctgry:cat})
  }
}
