///<reference types="cypress"/>

describe('vefify the info for contact us page', function () {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })


    it('verify contact us page for valid data', function () {

        // cy.get('input[name="first_name"]').type('gauri')
        // cy.get('input[name="last_name"]').type('gore')
        // cy.get('input[name="email"]').type('gauri@gmail.com')
        // cy.get('textarea[name="message"]').type('hii, im learning cypress')
        // cy.get('input[type="submit"]').click()
        cy.contactus('gauri','gore','gauri@gmail.com','hii, im learning cypress','[type="submit"]')


        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })
    it('verify contact us page for invalid email', function () {
        // cy.get('[name="first_name"]').type('gauri')
        // cy.get('[name="last_name"]').type('gore')
        // cy.get('input[name="email"]').type('gaurim')
        // cy.get('textarea[name="message"]').type('hii, im learning cypress')
        // cy.get('input[type="submit"]').click()
        cy.contactus('gauri','gore','gauri','hii, im learning cypress','[type="submit"]')

        cy.contains('Error: Invalid email address').should('be.visible')


    })
    it('vefity contact us page for empty field', function () {
        cy.get('input[name="first_name"]').type('gauri')

        //cy.get('[name="last_name"]').type('gore')
        cy.get('input[name="email"]').type('gauri@gmail.com')
         cy.get('textarea[name="message"]').type('hii, im learning cypress')
         cy.get('input[type="submit"]').click()
         //contact us command is not valid for empty statement

        cy.contains('Error: all fields are required').should('be.visible')

    })
    it.only('verify contact us page for reset values',function(){

        // cy.get('input[name="first_name"]').type('gauri')
        // cy.get('input[name="last_name"]').type('gore')
        // cy.get('input[name="email"]').type('gauri@gmail.com')
        // cy.get('textarea[name="message"]').type('hii, im learning cypress')
        // cy.get('[type="reset"]').click()
        cy.contactus('gauri','gore','gauri@gmail.com','hii, im learning cypress','[type="reset"]')

        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('input[name="email"]').should('have.text',"")
        cy.get('textarea[name="message"]').should('have.text',"")

    })

})