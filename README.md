# 🚀 Guia de Execução Local: Sistema CRUD de Produtos

Olá! Este projeto é um pequeno sistema de gerenciamento de produtos (**CRUD**: Criar, Ler, Atualizar, Deletar), feito para demonstrar a comunicação entre um **Back-End (API em Python)** e um **Front-End (HTML/JS)**.

Aqui está o passo a passo super rápido para colocar tudo funcionando na sua máquina!

---

## ⚙️ Pré-Requisitos

Você só precisa ter o **Python 3** instalado no seu computador.

---

## 🐍 Iniciando o Back-End (A API)

A API é a parte "inteligente" do sistema, que salva e gerencia os dados.

### Passo A: Instalar as Bibliotecas

1.  Abra seu terminal na pasta principal do projeto.
2.  Entre na pasta do Back-End:
    ```bash
    cd backend
    ```
3.  Instale o FastAPI e o Uvicorn (o servidor) usando o arquivo de requisitos:
    ```bash
    pip install -r requirements.txt
    ```

### Passo B: Rodar o Servidor

1.  Ainda dentro da pasta `backend/`, inicie a API:
    ```bash
    uvicorn main:app --reload
    ```
    *(Se o comando `uvicorn` falhar, use: `python -m uvicorn main:app --reload`)*

2.  Você verá uma mensagem de que a API está rodando no endereço:
    📌 **http://127.0.0.1:8000**

👉 **Pronto!** Deixe essa janela do terminal aberta. A API agora está esperando as requisições.

---

## 🌐 Iniciando o Front-End (A Tela)

O Front-End é a interface visual onde você interage. Como ele é feito apenas com HTML/CSS/JS, **não precisa de comandos de terminal!**

1.  Vá até a pasta `frontend/`.
2.  Localize o arquivo **`index.html`**.
3.  Simplesmente **clique duas vezes** nele.

👉 **Pronto!** O sistema será aberto no seu navegador.

---

## 🎉 Hora de Usar!

Com a **API rodando no terminal** e o **`index.html` aberto no navegador**, você pode:

1.  Preencher os campos (Nome, Preço e Descrição).
2.  Clicar em **"Adicionar"**.
3.  O produto aparecerá na lista abaixo, confirmando que a comunicação entre Front-End e Back-End está funcionando perfeitamente!

**(Lembrete:** Os dados são salvos apenas na **memória RAM**. Se você fechar o terminal, a lista será apagada.)
