class ApiService
{
    static container = document.querySelector(".display-search");
    static errorMessageContainer = document.querySelector(".error-message");

    constructor(baseURL)
    {
        this.baseURL = baseURL;
    }

    printError = (err) =>
    {
        this.constructor.errorMessageContainer.innerHTML = `${err}`;
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
                    this.constructor.errorMessageContainer.innerHTML = "";
                    return res.json();
                }
                else
                {
                    throw new Error(`${res.status} ${res.statusText}: Username does not exist.`);
                }
            })
            .then(data => new User(data))
            .catch(err => this.printError(err));
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
                    this.constructor.errorMessageContainer.innerHTML = "";
                    return res.json();
                }
                else
                {
                    throw new Error(`${res.status} ${res.statusText}: Username not available.`);
                }
            })
            .then(data => new User(data))
            .catch(err => this.printError(err));
    }

    searchAreas = () =>
    {
        const formData = new FormData(document.querySelector(".search-form"));
        const url = new URL(this.baseURL + "/search");

        url.search = new URLSearchParams(formData);

        fetch(url)
            .then(res => res.json())
            .then(data => RecreationalAreaCard.getMatch(data));
    };

    saveFavoriteArea = (areaData) =>
    {
        this.constructor.errorMessageContainer.innerHTML = "";

        const url = new URL(this.baseURL + `/users/${areaData.user_id}/recreational_areas`);
        const configObj =
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(areaData)
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
                    throw new Error(`${res.status} ${res.statusText}: Recreational area was not saved to favorites.`);
                }
            })
            .then(data => new FavoritesCard(data))
            .catch(err => this.printError(err));
    }

    getFavorites = (user) =>
    {
        const url = new URL(this.baseURL + `/users/${user.id}/recreational_areas`);

        fetch(url)
            .then(res => res.json())
            .then(data => new FavoritesCard(data));
    }

    
    removeFavorites = (userID, areaID) =>
    {
        const url = new URL(this.baseURL + `/users/${userID}/recreational_areas/${areaID}`);
        const configObj = 
        {
            method: "DELETE",
            headers:
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        
        fetch(url, configObj)
            .then(resp => resp.json());
    }
}