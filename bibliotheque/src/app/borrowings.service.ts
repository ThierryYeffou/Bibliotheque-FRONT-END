import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Borrowing } from './models/Borrowing';

@Injectable({
  providedIn: 'root'
})
export class BorrowingsService {
  selectedBorrowing: Borrowing;

  constructor(private http: HttpClient) {}
  getAllBorrowings(): Observable<Borrowing[] >{
    return this.http.get<Borrowing[]>('http://localhost:3000/borrowings/list')
  }
}
