import axios from "axios";

const LOCAL_STORAGE_KEY = "plumier_todolist";
const { localStorage } = window;

export function storeToken(token: string): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, token);
    setDefaultHeaders();
}

export function forgetToken(): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, "");
}

export function getToken(): string {
    return localStorage.getItem(LOCAL_STORAGE_KEY) || "";
}

export function isAuthenticated(): boolean {
    return getToken().length > 0;
}

export function setDefaultHeaders(): void {
    if (!isAuthenticated()) {
        return;
    }

    let token = getToken();

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
