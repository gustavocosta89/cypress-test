# cypress-test
# cypress-test

Documentação de Testes Cypress VOX
________________________________________
Visão Geral
Este documento abrange a documentação das suítes de testes Cypress para o teste da VOX. Cada suíte de testes verifica funcionalidades específicas da página, garantindo que o comportamento seja conforme o esperado.
________________________________________
Pré-Requisitos
Antes de implementar e executar os testes, é necessário configurar o ambiente Cypress no projeto, seguindo as instruções da documentação oficial.
________________________________________
Suítes de Testes
________________________________________
1. Acesso Sem Autenticação (access.cy.js)
Objetivo: Testar o comportamento de redirecionamento ao tentar acessar páginas protegidas sem autenticação.
Passos:
•	Tentar acessar a URL protegida /inventory.html sem login.
•	Verificar se o formulário de login é exibido.
Implementação:
  1.	Criar a classe AccessPage com métodos para acessar a página sem autenticação e verificar o formulário de login.
  2.	Implementar o teste em access.cy.js.
________________________________________
2. Adicionar ao Carrinho (add-to-cart-button.cy.js)
Objetivo: Verificar a funcionalidade do botão de adicionar ao carrinho.
Passos:
•	Login com credenciais válidas.
•	Navegar para a página de inventário.
•	Adicionar o produto "Sauce Labs Backpack" ao carrinho.
•	Verificar a presença do produto no carrinho.
Implementação:
  1.	Criar as classes LoginPage e ProductsPage.
  2.	Implementar o teste em add-to-cart-button.cy.js.
________________________________________
3. Carrinho (cart.cy.js)
Objetivo: Verificar a funcionalidade de adicionar produtos ao carrinho.
Passos:
•	Login com credenciais válidas.
•	Navegar para a página de inventário.
•	Adicionar o produto "Sauce Labs Backpack" ao carrinho.
•	Verificar a presença do produto no carrinho.
Implementação:
  1.	Criar as classes LoginPage e ProductsPage.
  2.	Implementar o teste em cart.cy.js.
________________________________________
4. Mensagens de Erro no Checkout (checkout-error-messages.cy.js)
Objetivo: Verificar a exibição de mensagens de erro no formulário de checkout.
Passos:
•	Login com credenciais válidas.
•	Adicionar um produto ao carrinho e navegar para a página de checkout.
•	Preencher parcialmente o formulário de checkout.
•	Verificar a exibição de mensagens de erro apropriadas.
Implementação:
  1.	Criar as classes LoginPage, ProductsPage, CartPage, e CheckoutPage.
  2.	Implementar o teste em checkout-error-messages.cy.js.
________________________________________
5. Checkout (checkout.cy.js)
Objetivo: Verificar o processo de checkout.
Passos:
•	Login com credenciais válidas.
•	Adicionar um produto ao carrinho e navegar para a página de checkout.
•	Preencher o formulário de checkout e verificar a conclusão com sucesso.
•	Tentar continuar o checkout sem preencher o formulário e verificar as mensagens de erro.
Implementação:
  1.	Criar as classes CheckoutPage e CartPage.
  2.	Implementar o teste em checkout.cy.js.
________________________________________
6. Login (login.cy.js)
Objetivo: Verificar o processo de login.
Passos:
•	Preencher o nome de usuário e senha válidos e submeter o login.
•	Verificar se a URL resultante contém /inventory.html.
•	Preencher o nome de usuário e senha inválidos e verificar as mensagens de erro.
Implementação:
  1.	Criar a classe LoginPage.
  2.	Implementar o teste em login.cy.js.
________________________________________
7. Logout (logout.cy.js)
Objetivo: Verificar a funcionalidade de logout.
Passos:
•	Login com credenciais válidas.
•	Executar o logout e verificar o redirecionamento para a página de login.
Implementação:
  1.	Criar a classe LoginPage.
  2.	Implementar o teste em logout.cy.js.
