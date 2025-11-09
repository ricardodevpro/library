from pydantic import BaseModel

class Book(BaseModel):
    id: int = 0
    title: str
    author: str
    year: int
    category: str
