class ApiService
{
    constructor(baseURL)
    {
        this.baseURL = baseURL;
    }

    searchActivities = () =>
    {
        const formData = new FormData(document.querySelector(".search-form"))
        debugger
        fetch(`${this.baseURL}/search`,
        {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => ActivityCard.getMatch(data));
    };
}