function getXKCD() {
    const paramsString = new URLSearchParams({ email: 'd.vasilev@innopolis.university' });
    const url = `https://fwd.innopolis.app/api/hw2/?${paramsString}`;


    fetch(url)
   .then(response => response.text())
   .then((response) => {
        const paramString = new URLSearchParams({ id: response});
        fetch(`https://fwd.innopolis.university/api/comic?${paramString}`)
        .then(response => response.json())
        .then((response) => {
            document.getElementById("photo").src=response.img;
            document.getElementById("photo").alt=response.alt;
            document.getElementById("photo").title=response.safe_title;
            const event = new Date(Date.UTC(response.year, response.month - 1, response.day));
            document.getElementById("date").textContent="Date of publishing: " + event.toLocaleDateString();
        })
   });
}


window.onload = getXKCD;