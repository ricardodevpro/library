🚀 Guia de Execução Local: Sistema CRUD de Produtos
Olá! Este projeto é um pequeno sistema de gerenciamento de produtos (CRUD: Criar, Ler, Atualizar, Deletar), feito para demonstrar a comunicação entre um Back-End (API em Python) e um Front-End (HTML/JS).

Aqui está o passo a passo super rápido para colocar tudo funcionando na sua máquina!

1. ⚙️ Pré-Requisitos
   Você só precisa ter o Python 3 instalado no seu computador.

2. 🐍 Iniciando o Back-End (A API)
   A API é a parte "inteligente" do sistema, que salva e gerencia os dados.

Passo A: Instalar as Bibliotecas
Abra seu terminal na pasta principal do projeto.

Entre na pasta do Back-End:

Bash

cd backend
Instale o FastAPI e o Uvicorn (o servidor):

Bash

pip install -r requirements.txt
Passo B: Rodar o Servidor
Ainda dentro da pasta backend/, inicie a API:

Bash

uvicorn main:app --reload
(Se o comando uvicorn falhar, use: python -m uvicorn main:app --reload)

Você verá uma mensagem de que a API está rodando no endereço: 📌 http://127.0.0.1:8000

👉 Pronto! Deixe essa janela do terminal aberta. A API agora está esperando as requisições.

3. 🌐 Iniciando o Front-End (A Tela)
   O Front-End é a interface visual onde você interage.

Como ele é feito apenas com HTML/CSS/JS, não precisa de comandos de terminal!

Vá até a pasta frontend/.

Localize o arquivo index.html.

Simplesmente clique duas vezes nele.

👉 Pronto! O sistema será aberto no seu navegador.

4. 🎉 Hora de Usar!
   Com a API rodando no terminal e o index.html aberto no navegador, você pode:

Preencher os campos (Nome, Preço e Descrição).

Clicar em "Adicionar".

O produto aparecerá na lista abaixo, confirmando que a comunicação entre Front-End e Back-End está funcionando perfeitamente!

(Lembrete: Os dados são salvos apenas na memória RAM. Se você fechar o terminal, a lista será apagada.)
