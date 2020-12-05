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
        card.addEventListener("click", () => this.handleBtnOnClick());
    }

    handleBtnOnClick()
    {
        // event.stopImmediatePropagation()

        // console.log(this.activity)
        console.log("hi")
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