from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import Book
from database import db

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# LISTAR TODOS OS LIVROS
@app.get("/books")
def list_books():
    return db


# CADASTRAR LIVRO
@app.post("/books")
def add_book(book: Book):
    book.id = len(db) + 1
    db.append(book)
    return book


# CONSULTAR LIVRO POR ID
@app.get("/books/{bid}")
def get_book(bid: int):
    return next((b for b in db if b.id == bid), {"error": "Livro não encontrado"})


# ATUALIZAR LIVRO
@app.put("/books/{bid}")
def update_book(bid: int, book: Book):
    for i, b in enumerate(db):
        if b.id == bid:
            book.id = bid
            db[i] = book
            return {"message": "Livro atualizado"}
    return {"error": "Livro não encontrado"}


# EXCLUIR LIVRO
@app.delete("/books/{bid}")
def delete_book(bid: int):
    for b in db:
        if b.id == bid:
            db.remove(b)
            return {"message": "Livro removido com sucesso"}
    return {"error": "Livro não encontrado"}
