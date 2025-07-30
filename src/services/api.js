const API_URL = "http://localhost:8000/api/calculate";

export async function calculateRunoff(payload) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    return response.json();
}