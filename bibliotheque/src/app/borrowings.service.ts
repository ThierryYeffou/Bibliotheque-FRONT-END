import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BorrowingsService {
  selectedBorrowing: Borrowing;

  constructor(private http: HttpClient) {}
  getAllBorrowings(): Observable<Borrowing[] >{
    return this.http.get<Borrowing[]>('localhost:3000/borrowing/list')
  }
}
