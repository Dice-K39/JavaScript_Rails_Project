class FavoritesCard
{
    static container = document.querySelector(".favorited-section");

    constructor(favoriteArea)
    {
        this.favoriteArea = favoriteArea;

        if(this.favoriteArea.length === undefined)
        {
            this.render(this.favoriteArea);
        }
        else
        {
            this.favoriteArea.forEach(area => 
            {
                this.render(area);
            });
        }
    }

    render(area)
    {
        const card = document.createElement("div");

        card.className = "favorite-card";
        this.card = card;
        this.renderInnerHTML(area);
        this.attachEventListener(card);
        this.constructor.container.append(card);
    }

    attachEventListener = (card) =>
    {
        card.querySelector(".remove-btn").addEventListener("click", () => this.handleRemoveOnClick(card));
    }

    handleRemoveOnClick = (card) =>
    {
        api.removeFavorites(card.innerText);
    }

    renderInnerHTML = (area) =>
    {
        this.card.innerHTML = `
            <div class="favorite is-flex">
                <div class="favorite-site-name is-three-quarters">
                    ${area.facility_name}
                </div>
                <div class="remove-button-col">
                    <button class="remove-btn button is-danger" ></button>
                </div> 
            </div>
        `
        // Will add to code later               
        // link to each facility with more information
        ;
    }
}