export default class PageCreateAccount {
    headingYourPersonalInformation = '.page-subheading';
    labelTitleSelect = '.account_creation > .clearfix > :nth-child(1)'
    mrSelect = '#id_gender1'
    mrsSelect = '#id_gender2'
    labelFirstName = '.account_creation > :nth-child(3) > label'
    labelLastName = '.account_creation > :nth-child(4) > label'
    inputFirstName = '#customer_firstname'
    inputLastName = '#customer_lastname'
    labelEmail = ':nth-child(5) > label'
    inputEmail = '#email'
    labelPassword = '.password > label'
    inputPassword = '#passwd'
    labelDateOfBirth = ':nth-child(7) > label'
    selectDays = '#days'
    selectMonths = '#months'
    selectYears = '#years'
    spamRequiredField = '.pull-right > span'
    buttomRegister = '#submitAccount'
    checkboxNewsletter = '#newsletter'
    buttomLogOut = '.logout'

    signUpForm(){
        cy.get(this.headingYourPersonalInformation).should('have.text', "Your personal information").should('be.visible');
        cy.get(this.labelTitleSelect).should('have.text', "Title").should('be.visible');
        cy.get(this.mrSelect).should('be.enabled');
        cy.get(this.mrsSelect).should('be.enabled');
        cy.get(this.labelFirstName).should('have.text', "First name *").should('be.visible');
        cy.get(this.labelLastName).should('have.text', "Last name *").should('be.visible');
        cy.get(this.inputFirstName).should('be.enabled');
        cy.get(this.inputLastName).should('be.enabled');
        cy.get(this.labelPassword).should('have.text', "Password *").should('be.visible');
        cy.get(this.labelDateOfBirth).should('have.text', "Date of Birth").should('be.visible');
        cy.get(this.selectDays).should('be.enabled');
        cy.get(this.selectMonths).should('be.enabled');
        cy.get(this.selectYears).should('be.enabled');
        cy.get(this.spamRequiredField).should('have.text', "*Required field").should('be.visible');
        cy.get(this.checkboxNewsletter).should('be.enabled');
        cy.get(this.buttomRegister).should('be.enabled');
    }
    typeEmail(email){
        cy.get(this.inputEmail).clear().type(email)
    }
    typePassword(password){
        cy.get(this.inputPassword).type(password)
    }
    clickButtomRegister(){
        cy.get(this.buttomRegister).click()
    }
    clickCheckbox(){
        cy.get(this.checkboxNewsletter).click()
    }
    typeFirstName(name){
        cy.get(this.inputFirstName).type(name)
    }
    typeLastName(lastName){
        cy.get(this.inputLastName).type(lastName)
    }
    selectYear(year){
        cy.get(this.selectYears).select(year)
    }
    selectDay(day){
        cy.get(this.selectDays).select(day)
    }
    selectMonth(month){
        cy.get(this.selectMonths).select(month)
    }

    clickTitleMr(){
        cy.get(this.mrSelect).click()
    }
    clickTitleMrs(){
        cy.get(this.mrsSelect).click()
    }
    clearEmail(){
        cy.get(this.inputEmail).clear()
    }
    clickLogOut(){
        cy.get(this.buttomLogOut).click()
    }

}