import dayjs from "dayjs";

interface XKCDObject {
    img: string;
    alt: string;
    safe_title: string;
    year: number;
    month: number;
    day: number;
}

async function getXKCD() {
    const url: string = `https://fwd.innopolis.app/api/hw2/?${new URLSearchParams({email: 'd.vasilev@innopolis.university'})}`;
    const response: Response = await fetch(url);
    const id: string = await response.text();

    const request: string = `https://fwd.innopolis.university/api/comic?${new URLSearchParams({id})}`;
    const response2: Response = await fetch(request);

    return await response2.json() as XKCDObject;
}

async function setXKCDData() {
    const jsonData : XKCDObject = await getXKCD();
    const photoElement : HTMLImageElement = <HTMLImageElement>document.getElementById('photo');
    const dateElement : HTMLElement = <HTMLElement>document.getElementById('date');
    photoElement.src = jsonData.img;
    photoElement.alt = jsonData.alt;
    photoElement.title = jsonData.safe_title;
    dateElement.textContent = 'Date of publishing: ' + dayjs(jsonData.year.toString() + '-' + jsonData.month.toString() + '-' + jsonData.day.toString()).format('DD/MM/YYYY');
}

window.onload = () => {
    setXKCDData();
    const btn : HTMLButtonElement = <HTMLButtonElement>document.getElementById("newcomicbtn");
    btn.addEventListener("click", (e: Event) => setXKCDData());
};