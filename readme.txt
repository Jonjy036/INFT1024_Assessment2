Please see the below description of the sample website for Malik Kahn Interior Design. This is not the finished article, but it is representative of what could be produced in order to advertise the services that the company can provide for potential customers as well as give an opportunity to connect with those customers, either through direct communication or through social media. Important to note is that none of the information contained is considered to be finished and the user would be expected to, with the assistance of this readme file make changes to the content to provide an accurate and up to date website using the skeleton that is already in place.

1. Header and Nav bar

At the top of each page is a header which contains a mock-up of a company logo. This logo is clickable and uses simple HTML navigation to allow the viewer to return to the home page from whichever page they are on. This is common to all the pages. On the other side of the page are the social media links which currently only direct to the sites, rather than the company page specifically. To update this simply enter the page/site you want link into the "socials" section under the relevant reference in href="".

Below the header bar is the navigation bar. This also uses simple HTML to navigate. Each button click will take you to the relevant page as described. These can be added to or changed as necessary in the "nav" section of the page.

**important** 
any changes to the header should be copied across all pages as they are common throughout, and to maintain that commonality it is necessary to update all pages with any changes made to the header or the nav bar.

Both these features are known as "sticky" so that they remain in view as the page is scrolled. This allows the user to best experience when dealing with large pages with a good amount of content. Currently this is under-utilised as the pages are not long enough in their current form to warrant this as a feature, but in order to future proof the site it is sensible to install this function now so that it does not need to change in the future.

2. Home Page

The home page is the first page which opens up. And is also the common return point for clicking the logo in the header bar. It consists of 4 "cards" which are laid out to maximise viewing and each contain a number of elements. Firstly, and most strikingly is the background image. The list of these images are shown at the bottom of the readme.txt file and can be changed with minimal fuss. Each of these cards also has 2 seperate boxes with a semi-transparent white background. Each individual card has a title and some text. These are what fill these semi-transparent boxes. The boxes are in place to ensure that no matter the background image being used, the text is still visible to the user. The text is also changeable to the requirements of the business.

CSS styling has been used to make the cards as visually stimulating as possible, including a hover function whereby the user hovers over the card and it moves slightly and casts a small shadow to make it stand out.

The images selected have been done so to utilise the shape and orientation of the cards with aesthetics in mind.

When clicking to navigate to another page using these cards, it is important to note that the entire card acts as the link rather than just the text, or the header.

To make changes to the text, the amendments are in the HTML file for home, and the "h2" and "p" areas are where this can be changed.

3. About Page

The about page is another fairly simple but effective page. It contains currently 3 sections which alternate in their formatting. There is an image on each section and a body of text headed up with a heading for each section. These can be easily modified in the HTML code to represent whatever you require as a business. The page itself is designed with displaying information about the company to the =customers in mind. As a small start up company it is important that they see you as viable and that they hold the same values as you, so it has been set up with simple values section, a what we d section, and who we are. The text in each is a placeholder text which should be updated to reflect your individual business outlook and services. 

Adding additional blocks isa simple case of copy and pasting the sections to add another below the existing. Please ensure that any additional sections are given a unique class so that css styling can be carried out. Also, please ensure that you maintain the alternating pattern between "about-section" and "about-section-reverse" which will continue the alternating image location.

4. Services Page

This page is the location where the portfolios are able to be shown to potential customers. I have created a carousel which rotates through 4 images per  portfolio. Currently these are nominally colour matched with each other to create a continuity between the pictures in each portfolio. The carousel itself is controlled by javascript code which can be found in the "script.js" file. it has each image rotate through depending on which portfolio has been selected by the viewer. Agains, as with all the images and content throughout the website you are able to change these as required. Making sure that you update images into the script file rather than within the HTML or CSS.

The portfolios are listed in number order at the top of the script file and these numbers are what defines what is used upon each selection. If you want to add additional portfolios for add more images to each portfolio it is a simple case of following the structure already in place. Changing the name of each of these portfolios is done in the HTML code and will be obvious due to the lack of any other text content. For the avoidance of doubt it is within the section "portfolio".

5. Contact Page

It is important to understand the legal obligations you hold with regards to this page. This can be done by implementing an IT governance policy. (Please see report for more information)

This page allows the input of customer private information in order ton build a database of clients. This is a CSS styled form which will deliver the customer details via javaScript coding to a location which you need to define. This form also has validation on it so the name, email and message areas must be filled in to be valid, and the email must have a valid email format to also be considered valid. Without valid input an error message prompted by the javascript will be displayed to the customer under the relevant invalid section of the form.

Below the form is the prompt to read the privacy policy which is currently filled with placeholder text which is of a similar nature to that which you need to input. The link opens up a "modal" rather than than an entirely fresh page as this will allow the user to simply close the information box and they will not have lost their input into the form due to refreshes or forwards/backward movement between pages.

6. News/blog page

The final page in the basic layout is a news/blog page where you can input any news which may be useful for customers. Whether it is news of contracts, new projects, new innovations, trends etc, this is where you can keep clients informed of the current status and future developments.  

The page is built using a javascript code which allows the articles to be minimised by default but a toggle button will allow the user to expand or retract the article so the size of the articles do not need to be adjusted for aesthetic purposes.

As with all the other pages, this is a relatively easy page to edit. With simply the sections for header and paragraphs having text added as required. Again, copy and paste can be used to add additional sections into the page. Keep in mind that the order of the articles will follow the order they are placed in he HTML file.




Image credits:

Home page:
Services box - Photo by Jason Wang on Unsplash
News box – Photo by Spacejoy on Unsplash
About box - Photo by Maria Orlova on Unsplash
contact us box - Photo by Photo by Jubéo Hernandez on Unsplash

About Page:
who we are Photo by Patrick Amoy on Unsplash
values Photo by Jimmy Dean on Unsplash
what we do Photo by Mohammad Lotfian on Unsplash

Portfolio 1:
portfolio 1 – 1 Photo by Alex Tyson on Unsplash
portfolio 1 – 2 Photo by Jan Antonin Kolar on Unsplash
portfolio 1 – 3 Photo by Toa Heftiba on Unsplash
portfolio 1 – 4 Photo by Vinicius "amnx" Amano on Unsplash

Portfolio 2:
portfolio 2 – 1 Photo by Letizia Agosta on Unsplash
portfolio 2 – 2 Photo by Lisa Anna on Unsplash
portfolio 2 – 3 Photo by Louis Colbee on Unsplash
portfolio 2 – 4 Photo by tara sadeghi on Unsplash

Portfolio 3:
portfolio 3 – 1 Photo by Avi Waxman on Unsplash
portfolio 3 – 2 Photo by Clay Banks on Unsplash
portfolio 3 – 3 Photo by Clay Banks on Unsplash
portfolio 3 – 4 Photo by Goran Ivos on Unsplash

Portfolio 4:
portfolio 4 – 1 Photo by Allen Boguslavsky on Unsplash
portfolio 4 – 2 Photo by Clay Banks on Unsplash
portfolio 4 – 3 Photo by rawkkim on Unsplash
portfolio 4 – 4 Photo by Yucel Moran on Unsplash

Portfolio 5:
portfolio 5 – 1 Photo by Alex Tyson on Unsplash
portfolio 5 – 2 Photo by Lotus Design N Print on Unsplash
portfolio 5 – 3 Photo by Planet Volumes on Unsplash
portfolio 5 – 4 Photo by Uliana Kopanytsia on Unsplash
