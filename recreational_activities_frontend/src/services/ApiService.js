class ApiService
{
    constructor(baseURL)
    {
        this.baseURL = baseURL;
    }
    
    loginUser = (userName) =>
    {
        const url = new URL(this.baseURL + "/users");

        url.search = new URLSearchParams(userName);

        fetch(url)
            .then(res => res.json())
            .then(data => new User(data));
    }

    signupUser = (userName) =>
    {
        const configObj =
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userName)
        };

        fetch(`${this.baseURL}/users`, configObj)
            .then(res => res.json())
            .then(data => new User(data))
    }

    searchActivities = () =>
    {
        const formData = new FormData(document.querySelector(".search-form"));
        const url = new URL(this.baseURL + "/search");

        url.search = new URLSearchParams(formData);

        fetch(url)
            .then(res => res.json())
            .then(data => ActivityCard.getMatch(data));
    };

    saveFavoriteArea = (userID, data) =>
    {
        const url = new URL(this.baseURL + `/users/${userID}/recreational_areas`);
        const configObj =
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        };

        fetch(url, configObj)
            .then(res => res.json())
            .then(data => new FavoritesCard(data));
    }

    getFavorites = (user) =>
    {
        const url = new URL(this.baseURL + `/users/${user.id}/recreational_areas`);
        const userData =
        {
            username: user.username
        }

        url.search = new URLSearchParams(userData);

        fetch(url)
            .then(res => res.json())
            .then(data => new FavoritesCard(data));
    }
}