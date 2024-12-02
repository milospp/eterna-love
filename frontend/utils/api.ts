const API_BASE_URL = 'https://api.example.com';

interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
}

export async function fetchFromApi<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
        const response: AxiosResponse<T> = await axios.get(`${API_BASE_URL}${endpoint}`);
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        };
    } catch (error) {
        throw new Error(`Error fetching data from API: ${error}`);
    }
}


export function placeOrderSomething(payload: object) {
    return "test"
}

export function apiPostOrder(payload: object) {
    const runtimeConfig = useRuntimeConfig()
    let url = runtimeConfig.public.apiBase + '/eterna/items2/'
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    // return {}
}
