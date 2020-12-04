class User
{
    static container = document.querySelector(".navbar");
    
    constructor()
    {
        this.renderButtons();
        this.attachBtnEventListener();
    }
    
    renderButtons()
    {
        this.constructor.container.innerHTML = this.renderInnerHTML();
    }

    attachBtnEventListener()
    {
        const btns = document.querySelector(".signup-login-button ");
        
        btns.addEventListener("click", () => this.handleBtnsOnClick());
    }
    
    handleBtnsOnClick()
    {
        if (event.target.id === 'login')
        {
            this.constructor.container.innerHTML = "";
            this.renderLoginForm();
        }
        
        if (event.target.id === 'signup')
        {
            this.constructor.container.innerHTML = "";
            this.renderSignupForm();
        }
    }
    
    renderLoginForm()
    {
        const form = document.createElement("form");

        form.className = "login-form";
        form.innerHTML = this.renderLoginFormInnerHTML();
        this.form = form;
        this.constructor.container.append(form);
        this.attachSignupLoginEventListener();
    }
        
    renderSignupForm()
    {
        const form = document.createElement("form");

        form.className = "signup-form";
        form.innerHTML = this.renderSignupFormInnerHTML();
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
        if (event.target.id === "login")
        {
            event.preventDefault();
            
            api.loginUser();
        }

        if (event.target.id === "signup")
        {
            event.preventDefault()
    
            const username = event.currentTarget.username.value;
            const data =
            {
                username: username
            }

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

    renderLoginFormInnerHTML = () => 
    {
        return `
            <div class="login-form columns pr-5">
                <label class="label column">Username: </label>
                <input class="input column" id="username" placeholder="Enter Username">
                <button class="button is-primary column" id="login">Login</button>
                <button class="button is-danger column" id="back">Back</button>
            </div>
        `
    }

    renderSignupFormInnerHTML = () => 
    {
        return `
            <div class="signup columns pr-5">
                <label class="label column">Username: </label>
                <input class="input column" id="username" placeholder="Enter Username">
                <button class="button is-primary column" id="signup">Signup</button>
                <button class="button is-danger column" id="back">Back</button>
            </div>
        `
    }
}