import {BASE_URL} from './appHTTP';

export default async function (path: string): Promise<void | []> {
    const fullUrl: string = `${BASE_URL}${path}`;
    try {
        const response: Response = await fetch(fullUrl);
        return response.ok && response.status === 200 ? await response.json() : new Error(response.statusText);
    } catch (e: any) {
        console.error(e.message);
    }
}
