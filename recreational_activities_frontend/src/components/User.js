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
        const login = document.querySelector(".signup-login-button ");
        
        login.addEventListener("click", this.handleOnClick);
    }

    handleOnClick()
    {
        if(event.target.id === 'login')
        {
            console.log("this is where you'll call renderlogIn")
        } 
        if(event.target.id === 'signup')
        {
            console.log("this is where you'll call renderSignup")
        }
    }

    submitLogin = (event) =>
    {debugger
        event.preventDefault();

        // api.loginUser();
    }

    submitSignup = (event) =>
    {debugger
        event.preventDefault();

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
    {debugger
        return `
            <div class="signup-form" columns pr-5">
                <label class="label column">Username: </label>
                <input class="input column" name="username" placeholder="Enter Username">
                <button class="button is-primary column" type="submit">Register</button>
            </div>
        `
    }
}