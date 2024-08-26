## FINANÇAS PESSOAIS

**RESUMO:**

> Sistema de registro de receitas e despesas pessoais para auxiliar no controle dos mesmos utilizando funcionalidades facilitadoras, como por exemplo, relatórios e avisos.

**SUMÁRIO:**

- [**// INÍCIO**](#início)
- [**// MOVIMENTAÇÕES**](#movimentações)
- [**// RELATÓRIOS**](#relatórios)
- [**// CATEGORIAS**](#categorias)
- [**// BANCOS**](#bancos)
- [**// INFORMAÇÕES**](#informações)

---

### INÍCIO:

> formuling...

---

### MOVIMENTAÇÕES:

> Tela de movimentação principal da aplicação, CRUD para transações que servirão de base para criação dos relatórios de controle.

- transaction_ID (_Registro interno para DB_)
- transcation_date (_Data da transação_)
- transaction_type (_Tipo da Movimentação: Receita / Despesa_) 
- transaction_category (_Vinculação a Categoria para classificação_)
- transaction_value (_Valor da transação_)
- transaction_method (_Método utilizado na transação: Débito / Crédito / PIX_)
- transaction_bank (_Vinculação ao Banco referente a transação_)

---

### RELATÓRIOS:

> formuling...

---

### CATEGORIAS:

>Criação de Categorias para serem vinculados as _Movimentações_ para maior controle.

**DADOS:**
- category_ID (_Registro interno para DB_)
- category_name (_Nome dado pelo usuário para a categoria_)
- category_description (_Breve Descrição para a Categoria_)
- category_limit (_Valor Limite de despesa para Categoria_)
- category_balance (_Limite da Categoria utilizado na competência presente_)

---

### BANCOS:

>Criação de Bancos para serem vinculados as _Movimentações_ para maior controle.

**DADOS:**
- bank_ID (_Registro interno para DB_)
- bank_account (_Nome dado pelo usuário para o banco_)
- bank_description (_Breve Descrição_)
- bank_credit (_Limite de Crédito dado pelo cliente para utilizar no Banco_)
- bank_balance (_Calculo no momento de detalhamento para exbir o Saldo atual no Banco_)


## INFORMAÇÕES:

**FERRAMENTAS:**
>Para o desenvolvimento Front-End (Interface do Usuário) utilizo o framework **_Angular 17_**. Já para o Back-End utilizo o framework _formuling..._

**DESING:**
>O Desing Principal será feito com um menu lateral dinâmico com os direcionamento as telas de cadastro e um cabeçalho com informações básicas. Já os de Cadastro terá um título da tela atual, barra de ferramentas com CRUD e um grid com registros e suas principais informações.