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

**Homepage Page**
   - Clicked on header Logo icon, it goes to Home page.
   - Clicked on Destinations navigation element, it goes to the relevant page.
   - Clicked on Gallery navigation element, it goes to the relevant page.
   - Clicked on About Us navigation element, it goes to the relevant page.
   - Clicked on Contact Us navigation element, it goes to the relevant page.
   - Clicked on View More Button in Each Grid element, all of them goes to the relevant page.
   - Added email to Newsletter sign up field and Clicked on Sign Up Button, the page is connected to dummy Code Institute mail service.
   - Clicked on Social links icons in the footer, each icon goes to the relevant page.   - Clicked on Social links icons in the footer, each icon goes to the relevant page.

**Destinations Page**
   - Clicked on header Logo icon, it goes to Home page.
   - Clicked on every header navigation elements, all of them goes to the relevant page.
   - Clicked on every Map Locator, all of them opens info window with relevant information and all links are connected to the relevant pages.
   - Clicked on View Packages Button in Country Grid element, all of them opens relevant packages grid elements.
   - Clicked on Contact Us Button in Each Packages Grid element, all of them goes to the relevant page.
   - Added email to Newsletter sign up field and Clicked on Sign Up Button, the page is connected to dummy Code Institute mail service.
   - Clicked on Social links icons in the footer, each icon goes to the relevant page.   - Clicked on Social links icons in the footer, each icon goes to the relevant page.

**Gallery Page**
   - Clicked on header Logo icon, it goes to Home page.
   - Clicked on every header navigation elements, all of them goes to the relevant page.
   - Clicked on every Image in the Gallery, all of them opens light box window.
   - Clicked on every arrows in the Gallery Light box, all images are presented, as it should be.
   - Clicked on close icon in the Gallery Light box, Light box is flying out, as it should be.
   - Added email to Newsletter sign up field and Clicked on Sign Up Button, the page is connected to dummy Code Institute mail service.
   - Clicked on Social links icons in the footer, each icon goes to the relevant page.   - Clicked on Social links icons in the footer, each icon goes to the relevant page.

**About Us Page**
   - Clicked on header Logo icon, it goes to Home page.
   - Clicked on every header navigation elements, all of them goes to the relevant page.
   - Clicked on View More Button in Grid element, it goes to the relevant page.
   - Added email to Newsletter sign up field and Clicked on Sign Up Button, the page is connected to dummy Code Institute mail service.
   - Clicked on Social links icons in the footer, each icon goes to the relevant page.   - Clicked on Social links icons in the footer, each icon goes to the relevant page.

**Contact Us Page**
   - Clicked on header Logo icon, it goes to Home page.
   - Clicked on every header navigation elements, all of them goes to the relevant page.
   - Checked all contact form elements, all are working properly.
   - Clicked on Clear Button form fields are cleared, as it should be.
   - Clicked on Send a Message Button, on submit form fields are cleared, as it should be and underneath the form title displays confirmation sign.
   - Added email to Newsletter sign up field and Clicked on Sign Up Button, the page is connected to dummy Code Institute mail service.
   - Clicked on Social links icons in the footer, each icon goes to the relevant page.   - Clicked on Social links icons in the footer, each icon goes to the relevant page.


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



