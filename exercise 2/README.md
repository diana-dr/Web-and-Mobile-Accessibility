# Web-and-Mobile-Accessibility

### FILES MODIFIED - index.html, article.html, login.html, empty.html
                   - common.js
                   - common.css, article.css, bootstrap.css
### All changes to the intitial code are signaled with a comment that reads "UPDATE"

# Exercise 2 – Accessible design

Accessible design is essential not only for people with disabilities, but also for normal people to efficiently gather and process information on a Web page.

## Contrast ratio
Can you change the contrast ratio of the content so that they become more legible?

What we did: Changed the colors of the text to create a bigger contrast.

## Page regions
This task practices your understanding of using HTML5 semantic tags or ARIA roles to define different regions of a Web page.

For the homepage, the HTML code is inside the index.html file. After opening it in your favorite code editor, try to identify different regions in this page and use appropriate landmarks to mark them. How many regions, e.g. header, navigation, etc. are there in the Web page?
You can repeat the same process for the login.html, article.html and empty.html files. 

What we did: Created roles for the containers.

## Accessible font size
Have you already tested the two buttons on the top of the of Web page where you can increase or decrease the font sizes of the whole page? Does it work as expected? If not, can you implement the JavaScript that will dynamically scale all the font sizes?
Hint: You need to first create an event listener that watches the click events on the buttons. Since the font size of the whole page is defined relative to font size of the root html element, you can achieve the result by updating the font size property of the root html element.
What screen reader will announce for these two buttons? Is this good accessibility practice? If not, can you propose an improvement so that the purposes of these two buttons become clearer using ARIA support?

What we did: Implemented javascript code to make the buttons functional

## Reading order (screen reader)
Open the login.html file in your code editor and navigate to the HTML code for the login form. Also load this page in your browser. Compare the HTML code carefully against the actual layout, can you find something counter intuitive? If you turn off the CSS, do you see any difference? If you use a screen reader, what would the reading order be?
Can you propose a solution to improve the HTML code so that the HTML code structure better reflects what the user sees?

# Exercise 6 – Accessible tables
Tables are excellent choices to represent relational data in grids. In order to make them also accessible to visually impaired people, we need to add extra attribute to the table markups so that they become legible to screen readers.

## Header cells vs data cells
Open the article page in your browser and scroll down to the table containing samples of average global temperature for the last two centuries. Can you identify which rows (columns) belong the table header while which rows (columns) belong to the table data? If you inspect the HTML code of article.html in your code editor, are the header cells and data cells marked up correctly? If not, how can you fix it?

What we did: Changed the background color of the header in order to clearely diferentiate it from the content of the table, and increased the table borders

## Column and row groups
In the table about average global temperature, there are some headers that span multiple rows (columns) but the corresponding scopes are not correctly established. Based on the slides containing column and row groups, can you change the HTML code?

What we did: Removed the empty cells to avoid confusion
