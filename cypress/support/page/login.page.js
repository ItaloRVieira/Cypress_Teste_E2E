export default class PageLogin {
    inputEmailCreateAccount = '#email_create';
    inputEmailLogin = '#email';
    inputPassword = '#passwd';
    linkForgotPassword = 'a[href="http://www.automationpractice.pl/index.php?controller=password"]';
    buttomCreateAccount = '#SubmitCreate';
    buttomSignIn = '#SubmitLogin';
    headingCreateAccount = '#create-account_form > .page-subheading';
    descriptionCreateAccount = '#create-account_form > .form_content > p';
    headingAlreadyRegistered = '#login_form > .page-subheading'

    typeEmailLogin(email){
        cy.get(this.inputEmailLogin).type(email)
    };

    typePasswordLogin(password){
        cy.get(this.inputPassword).type(password)
    };

    typeEmailCreateAccount(email){
        cy.get(this.inputEmailCreateAccount).type(email)
    };

    clickLinkForgotPassword(){
        cy.get(this.linkForgotPassword).click()
    }

    clickButtomCreateAccount(){
        cy.get(this.buttomCreateAccount).click()
    }
    clickButtomSignIn(){
        cy.get(this.buttomSignIn).click()
    }
    boxCreateAcc(){
        cy.get(this.headingCreateAccount).should('have.text', "Create an account").should('be.visible');
        cy.get(this.descriptionCreateAccount).should('have.text', "Please enter your email address to create an account.").should('be.visible');
        cy.get(this.inputEmailCreateAccount).should('be.enabled');
        cy.get(this.buttomCreateAccount).should('be.enabled')
    }

    boxSignUp(){
        cy.get(this.headingAlreadyRegistered).should('have.text', "Already registered?").should('be.visible');
        cy.get(this.inputEmailLogin).should('be.enabled');
        cy.get(this.inputPassword).should('be.enabled');
        cy.get(this.buttomSignIn).should('be.enabled')
        cy.get(this.linkForgotPassword).should('have.text', "Forgot your password?").should('be.visible');
    }
}