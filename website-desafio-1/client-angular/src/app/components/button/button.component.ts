import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.showButton();
    // document.querySelector('.fab-container').addEventListener('click', function(e) {
    //   document.querySelector('.fab').classList.toggle('fab-active');
    //   document.querySelector('.fa-plus').classList.add('fa-times');

    //  });


  }
 showButton() {
    document.querySelector('.fab').addEventListener('click', () => {
  //  document.querySelector('.fab').classList.toggle('#box');
    document.querySelector('div').classList.remove('box-on');
    document.querySelector('div').classList.add('.box-none');
    });}
}
