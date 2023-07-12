import type { XKCDObject } from "./xkcd";

export async function getXKCD() {
    const url: string = `https://fwd.innopolis.app/api/hw2/?${new URLSearchParams({email: 'd.vasilev@innopolis.university'})}`;
    const response: Response = await fetch(url);
    const id: string = await response.text();

    const request: string = `https://fwd.innopolis.university/api/comic?${new URLSearchParams({id})}`;
    const response2: Response = await fetch(request);

    return await response2.json() as XKCDObject;
}