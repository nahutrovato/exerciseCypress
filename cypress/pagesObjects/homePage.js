class HomePage{ 
    urlFavicon = 'https://i0.wp.com/qubika.com/wp-content/uploads/2023/06/cropped-favicon.png?fit=32%2C32&ssl=1'
    title = 'Qubika: Purposefulle Shaping the Digital Future'
    
    visit = () => cy.visit('/');
    
    isDisplayedTitle = () => cy.title('include',this.title);

    isDisplayedCheckQubikaLogo = () => cy.get('[rel="icon"]').should('have.attr', 'href').and('include', this.urlFavicon);
    
    clickContactUs = () => cy.contains("Contact Us").click(); 
}
module.exports = new HomePage();