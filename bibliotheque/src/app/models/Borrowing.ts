export class Borrowing {
    borrowingDate: Date;
    maxReturnDate: Date;
    realReturnDate: Date;
    //books: Book[] 
    //user: User

    constructor(
        borrowingDate: Date,
        maxReturnDate: Date,
        realReturnDate: Date,
        //books: Book[]
        //user: User
    ) {
        this.borrowingDate = borrowingDate;
        this.maxReturnDate = maxReturnDate;
        this.realReturnDate = realReturnDate;
        //this.books = books;
        //this.user = user;
    }
}