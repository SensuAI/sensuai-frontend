import { API_BASE_URL } from "@/config/api-base-url";

export async function getAllManagers(): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/user/getAllManagers`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(async (response) => {
        const data = await response.json();
        return data;
    });
    return response.data.managers;
}

export async function getNameUser(id: string): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/user/${id}`, {
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
