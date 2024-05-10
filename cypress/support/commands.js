import PageCreateAccount from "../support/page/createAccount.page";
const pageCreateAccount = new PageCreateAccount();

Cypress.Commands.add('accessNewUserPage', (name, lastName, password) => {
        pageCreateAccount.typeFirstName(name);
        pageCreateAccount.typeLastName(lastName);
        pageCreateAccount.typePassword(password);
        // pageCreateAccount.typeEmail(email);
})