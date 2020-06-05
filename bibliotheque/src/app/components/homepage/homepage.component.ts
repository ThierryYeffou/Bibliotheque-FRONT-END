import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css',
  ]
})
export class HomepageComponent implements OnInit {
  public new:boolean = false;
  public buttonName:any = 'new';

  callForm() {
    this.new = !this.new;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.new)  
      this.buttonName = "new";
    else
      this.buttonName = "new";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
