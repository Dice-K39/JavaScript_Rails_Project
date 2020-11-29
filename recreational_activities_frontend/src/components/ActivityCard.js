class ActivityCard
{
    static container = document.querySelector(".display-search")

    constructor(activity)
    {
        this.activity = activity;
        this.render(activity);
        // this.attachEventListener;
    }

    static getMatch(data)
    {
        data.RECDATA.forEach(activity => new ActivityCard(activity));
        debugger
    }

    render()
    {
        const card = document.createElement("div");

        card.className = "card";
        this.card = card;
        this.renderInnerHTML();
        this.constructor.container.append(card);
    }

    renderInnerHTML()
    {
        if (this.activity.FacilityDescription !== "")
        {
            this.card.innerHTML =`
                <div class="content">
                    <h2>Recreational Facility: ${this.activity.FacilityName}</h2>
                    <button class="favorite-btn button is-primary">Favorite</button>
                    <br />
                    <label class="label">Description: </label>
                    ${this.activity.FacilityDescription}
                    <hr>
                </div>
            `
        }
    }
}