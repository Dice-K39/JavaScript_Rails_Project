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
        this.form.addEventListener("submit", this.handleOnSubmit);
    }

    handleOnSubmit = (event) =>
    {
        event.preventDefault();

        const {query, states, num_records} = event.target;
        const data = 
        {
            query: query.value,
            states: states.value,
            num_records: num_records.value
        };

        api.searchApi(data).then(search => new SearchCard(search));
    }

    render()
    {
        const form = document.createElement("form");
debugger
        form.className = "search-form";
        form.innerHTML = this.renderInnerHTML();
        this.form = form;
        this.constructor.container.append(form);
    }

    renderInnerHTML = () =>
    {
        return `
            <label class="label">Search for Facilites</label>
            
            <br />

            <label>Keyword:</label>
            <div class="control">
                <input class="input" name="query" type="text" placeholder="Input Search Criteria">
            </div>
            
            <br />

            <label>State:</label>
                <div class="control">
                    <select name="states">
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

                <br /><br />

                <label>Number of Records (max 50):</label>
                <div class="control">
                    <input class="input" name="num_records" type="text" value="50">
                </div>

                <br />

                <div class="buttons">
                    <button class="button is-primary" name="submit">Submit</button>
                    <button class="button is-danger" name="reset">Reset</button>
                </div>
        `;
    };
}