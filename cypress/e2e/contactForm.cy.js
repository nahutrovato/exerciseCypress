const HomePage = require('../pagesObjects/homePage');
const ContactPage = require('../pagesObjects/contactPage');

describe('Contact Form validate test', () => {
 
    before(() => {
        cy.viewport(1280, 720);
        HomePage.visit();
        cy.url().should('eq','https://qubika.com/');
        HomePage.isDisplayedTitle();
        HomePage.isDisplayedCheckQubikaLogo();
    });

    it('Enter to Contact Us form', () => {
        HomePage.clickContactUs();
    });

    it('Validate the fields and submit button form is displayed', () => {
        const fields = ['firstname','lastname']
        ContactPage.isDisplayedField(fields);
        ContactPage.isDisplayedSubmitButton();
    });

    it('Validate that all mandatory fields have an error message if it is empty fields', () => {
        const mandatoryField= ['firstname','lastname','email','contact_type','message'];
        ContactPage.clickSubmitButton();
        ContactPage.isErrorMessageDisplayed(mandatoryField);
    });

    it('Validate that only "Name" field is marked with red color', () => {
        ContactPage.checkColorErrorMessage('firstname');
    });

    it('Write "Test name" on the "Name" field and click "Get in touch" button' , () => {
        ContactPage.enterText('firstname','Test name');
        ContactPage.clickSubmitButton();
    });

    it('Validate that all mandatory fields have an error message except "Name" field' , () => {
        const mandatoryField= ['lastname','email','contact_type','message'];
        ContactPage.isErrorMessageDisplayed(mandatoryField);
        ContactPage.isNotVisibleErrorMessage('firstname');
        ContactPage.checkColorErrorMessage('email');
    });

    it('Validate that only "Email" field is marked with red color' , () => {
        ContactPage.checkColorErrorMessage('email');
    });
    
})