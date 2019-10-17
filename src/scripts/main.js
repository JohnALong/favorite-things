console.log("it works");
const myInfo = document.querySelector("#domEntry");
console.log("test", myInfo);

document.querySelector("#displayEntry").addEventListener("click", event => {
    // console.log("i clicked a button");
    // takes info from fav thing box and holds it
    const iWant = document.querySelector("#favoriteThing").value;
    // takes info from address box and holds it
    const address = document.querySelector("#address").value;
// sends info to dom using innerHTML
    myInfo.innerHTML = `
    <section>
        <h1>I can purchase ${iWant} at ${address}</h1>
    </section>
    `
    console.log("mytest", myInfo.innerHTML);
})