class ContactPage{
    isDisplayedField = (nameField) => nameField.forEach((field) => cy.get( `[id^=${field}]`).should('be.visible'));

    isDisplayedSubmitButton = () => cy.get('.hs-button').scrollIntoView().should('be.visible');

    clickSubmitButton = () => cy.get('.hs-button').click();

    isErrorMessageDisplayed = (mandatoryField) => mandatoryField.forEach((field) => cy.get(`.hs_${field} > .no-list > li > .hs-error-msg`).scrollIntoView().should('be.visible'))

    isNotVisibleErrorMessage = (field) => cy.get(`.hs_${field} > .no-list > li > .hs-error-msg`).should('not.exist');

    checkColorErrorMessage = (nameField) => cy.get(`.hs_${nameField} > .no-list > li > .hs-error-msg`).scrollIntoView().should('have.css','color','rgb(255, 0, 0)');

    enterText = (field,text) => cy.get( `[id^=${field}]`).scrollIntoView().should('be.visible').type(text);
}
module.exports = new ContactPage();