import { API_BASE_URL } from "@/config/api-base-url";

export async function createBranch(branch: any): Promise<boolean> {
    const response = await fetch(`${API_BASE_URL}/branch/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(branch),
    }).then(async (response) => {
        const data = await response.json();
        return data;
    });
    return response.message == "Branch created";
}

export async function getAllBranches(): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/branch/getAll`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(async (response) => {
        const data = await response.json();
        return data;
    });
    return response.data.branches;
}