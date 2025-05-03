from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

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
@app.get("/test")
async def test_api():
    print("Test API endpoint hit")
    return {"message": "This is a test API endpoint."}
