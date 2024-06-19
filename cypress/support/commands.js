Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('checkout', (nome, sobrenome, endereço, cidade, cep, celular, email) => {
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#billing_address_1').type(endereço)
    cy.get('#billing_city').type(cidade)
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(celular)
    cy.get('#billing_email').type(email)
})