/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      produtosPage.visitarUrl()
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      produtosPage.buscarProduto('Abominable Hoodie')
      produtosPage.addProdutoCarrinho('XS', 'Blue', 1)
      produtosPage.buscarProduto('Aero Daily Fitness Tee')
      produtosPage.addProdutoCarrinho('S', 'Black', 2)
      produtosPage.buscarProduto('Aether Gym Pant')
      produtosPage.addProdutoCarrinho(32, 'Brown', 1)  
      produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
      produtosPage.addProdutoCarrinho('M', 'Green', 1)
      cy.get('.sub-title').click()  
      cy.get('#cart .checkout').click()
      cy.checkout('Cristian', 'Borges', 'Rua Comendador Franco, 24', 'Ribeirão Preto', '17065985', '998574669', 'ctx.b@ebac.com.br')
      cy.get('#terms').click()
      cy.get('#place_order').click()
      cy.get('.woocommerce-order-details__title').should('contain', 'Detalhes do pedido')     
  });
})