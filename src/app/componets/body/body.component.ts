import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  lista:[]
  constructor (){

  
    
   }

  ngOnInit() {
    var referencia = firebase.database().ref('posts/' + postId + '/starCount');
  referencia.on('value', function(snapshot) {
    console.log(datalist.val());
    this.lista= Object.values(datalist.val());
  });
  
  }

}
