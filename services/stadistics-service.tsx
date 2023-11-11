import { API_BASE_URL } from "@/config/api-base-url";

export async function typeOfPaymentCount(): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/statistics/typeOfPaymentCount`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(async (response) => {
        const data = await response.json();
        return data;
    })
    return response.data.statistics;
}