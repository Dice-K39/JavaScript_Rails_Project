class User
{
    static container = document.querySelector(".navbar");
    
    constructor(user = null)
    {
        if (user)
        {
            this.user = user;
            this.displayName(user);
            this.selectBtnEventListener();
            this.loadFavorites();
            new SearchForm();
        }
        else
        {
            this.renderButtons();
            this.selectBtnEventListener();
        }
    }
    
    loadFavorites()
    {
        const favoriteContainer = document.querySelector(".favorited-section");

        favoriteContainer.innerHTML = "Favorites:";

        api.getFavorites(this.user);
    }
    
    displayName(user)
    {
        this.constructor.container.innerHTML = "";
        this.constructor.container.innerHTML = this.renderLoggedIn(user);
    }
    
    renderButtons()
    {
        this.constructor.container.innerHTML = this.renderInnerHTML();
    }
    
    selectBtnEventListener()
    {
        if (this.user)
        {
            const btn = document.getElementById("logout");
            
            this.attachEventListener(btn);
        }
        else
        {
            document.querySelectorAll(".signup-login-button").forEach(btn => this.attachEventListener(btn));
        }
    }
    
    attachEventListener(btn)
    {
        btn.addEventListener("click", () => this.handleBtnsOnClick());
    }
    
    handleBtnsOnClick()
    {
        this.constructor.container.innerHTML = "";
        
        if (event.target.id === "logout")
        {
            const searchForm = document.querySelector(".search-section");
            const displaySearch = document.querySelector(".display-search");
            const favoritedSection = document.querySelector(".favorited-section");
            const errorMessageContainer = document.querySelector(".error-message");
            
            searchForm.innerHTML = "";
            displaySearch.innerHTML = "";
            favoritedSection.innerHTML = "";
            errorMessageContainer.innerHTML = "";
            
            new User();
        }
        else
        {
            this.renderForm();
        }
    }
    
    renderForm()
    {
        const form = document.createElement("form");
        
        form.className = "signup-login-form navbar-end";
        form.innerHTML = this.renderSignupLoginFormInnerHTML();
        this.form = form;
        this.constructor.container.append(form);
        this.attachSignupLoginEventListener();
    }
    
    attachSignupLoginEventListener()
    {
        this.form.addEventListener("click", () => this.handleSignupLoginOnClick());
    }
    
    handleSignupLoginOnClick()
    {
        const userName = event.currentTarget.username.value;
        const data = 
        {
            username: userName
        };
        
        event.preventDefault();
        
        if (event.target.id === "login")
        {
            api.loginUser(data);
        }
        
        if (event.target.id === "signup")
        {
            api.signupUser(data);
        }
        
        if (event.target.id === "back")
        {
            const navbar = document.querySelector(".navbar");
            
            navbar.innerHTML = "";
            
            new User();
        }
    }
    
    renderInnerHTML = () =>
    {
        return `
            <div class="signup-login-button is-flex navbar-end">
                <button class="button is-primary" id="login">Login</button>
                <button class="button is-warning" id="signup">Sign Up</button>
            </div>
        `;
    }
    
    renderLoggedIn = (data) =>
    {
        // Not safe to send around user_id from database. Future iteration of app will use secure method.
        return `
            <div class="filter-bar content is-flex navbar-start" style="margin-bottom: 0px">
                <label class="filter-label">Filter by Letter:</label>
                <input class="input" id="area-filter-by-first-letter" maxlength="1" type="text">
                <button class="button is-primary" onclick="RecreationalAreaCard.superDuperFilter()">Filter</button>
            </div>

            <div class="logged-in is-flex navbar-end">
                <label class="name-label">Welcome: </label>
                <div class="name">${data.username}</div>
                <input class="user-id" type="hidden" value="${data.id}">
                <button class="button is-danger" id="logout">Logout</button>
            </div>
        `;
    }
    
    renderSignupLoginFormInnerHTML = () =>
    {
        return `
            <div class="signup-login is-flex">
                <label class="label">Username: </label>
                <input class="input" id="username" placeholder="Enter Username">
                ${event.target.id === "signup" ? 
                    `<button class="button is-primary" id="signup">Signup</button>` : `<button class="button is-primary" id="login">Login</button>`}
                <button class="button is-danger" id="back">Back</button>
            </div>
        `;
    }
}