________________________________________
8. Navegação para o Checkout (navigation.cy.js)
Objetivo: Verificar a navegação da página do carrinho para a página de checkout.
Passos:
•	Login com credenciais válidas.
•	Adicionar um produto ao carrinho e abrir a página do carrinho.
•	Verificar a navegação para a página de checkout.
Implementação:
  1.	Criar as classes LoginPage, CartPage, e CheckoutPage.
  2.	Implementar o teste em navigation.cy.js.
________________________________________
9. Tempo de Carregamento da Página (page-load-time.cy.js)
Objetivo: Verificar se a página de produtos carrega dentro de um tempo razoável após o login.
Passos:
•	Login com credenciais válidas.
•	Verificar se a lista de produtos está visível dentro de um tempo limite de 10 segundos.
Implementação:
  1.	Criar as classes LoginPage e ProductsPage.
  2.	Implementar o teste em page-load-time.cy.js.
________________________________________
10. Página de Produtos (products.cy.js)
Objetivo: Verificar várias funcionalidades na página de produtos.
Passos:
•	Login com credenciais válidas.
•	Verificar a exibição de produtos, adição e remoção de produtos do carrinho, e detalhes do produto.
Implementação:
  1.	Criar as classes LoginPage, ProductsPage, e CartPage.
  2.	Implementar o teste em products.cy.js.
________________________________________
11. Ordenação de Produtos por Preço (product-sort-by-price.cy.js)
Objetivo: Verificar a funcionalidade de ordenação de produtos por preço.
Passos:
•	Login com credenciais válidas.
•	Verificar se os produtos estão ordenados corretamente por preço.
Implementação:
  1.	Criar a classe ProductsPage.
  2.	Implementar o teste em product-sort-by-price.cy.js.
________________________________________
12. Remoção do Carrinho (remove-from-cart.cy.js)
Objetivo: Verificar a funcionalidade de remoção de produtos do carrinho.
Passos:
•	Login com credenciais válidas.
•	Verificar se a remoção de produtos do carrinho está funcionando corretamente.
Implementação:
  1.	Criar a classe ProductsPage.
  2.	Implementar o teste em remove-from-cart.cy.js.
________________________________________
13. Design Responsivo (responsive-design.cy.js)
Objetivo: Verificar se a página de produtos é exibida corretamente em diferentes tamanhos de tela.
Passos:
•	Login com credenciais válidas.
•	Verificar a exibição correta da página de produtos em diferentes tamanhos de tela, incluindo presets para iPhone e iPad.
Implementação:
  1.	Criar a classe ProductsPage.
  2.	Implementar o teste em responsive-design.cy.js.
________________________________________
14. Estado do Carrinho Após Atualização (cart-state-after-refresh.cy.js)
Objetivo: Verificar se o estado do carrinho é mantido após a atualização da página, garantindo que os itens adicionados permanecem no carrinho mesmo após um reload da página.
Passos:
•	Navegar para a página de login.
•	Realizar o login com credenciais válidas.
•	Verificar se a navegação para a página de produtos foi bem-sucedida.
•	Adicionar um produto ao carrinho.
•	Navegar para a página do carrinho.
•	Verificar se o estado do carrinho é mantido após a atualização da página.
Implementação:
  1.	Criar a classe LoginPage com métodos para visitar a página de login, preencher o nome de usuário, senha e submeter o login.
  2.	Criar a classe ProductsPage com métodos para adicionar produtos ao carrinho e abrir a página do carrinho.
  3.	Criar a classe CartPage com métodos para verificar se os produtos estão no carrinho.
  4.	Implementar o teste em cart-state-after-refresh.cy.js.
________________________________________
Execução dos Testes
  Para executar os testes, use os comandos cypress open ou cypress run. Esses comandos são necessários para garantir a execução correta e a verificação das funcionalidades testadas.