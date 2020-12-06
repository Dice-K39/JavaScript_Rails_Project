class DisplayFavoritesCard
{
    static container = document.querySelector(".favorited-section");

    constructor(favoriteArea)
    {
        // Used when pushing favorite button on the cards.
        this.favoriteArea = favoriteArea;

        if(this.favoriteArea.length === undefined)
        {debugger
            this.render();
        }
        else
        {debugger
            this.renderFavorites();
        }
    }

    render()
    {
        const card = document.createElement("div");

        card.className = "favorite-card";
        this.card = card;
        this.renderInnerHTML(this.favoriteArea);
        this.constructor.container.append(card);
    }

    renderFavorites()
    {
        this.favoriteArea.forEach(area =>
        {
            const card = document.createElement("div");
    
            card.className = "favorite-card";
            this.card = card;
            this.renderInnerHTML(area);
            this.constructor.container.append(card);
        });    
    }

    renderInnerHTML = (area) =>
    {
        this.card.innerHTML = `
            <div class="favorite">
                ${area.facility_name}
                <span class="close">x</span>
            </div>
        `;
    }
}