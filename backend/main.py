from fastapi import FastAPI, Depends, HTTPException
from starlette.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from .user import models as user_models
from .books import models as book_models
from .books import router as book_routers
from .database import engine, get_db

user_models.Base.metadata.create_all(bind=engine)
book_models.Base.metadata.create_all(bind=engine)
app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the FastAPI backend!"}

@app.get("/api/books/{category_name}", response_model=list[book_models.Book])
async def get_books_by_category(category_name: str, db: Session = Depends(get_db)):
    category = db.query(book_models.Category).filter_by(name=category_name).first()
    if not category:
        raise HTTPException(status_code=404, detail=f"Category '{category_name}' not found")

    books = db.query(book_models.Book).filter_by(category_id=category.id).all()

    result = []
    for book in books:
        book_dict = {
            "id": book.id,
            "title": book.title,
            "author": book.author,
            "description": book.description,
            "category_id": book.category_id,
            "category_name": category.name
        }
        result.append(book_dict)

    return result

