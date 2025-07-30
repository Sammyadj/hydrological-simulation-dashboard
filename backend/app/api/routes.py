from fastapi import APIRouter
from backend.app.schemas.runoff_schema import RunoffRequest, RunoffResponse
from backend.app.services.runoff_service import calculate_runoff

router = APIRouter(prefix="/api", tags=["Runoff"])

@router.post("/calculate", response_model=RunoffResponse)
def calculate_runoff_endpoint(request: RunoffRequest):
    """
    Endpoint for calculating runoff using the SCS-Curve Number method.
    """
    return calculate_runoff(request)