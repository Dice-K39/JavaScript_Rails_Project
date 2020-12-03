class ApiService
{
    constructor(baseURL)
    {
        this.baseURL = baseURL;
    }

    signupUser = () =>
    {
        debugger
    }

    loginUser = () =>
    {
        debugger
    }

    searchActivities = () =>
    {
        const formData = new FormData(document.querySelector(".search-form"))
        const url = new URL(this.baseURL + "/api/v1/search")

        url.search = new URLSearchParams(formData)

        fetch(url)
            .then(res => res.json())
            .then(data => ActivityCard.getMatch(data));
    };
}