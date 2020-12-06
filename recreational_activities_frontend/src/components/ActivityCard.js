class ActivityCard
{
    static container = document.querySelector(".display-search")

    constructor(activity)
    {
        this.activity = activity;
        this.render(activity);
    }

    static getMatch(data)
    {
        this.container.innerHTML = '';

        data.RECDATA.forEach(activity => new ActivityCard(activity));
    }

    render()
    {
        const card = document.createElement("div");

        if (this.activity.FacilityDescription !== "")
        {
            card.className = "card";
            this.card = card;
            this.renderInnerHTML();
            this.attachEventListener(card);
            this.constructor.container.append(card);
        }
    }

    attachEventListener = (card) =>
    {
        card.querySelector(".favorite-btn").addEventListener("click", () => this.handleBtnOnClick());
    }

    handleBtnOnClick()
    {
        const recreationalArea = this.activity;
        const data =
        {
            facility_name: recreationalArea.FacilityName,
            facility_description: recreationalArea.FacilityDescription,
            facility_id: recreationalArea.FacilityID,
            facility_directions: recreationalArea.FacilityDirections,
            facility_email: recreationalArea.FacilityEmail,
            facility_phone: recreationalArea.FacilityPhone
        };

        api.favoriteArea(data);
    }

    renderInnerHTML()
    {
        this.card.innerHTML =`
            <div class="content">
                <h2>${this.activity.FacilityName} <button class="favorite-btn button is-primary">Favorite</button></h2>
                ${this.activity.FacilityDescription}
                <hr>
            </div>
        `
    }
}