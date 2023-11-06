import { API_BASE_URL } from "@/config/api-base-url";

export async function getAllPlates(): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/plate/getAll`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(async (response) => {
        const data = await response.json();
        return data;
    });
    return response;
}

export async function getPlateStadistics(plate: any): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/transaction/${plate}/statistics`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(async (response) => {
        const data = await response.json();
        return data;
    });
    return response;
}