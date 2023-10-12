import { API_BASE_URL } from "@/config/api-base-url";

export interface SignInResponse {
  user: {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
  };
}

export async function singup(user: any): Promise<boolean> {
    const response = await fetch(`${API_BASE_URL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    }).then(async (response) => {
      const data = await response.json();
      return data;
    });
    return response.status == "Success";
}

export async function singin(user: any): Promise<SignInResponse> {
    const response = await fetch(`${API_BASE_URL}/user/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    }).then(async (response) => {
      const data = await response.json();
      return data;
    });
    return response.data;
}
