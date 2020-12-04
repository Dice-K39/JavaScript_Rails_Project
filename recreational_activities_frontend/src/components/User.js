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
        this.constructor.container.innerHTML = "";
        this.renderForm();
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
        `
    }
}