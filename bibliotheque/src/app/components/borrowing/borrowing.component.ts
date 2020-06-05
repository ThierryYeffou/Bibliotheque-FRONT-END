import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BorrowingsService } from 'src/app/borrowings.service';
import { Borrowing } from 'src/app/models/Borrowing';

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html' ,
  styleUrls: ['./borrowing.component.css']
})
export class BorrowingComponent implements OnInit {
  allBorrowings: Borrowing [];
  constructor(private router: Router, private borrowingService: BorrowingsService) { }

  ngOnInit(): void {
    this.getAllBorrowings();
  }
  // Fetch products from service
  getAllBorrowings(): void {
    this.borrowingService
        .getAllBorrowings()
        .subscribe((result) => (console.log(result)));
}

}
