from fastapi import FastAPI
from backend.app.api.routes import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Hydrological Simulation Dashboard",
    description="API backend for simulating surface runoff using the SCS-Curve Number method.",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def root():
    return {"message": "Hydrological Simulation Dashboard API is running!"}