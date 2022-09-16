import { insertMarkup } from "./helpers.js";

// Element Selectors
const subFormEl = document.querySelector(".sub-form");
const nameInputEl = document.querySelector(".name-label input");
const emailInputEl = document.querySelector(".email-label input");


function handleSubmit(e) {
    e.preventDefault();
    const [name, email] = [nameInputEl.value, emailInputEl.value]

    console.log(name, email)
  }

subFormEl.addEventListener("submit", handleSubmit)


const init = async () => {
    await insertMarkup("men's clothing");
    await insertMarkup("women's clothing");
    await insertMarkup("jewelery");
}

init()


