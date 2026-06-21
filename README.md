# Gamestash

## Sobre o App

O **Gamestash** é um aplicativo mobile desenvolvido com React Native que tem como objetivo permitir que usuários organizem sua biblioteca pessoal de jogos.

Funcionando como um gerenciador de jogos, onde o usuário pode cadastrar, avaliar e categorizar jogos, além de acompanhar seu progresso (como jogos já finalizados, em andamento ou no backlog).

### Funcionalidades 

- Cadastro de usuários
- Login de usuários
- Adição de jogos à biblioteca
- Listagem de jogos
- Organização por categorias (ex: ação, corrida, RPG)
- Marcação de status (jogando, zerado, backlog)
- Avaliação de jogos (nota de 1 a 5)

---

### Checklist de Implementação

#### - Funcionalidades básicas
- [x] Criação de 3 telas principais
- [x] Navegação entre telas
- [x] Criação de componentes reutilizáveis
- [x] Estilização das telas
- [x] Uso de dados mockados
- [x] Cadastro de usuário
- [x] Login de usuário
- [x] Adicionar jogos à biblioteca
- [ ] Organização por categorias
- [ ] Marcação de status
- [x] Sistema de avaliação de jogos
- [ ] Filtro e busca
- [x] Persistência de dados
- [ ] Integração com API externa

---

## Protótipos de Tela

Os protótipos das telas foram desenvolvidos no Figma e podem ser acessados pelo link abaixo:

🔗 **Figma:**  
https://www.figma.com/design/lFeWR7oePvSFbeY39op4Md/GameStash?node-id=0-1&t=SueSIp8qtNoZSvSP-0

---

## Modelagem do Banco de Dados

A modelagem do banco de dados foi planejada considerando a necessidade de armazenar informações de usuários, jogos e avaliações.

O app utilizará:

**SQLite**

### Entidades principais

- **Users**
  - id
  - username
  - email
  - password

- **Games**
  - id
  - title
  - status
  - user_id
  - category_id

- **Categories**
  - id
  - name

- **Reviews**
  - id
  - rating
  - comment
  - game_id
  - user_id

###  Diagrama ER

<img width="1356" height="454" alt="Untitled" src="https://github.com/user-attachments/assets/d96fbe1a-d278-4ffa-ae65-4a8927606695" />

---

## Planejamento de Sprints

### Sprint 1 — Setup do Projeto (01/04 - 07/04)
~~- Configuração do Expo Router~~

~~- Estrutura de pastas~~

~~- Criação das telas iniciais~~

### Sprint 2 — UI e Componentes (08/04 - 14/04)
~~- Criação de componentes reutilizáveis~~
~~- Estilização de telas~~
~~- Inserção de dados mockados~~

### Sprint 3 — Funcionalidades básicas (15/04 - 21/04)
~~- Implementação de categorias e status~~
~~- Estado global (Zustand)~~
~~- Simulação de interações~~

### Sprint 4 — Finalização parcial (22/04 - 30/04)
~~- Revisão geral~~
~~- Ajustes de UI/UX~~
~~- Gravação do vídeo~~
~~- Atualização do README~~

---

### Sprint 5 — Autenticação (01/05 - 10/05)
- Cadastro de usuário
- Login
- Validações de formulário

### Sprint 6 — Avaliação de jogos (11/05 - 20/05)
- Sistema de rating
- Exibição de avaliações
 
### Sprint 7 — Filtros e busca (21/05 - 30/05)
- Filtros por categoria e status
- Busca de jogos

### Sprint 8 — Integração externa (31/05 - 10/06)
- Integração com API de jogos
- Ajustes de dados

### Sprint 9 — Finalização (11/06 - 20/06)
- Testes finais
- Build APK
- Gravação do vídeo
- Atualização completa do README


# Manual de Execução 

###  Clonar o repositório

Abra o terminal e execute:

```bash
git clone https://github.com/simaonarf/GameStash.git
```

---

###  Acessar o diretório do projeto

```bash
cd GameStash
```

---

###  Instalar as dependências

Use **npm**:

```bash
npm install
```

---

###  Iniciar o servidor de desenvolvimento

Execute o comando:

```bash
npx expo start
```

ou:

```bash
expo start
```
