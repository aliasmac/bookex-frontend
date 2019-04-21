# Booked Frontend
Allows users to search books, add books to their favourites or wishlist, indicate which book they are currently reading, and offer up books for loan (and see which books other users are offering for loan). Backend here: https://github.com/CiaranMn/bookex-backend

## Core functionality for users
- On app load the home page displays a selection of books users have added to their favourites and wishlists, and on the right shows a leaderboard of books people are currently reading, and how many readers each has.
- Without being logged in, users can search for books, and click for more details.
- When logged in users can add books to their favourites or wishlist, indicate they are currently reading a book, and offer a book up for loan (or remove it from availability for loan)
- From the loan shelf page, users can see what books are available for loan, and click on any to see which user has it available.
- From their profile page, users can view and remove books on their wishlist and favourite lists.

![](demo.gif)

## Frontend Structure

Written in React. 

`npm install && npm run start` to start the frontend in development mode. 

The backend is live on Heroku and the frontend will get data from and post data to that server unless told otherwise (in API.js). Backend code is here: https://github.com/thexyman/bookex-backend

# Todo
Refocus the app on the **'loan shelf' function** - the world probably doesn't need another Goodreads but building/company intranets could maybe use a book exchange:

- Loans to be associated with locations, and users to be shown loans available in their location only
- Facility for users to message people with loans on offer expressing interest (with email alert to recipient)
- Loan offerers to record when they have lent a book out, and see in their profile who it was given to and when
- Feature to log when a book is returned, and have it go back on the loan shelf (unless the owner doesn't want it to)
- Wishlist feature to be tweaked to tie in to loan exchange concept, e.g. 'user is looking to borrow this book if anyone has it'

### Improvements
Both the book cards in search results and user lists (which appear on the left) and the book details page (on the right) need to know what books are on which lists for a current user, to allow them to add/remove books to lists directly from the search results or book details depending on their preference. This has led to the state and logic relating to adding and removing from lists living in App, a lot of drilling down props, and makes the application a prime candidate for refactoring to use Redux.
