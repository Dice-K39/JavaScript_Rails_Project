class ApiService
{
    constructor(baseURL)
    {
        this.baseURL = baseURL;
    }
    
    loginUser = () =>
    {
        debugger
    }

    signupUser = (passedData) =>
    {

        const configObj =
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(passedData)
        };

        fetch(`${this.baseURL}/users`, configObj)
            .then(res => res.json())
            .then(data => new User(data))
    }

    searchActivities = () =>
    {
        const formData = new FormData(document.querySelector(".search-form"));
        const url = new URL(this.baseURL + "/api/v1/search");

        url.search = new URLSearchParams(formData);

        fetch(url)
            .then(res => res.json())
            .then(data => ActivityCard.getMatch(data));
    };
}