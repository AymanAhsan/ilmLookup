from pydantic import BaseModel

class BookResponse(BaseModel):
    id: int
    title: str
    author: str
    description: str
    category_id: int
    category_name: str

    class Config:
        from_attributes = True