class SearchForm
{
    static container = document.querySelector(".search-section");

    constructor()
    {
        this.render();
        this.attachEventListener();
    }

    attachEventListener()
    {
        this.form.addEventListener("click", () => this.handleOnClick());
    }

    handleOnClick()
    {
        if (event.target.id === "submit")
        {
            event.preventDefault();

            api.searchAreas();
        }
        
        if (event.target.id === "reset")
        {
            document.querySelector(".display-search").innerText = "";
            document.querySelector(".error-message").innerText = "";
        }
    }

    render()
    {
        const form = document.createElement("form");

        form.className = "search-form";
        form.innerHTML = this.renderInnerHTML();
        this.form = form;
        this.constructor.container.append(form);
    }

    renderInnerHTML = () =>
    {
        return `
            <label class="label">Search for Recreational Areas:</label>
            
            <br />

            <label>Keyword Search:</label>
            <div class="control">
                <input class="input" id="keyword_query" type="text" placeholder="Input Keyword">
            </div>
            
            <br />

            <label>Activity Search:</label>
            <div class="control">
                <input class="input" id="activity_query" type="text" placeholder="Input Activity">
            </div>

            <br />

            <label>State:</label>
                <div class="control" id="state">
                    <select name="state">
                        <option value="">None</option> 
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>

            <br />

            <label>Filter by First Letter of Area Name:</label>
                <div class"control">
                    <input class="input" id="area-filter-by-first-letter" maxlength="1" type="text">
                </div>

            <br />

            <div class="buttons">
                <button class="button is-primary" id="submit">Submit</button>
                <button class="button is-danger" id="reset" type="reset">Reset</button>
            </div>
        `;
    }
}