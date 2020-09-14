import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  Inject
} from "@angular/core";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDWgujIwSzen_gb08JWTBSQ1VUCP9Jn9po",
  authDomain: "sysma-69fbe.firebaseapp.com",
  databaseURL: "https://sysma-69fbe.firebaseio.com",
  projectId: "sysma-69fbe",
  storageBucket: "sysma-69fbe.appspot.com",
  messagingSenderId: "369462491158",
  appId: "1:369462491158:web:2267cb4edcc8b41a019d37",
  measurementId: "G-WKT3TTLMGQ"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Francisco Inoque';

  constructor( private renderer: Renderer2,
    public location: Location,
    @Inject(DOCUMENT) document) {
    firebase.initializeApp(config);
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("bg-danger");
      }
    } else {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("bg-danger");
      }
    }
  }

  ngOnInit() {
    this.onWindowScroll(event);
  }
}
