Veena Code Review:

I did the code review for the book search project shared with me and focused more on the code from the folders lib/books/books-access and lib/books/feature as you said



## 1.	Write a short code review based on the existing code.

    I noticed following problems with the code by running these commands:

    ## 1.npx nx test books-data-access: 



    •	Tests cases failed for the ‘failedAddToReadingList should undo book addition to the state’ and ‘failedRemoveFromReadingList should undo book removal from the state’ because action types called failedAddToReadingList and failedRemoveFromReadingList were not handled in readingListReducer reducer. 

    •	In the reading-list effects file, error handling was not effective. Actions were dispatched when error occurred, but no handling cases for those actions in the readingListReducer. 

    •	No alerts to the user when error occurs with the search term. For example if we type anything wrong or if we didn’t find the book we wanted, app is not showing up any notifications to the users

    •	For delayed http calls, we can show the wait time with spinner for better user experience.

    •	We can use NVDA testing tools for accessibility



    ## 2.npx nx test books-feature – 
    All the tests are passed for components (book-search, reading-list and total count) and books feature module.




## 2.	Accessibility: Issues noticed by Light house extension

    •	Buttons do not have an accessible name: Fixed this by adding ‘aria-label="search"’ attribute to the search icon button

    •	Background and foreground colors do not have a sufficient contrast ratio: Modified font color to black to meet color contrast (we can change to any color which follows color contrast rules based on organization banding)





## 3.	 Manual check:

    •	The page should have a logical tab order, so I removed unnecessary divs wrapped around ‘Reading list’ and ‘Want to Read’ button.

    •	Interactive elements should indicate their purpose and state, so added type attribute for all buttons

    •	Added tabindex and href to ‘JavaScript’ anchor tag so that it highlights for tab and works for keyboard enter key to start search.

    •	Added alt attribute for image tag in reading - list and book-search components and removed unnecessary div’s around image in read – list component.

    •	Added focus pseudo style for the button to highlight while pressing tab on key board



## 4.	Testing:

    •	Run lint, unit tests, and e2e tests: All the unit tests were passed, except for reading - list reducer. I fixed failed test cases for failedAddToReadingList should undo book addition to the state’ and ‘failedRemoveFromReadingList should undo book removal from the state’. 

    •	Above mentioned two test cases were unhandled action types in reducer so reducer should return default state. Written a test case for this scenario and all tests passed.

    •	Written unit test cases for the actions dispatched for the components: book- search and reading-list



