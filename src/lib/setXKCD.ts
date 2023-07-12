import type { XKCDObject } from "./xkcd";
import { getXKCD } from "./getXKCD";
import dayjs from "dayjs";

export async function setXKCDData() {
    const jsonData : XKCDObject = await getXKCD();
    const photoElement : HTMLImageElement = <HTMLImageElement>document.getElementById('photo');
    const dateElement : HTMLElement = <HTMLElement>document.getElementById('date');
    photoElement.src = jsonData.img;
    photoElement.alt = jsonData.alt;
    photoElement.title = jsonData.safe_title;
    dateElement.textContent = 'Date of publishing: ' + dayjs(jsonData.year.toString() + '-' + jsonData.month.toString() + '-' + jsonData.day.toString()).format('DD/MM/YYYY');
}