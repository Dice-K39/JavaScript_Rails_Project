class RecreationalAreaCard
{
    static container = document.querySelector(".display-search")

    static getMatch(data)
    {
        this.container.innerHTML = '';

        data.RECDATA.forEach(activity => new RecreationalAreaCard(activity));
    }
    
    constructor(activity)
    {
        this.activity = activity;
        this.render(activity);
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
        const userID = document.querySelector(".user-id").value; // Not safe to send around user_id from database. Future iteration of app will use secure method.

        const data =
        {
            user_id: userID,
            facility_name: recreationalArea.FacilityName,
            facility_description: recreationalArea.FacilityDescription,
            facility_id: recreationalArea.FacilityID,
            facility_directions: recreationalArea.FacilityDirections,
            facility_email: recreationalArea.FacilityEmail,
            facility_phone: recreationalArea.FacilityPhone
        };

        api.saveFavoriteArea(data);
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