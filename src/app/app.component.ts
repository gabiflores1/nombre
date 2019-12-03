import { Component } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'carragalfd';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDRtqHttAxVScvJ1aiBoVdqEvMKUEnbzvQ",
      authDomain: "proyecto1-a863d.firebaseapp.com",
      databaseURL: "https://proyecto1-a863d.firebaseio.com",
      projectId: "proyecto1-a863d",
      storageBucket: "proyecto1-a863d.appspot.com",
      messagingSenderId: "145780619958",
      appId: "1:145780619958:web:cb45b33ddf670a514cc417",
      measurementId: "G-21XBBTYK0V"
    }
    firebase.initializeApp(firebaseConfig);
}


