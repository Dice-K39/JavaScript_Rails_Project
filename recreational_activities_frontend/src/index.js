// const api = new ApiService("http://localhost:3000");
let search = false;

document.addEventListener("DOMContentLoaded", () =>
{
    new SearchForm();

    const addBtn = document.querySelector("#search-form-btn");
    const searchFormContainer = document.getElementById("column-section");

    addBtn.addEventListener("click", () =>
    {
        search = !search;
debugger
        if (search)
        {
            searchFormContainer.style.display = "block";
            debugger
        }
        else
        {
            searchFormContainer.style.display = "none";
            debugger
        }
    });
});