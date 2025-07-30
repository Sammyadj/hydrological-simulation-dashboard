from backend.app.schemas.runoff_schema import RunoffRequest, RunoffResponse

def calculate_runoff(request: RunoffRequest) -> RunoffResponse:
    """
    Apply the SCS-Curve Number method to compute runoff depth and volume.
    """
    P = request.rainfall
    CN = request.curve_number
    A = request.area  # m²

    # Calculate S (Potential maximum retention)
    S = (25400 / CN) - 254  # in mm

    # Initial abstraction
    Ia = 0.2 * S

    if P <= Ia:
        Q = 0.0
    else:
        Q = ((P - Ia) ** 2) / (P - Ia + S)  # Runoff depth in mm

    # Convert runoff depth to volume: 1 mm over 1 m² = 1 liter = 0.001 m³
    runoff_volume = Q / 1000 * A  # m³

    return RunoffResponse(runoff_depth=round(Q, 2), runoff_volume=round(runoff_volume, 3))