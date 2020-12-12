class ApiService
{
    static container = document.querySelector(".display-search");

    constructor(baseURL)
    {
        this.baseURL = baseURL;
    }
    
    loginUser = (userName) =>
    {
        const url = new URL(this.baseURL + "/users");

        url.search = new URLSearchParams(userName);

        fetch(url)
            .then(res => 
            {
                if (res.ok)
                {
                    return res.json();
                }
                else
                {
                    throw new Error("Username does not exist.");
                }
            })
            .then(data => new User(data))
            .catch(err => this.constructor.printError(err));
    }

    signupUser = (userName) =>
    {
        this.constructor.container.innerHTML = "";

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
            .then(res => 
            {
                if (res.ok)
                {
                    return res.json();
                }
                else
                {
                    throw new Error("Username not available.");
                }
            })
            .then(data => new User(data))
            .catch(err => this.constructor.printError(err));
    }

    searchActivities = () =>
    {
        const formData = new FormData(document.querySelector(".search-form"));
        const url = new URL(this.baseURL + "/search");

        url.search = new URLSearchParams(formData);

        fetch(url)
            .then(res => res.json())
            .then(data => RecreationalAreaCard.getMatch(data));
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
            .then(res => 
            {
                if (res.ok)
                {
                    return res.json();
                }
                else
                {
                    throw new Error("Recreational area was not saved.");
                }
            })
            .then(data => new FavoritesCard(data))
            .catch(err => this.constructor.printError(err));
    }

    getFavorites = (user) =>
    {
        const url = new URL(this.baseURL + `/users/${user.id}/recreational_areas`);
        const userData =
        {
            user_id: user.id
        }

        url.search = new URLSearchParams(userData);

        fetch(url)
            .then(res => res.json())
            .then(data => new FavoritesCard(data));
    }

    removeFavorites = (area) =>
    {
        const userID = document.querySelector(".user-id");
        const url = new URL(this.baseURL + `/users/${userID}/recreational_areas`)
    }

    static printError = (err) =>
    {
        this.container.innerHTML = `${err}`
    }
}