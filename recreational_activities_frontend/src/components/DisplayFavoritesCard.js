class DisplayFavoritesCard
{
    static container = document.querySelector(".favorited-section");

    constructor(favoriteArea)
    {
        this.favoriteArea = favoriteArea;
        this.render();
    }

    render()
    {
        const card = document.createElement("div");

        card.className = "favorite-card";
        this.card = card;
        this.renderInnerHTML();
        this.constructor.container.append(card);
    }

    renderInnerHTML = () =>
    {
        this.card.innerHTML = `
            <div class="favorite">
                ${this.favoriteArea.facility_name}
                <span class="close">x</span>
            </div>
        `;
    }
}