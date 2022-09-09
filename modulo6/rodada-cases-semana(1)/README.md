# Projeto 4Food 
![Tela Inicial](https://user-images.githubusercontent.com/86701927/139736513-c05e5ab1-9a65-4c19-9692-cad07c1a6f0b.png)

# 📄 Sobre

Projeto final do curso de Front-End da Labenu. A ideia foi desenvolver um aplicativo parecido com o Ifood, onde o usuário faz os pedidos, acessa o carrinho de compras, finaliza a compra, altera seus dados e verifica o tempo de espera do pedido. 

# 🛠 Tecnologias

- [ReactJS](https://pt-br.reactjs.org/)
- [API](https://www.postman.com/home)
- [Material UI](https://mui.com/pt/getting-started/installation/)
- [Axios](https://axios-http.com/docs/intro)
- [React-toastify](https://fkhadra.github.io/react-toastify/introduction)
- [React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [Metodologias Ágeis](https://trello.com/b/5FldI0TK/kanban-quadro-modelo)

# 📋 Planejamento

- Foi utitilizado o Kanban como metodologia ágil.
- Aplicações com múltiplas rotas utilizando React Router;  Autenticação;  Uso de bibliotecas de UI;  Formulários com Validação;  Hooks useState e useEffect.

- API utilizada para realizar este projeto : [LabeFoods](https://documenter.getpostman.com/view/7549981/SWTEdGtT)
 
### Páginas 4food:
 - Área pessoal de Login e Cadastro.
 - Home com restaurantes e tipos de comidas.
 - Pedido e Confirmação com detalhes do pedido. 
 - Perfil com dados do cliente.
 - Meu Carrinho com informações dos pedidos, quantidade de itens, formas de pagamentos e valores.


# 💻 Funcionalidades

### Fluxo de Login/Cadastro:
- O usuário deve ser capaz de criar uma conta, cadastrando seus dados pessoais e seu endereço.
- Caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário deve receber uma mensagem de erro clara.
- Após finalizar o cadastro, o usuário deve ser redirecionado para a tela de lista de restaurantes.

### Busca e Seleção de Restaurantes:
- O usuário deve ser capaz de visualizar uma lista com todos os restaurantes.
- O usuário deve ser capaz de buscar um restaurante por nome.
- O usuário deve ser capaz de filtrar os restaurantes por categoria.
- O usuário deve ser capaz de clicar no card de um restaurante para visualizar a tela com seu cardápio.

### Cardápio do Restaurante:
- O usuário deve ser capaz de visualizar as informações do restaurante (foto, nome, tipo, tempo de entrega, frete, endereço).
- O usuário deve ser capaz de visualizar os pratos do restaurante, divididos em categorias (exemplo: principais, sobremesas, entradas, etc).
- O usuário deve ser capaz de visualizar as informações de cada prato (foto, nome, descrição, preço).
- O usuário deve ser capaz de adicionar pratos no carrinho e selecionar a quantidade de cada prato.
- O usuário deve ser capaz de remover itens do carrinho.

### Perfil, Editar Perfil e Histórico de Pedidos:
- O usuário deve ser capaz de visualizar e editar seus dados pessoais e endereço
- Ao editar as informações, caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário deve receber uma mensagem de erro clara.
- O usuário deve ser capaz de visualizar o seu histórico de pedidos concluídos (após o tempo de entrega do estabelecimento, o seu pedido aparece nessa lista?).

### Carrinho e Finalizar Compra
- O usuário deve ser capaz de visualizar a lista de itens que adicionou ao carrinho. Caso não tenha adicionado nenhum item, deverá ver uma mensagem de "Carrinho Vazio".
- O usuário deve visualizar, no topo da tela, o endereço de entrega
- O usuário deve visualizar o preço total da compra, que deve ser corretamente calculado de acordo com o preço e quantidade de cada item adicionado.
- O usuário deve ser capaz de selecionar uma forma de pagamento dentre as opções de cartão e dinheiro.
- O usuário deve ser capaz de concluir um pedido e, ao fazê-lo, deve ver um banner de "Pedido em Andamento" com os dados do pedido (esse banner fica ativo durante X minutos, sendo X o tempo de entrega do restaurante).


# 👩‍💻 Desenvolvedor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Guilhermearrud">
        <img src="https://avatars.githubusercontent.com/u/22088576?v=4" width="100px;" alt="Foto de Guilherme"/><br>
        <sub>
          <b>Guilherme Arruda Câmara de Lira</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

