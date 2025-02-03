
# ✨ Diário de Trabalho

Um aplicativo web responsivo para registrar e gerenciar seus dias trabalhados de forma simples e organizada.

## 📜 Descrição

**"Diário de Trabalho"** é uma página web que permite aos usuários:

- Registrar dias trabalhados com data, horário de entrada e saída.
- Salvar informações da empresa, como nome e salário.
- Editar ou excluir registros conforme necessário.
- Armazenar os registros de forma persistente no navegador usando **localStorage**.
- Gerar relatórios mensais.
- Baixar o relatório mensal em PDF.


### Tela inicial:

A tela inicial exibe um cabeçalho com os campos para nome da empresa e salário, além de um formulário para adicionar os dias trabalhados. Abaixo, uma tabela organizada lista os registros adicionados.

- Tela inicial

![tela inicial](https://github.com/user-attachments/assets/18b6131e-a1da-4db1-99f2-8ce55e1fc0ee)

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura da página.

- **CSS3**:  Estilização responsiva com design moderno.

- **JavaScript**: Funcionalidades interativas para manipulação dos registros.

- **LocalStorage**:  Persistência dos dados para que os registros permaneçam salvos mesmo após o fechamento do navegador.

- **Bootstrap**: Para gerar o layout responsivo e o relatório mensal.

- **html2pdf.js**: Para gerar e permitir o download do relatório mensal no formato **PDF**.

## 📂 Estrutura de Pastas

```bash

📂 Diario_Trabalho
├── 📁 image           # Imagens (como fundo)
├── index.html        # Página principal
├── style.css         # Estilos
├── script.js         # Funcionalidades

```

## 🌟 Funcionalidades

- **Adicionar Registro**: Permite adicionar novos registros de dias trabalhados com data, horário de entrada e horário de saída.
- **Editar e Remover**: Os registros podem ser editados ou removidos facilmente.
- **Salvar Empresa e Salário**: O nome da empresa e o salário são salvos no localStorage.
- **Persistência de Dados**: Todos os registros são armazenados localmente no navegador.
- **Gerar Relatório Mensal**: Relatório mensal gerado com Bootstrap.
- **Baixar Relatório em PDF**: Relatório mensal pode ser baixado como um arquivo PDF através do html2pdf.js.

## 🛠️ Instalação

**Clone este repositório**:

```bash
git clone https://github.com/Carla-coder/Diario_Trabalho.git
```

## 🚀 Como Usar

- Abra o arquivo index.html no navegador. Recomendo utilizar o VSCode para visualizar o projeto localmente.
- Insira o nome da empresa e o salário e clique em "Salvar Empresa e Salário".
- No formulário, adicione a data, horário de entrada e horário de saída.
- Clique no botão "Adicionar Registro" para salvar os dados.
- Utilize os botões de edição e exclusão para modificar ou remover um registro.
- Para gerar o relatório mensal, clique no botão correspondente e visualize as informações organizadas.
- Para baixar o relatório em PDF, clique no botão "Baixar PDF" dentro do modal.
- Os dados são automaticamente salvos no localStorage, garantindo que fiquem acessíveis mesmo após fechar o navegador.

## 🙏 Agradecimentos

Agradeço a todos que utilizarem este projeto e espero que seja útil no gerenciamento do seu registro de trabalho.

## 👩‍💻 Autor

**Carla Coder – Desenvolvedora Full Stack**, apaixonada por criar experiências úteis e interativas. Conecte-se comigo no https://www.github.com/Carla-coder e https://www.linkedin.com/in/carlamozena/
