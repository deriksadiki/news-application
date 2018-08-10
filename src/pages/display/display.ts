import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
obj= this.navParams.get("obj")
display = [];
title;
author;
date;
pic;
des;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title = this.obj.title;
    this.author =  this.obj.author;
    this.date =  this.obj.publishedAt.substr(0,10);
    this.pic = this.obj.urlToImage;
    this.des =  this.obj.description;
  }

}
