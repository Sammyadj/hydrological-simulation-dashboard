from pydantic import BaseModel, Field

class RunoffRequest(BaseModel):
    rainfall: float = Field(..., gt=0, description="Rainfall depth in mm")
    curve_number: int = Field(..., ge=30, le=100, description="SCS Curve Number (30-100)")
    area: float = Field(..., gt=0, description="Catchment area in square meters")

class RunoffResponse(BaseModel):
    runoff_depth: float
    runoff_volume: float