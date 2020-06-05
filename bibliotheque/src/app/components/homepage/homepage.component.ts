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

  public close:boolean = false;
  public buttonNameclose:any = 'close';

  callForm() {
    this.new = !this.new;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.new)  
      this.buttonName = "new";
    else
      this.buttonName = "new";
  }

  callFormclose(){
    this.close = !this.close;
     // CHANGE THE NAME OF THE BUTTON.
     if(this.close)  
       this.buttonNameclose = "close";
      else
       this.buttonNameclose = "close";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
