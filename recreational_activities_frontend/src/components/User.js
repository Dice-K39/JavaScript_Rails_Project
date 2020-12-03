class User
{
    static container = document.querySelector(".navbar");

    constructor()
    {
        this.renderButtons();
        this.attachEventListener();
    }

    attachEventListener()
    {
        const btns = document.querySelector(".signup-login-button ");
        
        btns.addEventListener("click", () => this.handleOnClick());
    }

    handleOnClick()
    {
        if (event.target.id === 'login')
        {
            console.log("this is where you'll call renderlogIn")
        }

        if (event.target.id === 'signup')
        {
            this.constructor.container.innerHTML = "";
            this.renderSignupForm();
            console.log("is this working?")
        }
    }

    renderSignupForm()
    {
        const form = document.createElement("form");

        form.className = "signup-form";
        form.innerHTML = this.renderSignupFormInnerHTML();
        this.form = form;
        this.constructor.container.append(form);
    }

    submitLogin = (event) =>
    {debugger
        event.preventDefault();

        // api.loginUser();
    }

    submitSignup = (event) =>
    {debugger
        event.preventDefault()

        renderSignupFormInnerHTML();

        // api.signupUser();
    }

    renderButtons()
    {
        this.constructor.container.innerHTML = this.renderInnerHTML();
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

    renderSignupFormInnerHTML = () => 
    {
        return `
            <div class="signup-form columns pr-5">
                <label class="label column" display="inline">Username: </label>
                <input class="input column" name="username" placeholder="Enter Username">
                <button class="button is-primary column" type="submit">Register</button>
                <button class="button is-danger column" id="back">Back</button>
            </div>
        `
    }
}