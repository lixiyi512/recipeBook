import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBDQFeGzqDZRS8NO25e_c6QIK8J4LojV-k',
      authDomain: 'ng-recipe-book-b26e1.firebaseapp.com'
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
