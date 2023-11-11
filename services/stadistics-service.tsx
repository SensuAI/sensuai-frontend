import { API_BASE_URL } from "@/config/api-base-url";
import exp from "constants";

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

export async function visitsPerHour(): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/statistics/visitsPerHour`, {
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

export async function visitsPerMonth(): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/statistics/visitsPerMonth`, {
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