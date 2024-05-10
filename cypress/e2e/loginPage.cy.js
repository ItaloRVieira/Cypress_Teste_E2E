import PageLogin from "../support/page/login.page";
const pageLogin = new PageLogin();

import PageCreateAccount from "../support/page/createAccount.page";
const pageCreateAccount = new PageCreateAccount();

const { faker } = require('@faker-js/faker');

let name = faker.random.alpha({ count: 10 })
let lastName = faker.person.lastName()
let password = faker.random.alpha({ count: 8 })

describe('Cenários página de login', () => {
    beforeEach(() => {
        cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
    })

    it('Acessando a página de login', () => {
        pageLogin.boxCreateAcc();
        pageLogin.boxSignUp()
    });

    it('Usuário informa e-mail válido em "create account"', () => {
        var email = faker.random.alpha({ count: 10 }) + '@meuemail.com';
        cy.wrap(email).as('emailFaker')
        pageLogin.typeEmailCreateAccount(email);
        pageLogin.clickButtomCreateAccount();
        cy.wait(3000).then(() => {
            cy.url().should('equal', 'http://www.automationpractice.pl/index.php?controller=authentication&back=my-account#account-creation')
        })
    });

    it('Usuário tenta criar conta informando e-mail inválido', () => {
        pageLogin.typeEmailCreateAccount(name + name);
        pageLogin.clickButtomCreateAccount();
        cy.contains("Invalid email address.").should('be.visible')
    })

});

describe('Criando nova conta', () => {
    const randomyear = Math.floor(Math.random() * (2022 - 1990 + 1)) + 1990;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1;
    let email;
    
    beforeEach(() => {
        email = faker.random.alpha({ count: 10 }) + '@meuemail.com';
        cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
        pageLogin.typeEmailCreateAccount(email);
        pageLogin.clickButtomCreateAccount();
    })
    it('Deve ser possível visualizar formulário de criação de usuário', () => {
        pageCreateAccount.signUpForm()
    })

    it('Deve ser possivel criar conta informando apenas campos obrigatórios com dados válidos', () => {
        cy.requiredFields(name, lastName, password);
        pageCreateAccount.clickButtomRegister()
        cy.contains("Your account has been created.").should('be.visible')
        cy.url().should('equal', 'http://www.automationpractice.pl/index.php?controller=my-account')
    });

    it('Deve ser possível criar conta informando todos os campos com dados válidos', () => {
        pageCreateAccount.clickTitleMr();
        cy.requiredFields(name, lastName, password);

        pageCreateAccount.selectMonth(randomMonth);
        pageCreateAccount.selectDay(randomDay);
        pageCreateAccount.selectYear(randomyear.toString());
        pageCreateAccount.clickCheckbox()
        pageCreateAccount.clickButtomRegister();

        cy.contains("Your account has been created.").should('be.visible')
        cy.url().should('equal', 'http://www.automationpractice.pl/index.php?controller=my-account')
    });

    it('Não deve ser possível criar conta sem informar senha', () => {
        pageCreateAccount.typeFirstName(name);
        pageCreateAccount.typeLastName(lastName);
        pageCreateAccount.clickButtomRegister();

        cy.contains("passwd is required.").should('be.visible')
    });

    it('Não deve ser possível criar conta informando senha com menos de 5 caracteres', () => {
        const password4 = faker.random.alpha({ count: 4 })

        pageCreateAccount.typeFirstName(name);
        pageCreateAccount.typeLastName(lastName);
        pageCreateAccount.typePassword(password4);
        pageCreateAccount.clickButtomRegister();

        cy.contains("passwd is invalid.").should('be.visible')
    });

    it('Não deve ser possível criar conta sem informar First Name', () => {
        pageCreateAccount.typeLastName(lastName);
        pageCreateAccount.typePassword(password);
        pageCreateAccount.clickButtomRegister();

        cy.contains("firstname is required.").should('be.visible')
    });

    it('Não deve ser possível criar conta sem informar Last Name', () => {
        pageCreateAccount.typeFirstName(name);
        pageCreateAccount.typePassword(password);
        pageCreateAccount.clickButtomRegister();

        cy.contains("lastname is required.").should('be.visible')
    });

    it('Não deve ser possível criar conta sem informar email', () => {
        pageCreateAccount.typeFirstName(name);
        pageCreateAccount.typeLastName(lastName);
        pageCreateAccount.typePassword(password);
        pageCreateAccount.clearEmail();
        pageCreateAccount.clickButtomRegister();

        cy.contains("email is required.").should('be.visible')
    });

    it('Não deve ser possível criar conta informando email já cadastrado', () => {
        cy.requiredFields(name, lastName, password);
        pageCreateAccount.clickButtomRegister();
        pageCreateAccount.clickLogOut()
        pageLogin.typeEmailCreateAccount(email);
        pageLogin.clickButtomCreateAccount();

        cy.contains("An account using this email address has already been registered. Please enter a valid password or request a new one.")
        .should('be.visible')
    })

    
})

