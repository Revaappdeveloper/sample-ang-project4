import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  boxesArray: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.boxesArray = [
      {
        title: "Thumbnail 1",
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
       This content is a little bit longer.`,
        buttonLabelLeft: "View",
        buttonLabelRight: "Edit",
        duration: "1 mins",
      },
      {
        title: "Thumbnail 2",
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
       This content is a little bit longer.`,
        buttonLabelLeft: "View",
        buttonLabelRight: "Edit",
        duration: "2 mins",
      },
      {
        title: "Thumbnail 3",
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
       This content is a little bit longer.`,
        buttonLabelLeft: "View",
        buttonLabelRight: "Edit",
        duration: "3 mins",
      },
      {
        title: "Thumbnail 4",
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
       This content is a little bit longer.`,
        buttonLabelLeft: "View",
        buttonLabelRight: "Edit",
        duration: "4 mins",
      },
      {
        title: "Thumbnail 5",
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
       This content is a little bit longer.`,
        buttonLabelLeft: "View",
        buttonLabelRight: "Edit",
        duration: "5 mins",
      },
      {
        title: "Thumbnail 6",
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
       This content is a little bit longer.`,
        buttonLabelLeft: "View",
        buttonLabelRight: "Edit",
        duration: "6 mins",
      },
      {
        title: "Thumbnail 7",
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
       This content is a little bit longer.`,
        buttonLabelLeft: "View",
        buttonLabelRight: "Edit",
        duration: "7 mins",
      },
      {
        title: "Thumbnail 8",
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
       This content is a little bit longer.`,
        buttonLabelLeft: "View",
        buttonLabelRight: "Edit",
        duration: "8 mins",
      },
      {
        title: "Thumbnail 9",
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
       This content is a little bit longer.`,
        buttonLabelLeft: "View",
        buttonLabelRight: "Edit",
        duration: "9 mins",
      }
    ]


  }

}
