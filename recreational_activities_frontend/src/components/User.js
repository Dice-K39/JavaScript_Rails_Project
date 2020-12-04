class User
{
    static container = document.querySelector(".navbar");
    
    constructor(user = null)
    {
        if (user)
        {
            this.user = user;
            this.displayName(user);
            this.attachBtnEventListener();
            new SearchForm();
        }
        else
        {
            this.renderButtons();
            this.attachBtnEventListener();
        }
    }
    
    displayName(user)
    {

        this.constructor.container.innerHTML = "";
        this.constructor.container.innerHTML = this.constructor.renderLoggedIn(user);
    }

    renderButtons()
    {
        this.constructor.container.innerHTML = this.renderInnerHTML();
    }

    attachBtnEventListener()
    {
        let btns;

        if (this.user)
        {
            btns = document.querySelector(".logged-in")
        }
        else
        {
            btns = document.querySelector(".signup-login-button");
        }
        
        btns.addEventListener("click", () => this.handleBtnsOnClick());
    }
    
    handleBtnsOnClick()
    {
        this.constructor.container.innerHTML = "";

        if (event.target.id === "logout")
        {
            const searchForm = document.querySelector(".search-section");
            
            searchForm.innerHTML = "";

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

        form.className = "signup-login-form";
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
        }

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
            event.preventDefault();

            const navbar = document.querySelector(".navbar");

            navbar.innerHTML = "";

            new User();
        }
    }

    renderInnerHTML = () =>
    {
        return `
            <div class="signup-login-button columns pr-5">
                <button class="button column is-primary" id="login">Login</button>"
                <button class="button column is-warning" id="signup">Sign Up</button>
            </div>
        `;
    };

    renderSignupLoginFormInnerHTML = () =>
    {
        return `
            <div class="signup-login columns pr-5">
                <label class="label column">Username: </label>
                <input class="input column" id="username" placeholder="Enter Username">
                ${event.target.id === "signup" ? 
                    `<button class="button is-primary column" id="signup">Signup</button>` : `<button class="button is-primary column" id="login">Login</button>`}
                <button class="button is-danger column" id="back">Back</button>
            </div>
        `;
    }

    static renderLoggedIn = (data) =>
    {
        return `
            <div class="logged-in columns pr-5">
                <label class="label column">Welcome: ${data.username}</label>
                <button class="button is-danger column" id="logout">Logout</button>
            </div>
        `;
    }
}