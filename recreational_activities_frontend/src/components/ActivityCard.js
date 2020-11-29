class ActivityCard
{
    static container = document.querySelector(".display-container")

    constructor(activity)
    {
        this.activity = activity;
        this.render(activity);
        // this.attachEventListener;
    }

    static getMatch(data)
    {
        data.RECDATA.forEach(activity => new ActivityCard(activity));
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
        this.card.innerHTML =`
            <h2>${this.activity.FacilityName}</h2>
            <button class="favorite-btn button is-primary">Favorite</button>
        `
    }
}