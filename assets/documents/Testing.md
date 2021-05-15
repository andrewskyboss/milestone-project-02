# Testing

# Author
Andrej Cybovskij

## HTML

- Ran HTML code through [W3C Markup Validation Service](https://validator.w3.org/) for code warning & error check.
 - Everything is coded properly. Few Warning message were received:
 - **Warning**, there was an unnecessary type attribute for JavaScript resources (the attribute was removed)
 - **Warning**, there was an empty headings for h2 id="confirmation-title" and h3 id="confirmation-title-email". As they are used to display confirmation message on form submit, they are left empty.
 - **Error**, there was empty value for attribute src on element img. As it is used as a placeholder for the Gallery light box image, everything is left as it is.


## CSS
 - Ran CSS code through [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) for code warning & error check.
   - Everything is coded properly. Few Warning message were received:
   - Warning, for imported fonts, their style sheets are not checked in direct input and file upload modes. This warning is ignored.
   -  Warning, for color variables as an unknown vendor extension. This warning is ignored
   - No errors found.
   - Relevant logos are placed on homepage footer

## JavaScript
- Ran JavaScript code through [JavaScript JSHINT Service](https://jshint.com/) for code warning & error check.
   - The following (general) Warning messages were received:
   - Missing semicolon
   - Undefined variables such as google, toggleBounce, initMap.
   - The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.

 - All semicolon were added. All variables were fixed or ignored, as code is working properly
For loop was not wrapped into if statement, because it was not necessary by functionality.


## GENERAL (Site Testing on live page)

- Navigation
   - Clicked on header Logo icon, it goes to Home page.
   - Clicked on Destinations navigation element, it goes to the relevant page.
   - Clicked on Gallery navigation element, it goes to the relevant page.
   - Clicked on About Us navigation element, it goes to the relevant page.
   - Clicked on Contact Us navigation element, it goes to the relevant page.
- Homepage Page
   - Clicked on View More Button in Destinations Grid element, it goes to the relevant page.
   - Clicked on View More Button in Gallery Grid element, it goes to the relevant page.
   - Clicked on View More Button in About Us Grid element, it goes to the relevant page.
   - Clicked on View More Button in Contact Us Grid element, it goes to the relevant page.
   - Clicked on Social links icons in the footer, each icon goes to the relevant page.


### Cross Browser and Cross Device Testing

Testing was done for the following devices:

| TOOL / Device  |  BROWSER |  OS |  SCREEN WIDTH |
|---|---|---|---|
| Desktop  | Edge  | windows 10  |  1920 x 1080 |
| Desktop  | Chrome | windows 10  |  1920 x 1080 |
|  Desktop | Opera  |  windows 10 | 1920 x 1080  |
|  Desktop | Firefox  |  windows 10 | 1920 x 1080  |
| Desktop  | IE  | windows 10  |  1920 x 1080 |
| Laptop  | Edge | windows 10  |  1366 x 768 |
| Laptop | Chrome  |  windows 10 | 1366 x 768  |
| Laptop  | Opera  | windows 10  |  1366 x 768 |
| Laptop  | Firefox  | windows 10  |  1366 x 768 |
| Laptop  | IE | windows 10  |  1366 x 768 |
|  MP Samsung S10+ | Chrome  |  android | 1440 x 3040  |
|  MP Samsung S10+ | Samsung  |  android | 1440 x 3040  |
|  ipad | Chrome  |  iOs | 1024 x 768  |
|  ipad | Safari  |  iOs | 1024 x 768  |

### Following bugs were detected:

- Portfolio page, when click the logo (name) the page is redirected to a non-existing page instead of staying on the page it’s on. (404 page) - Fixed.
	- Portfolio page, were found four JavaScript console errors. – There are four iframes to Adobe portfolios. Errors are from the Adobe server. - Not fixed.
	- On super wide screens content gets a bit too spread out. - Fixed by adding max-width for the container-fluid class.
	- Footer download button were opening temporary pdf document. – Fixed by adding CV pdf document.
	- On mobile devices, the padding around the heading and logo take up a lot of space. – Fixed by adding media queries to a relevant device size and reducing font size and padding.
	- Footer email scan image have had no alt text. - Fixed.
	- The mobile navigation showed too much of underlying text. - Fixed by adding opacity to the background-color property.
	- Contact Form was too narrow on mobile devices. – Fixed by adding relevant media query and increasing form’s width to 70% and 90%.
	- Contact page and Experience Page, on mobile devices have had an extraordinary amount of space between the hero image and the h1. - Fixed.
	- Mobile menu on click, has the movement to the right at first before being placed below the logo divider bar. – Not fixed. It’s third party Bootstrap JavaScript code.



## RESPONSIVENESS
- Below is a picture of site that shows it in responsive states. 
[link to check a website to be responsive](http://ami.responsivedesign.is)
![picture of site](../images/responsive-1.PNG)

### Testing stories from UX perspectives:

- As an Employer and first time user I want to easy navigate and get all information I need.
  1. Navigation is fixed to the header, I can easily 
  2. Potential employee name is on the header too.
  3. I can easily get access to the contact page.
  4. I can download printable version of CV

- As a Freelancer's Customer I want to view past client’s works.
  1. Would be great to have some testimonials.
  2. Navigation is clear and easy to access.



