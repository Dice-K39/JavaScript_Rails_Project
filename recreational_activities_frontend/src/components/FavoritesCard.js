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
        const userID = document.querySelector(".user-id").value;
        const areaID = card.querySelector(".area-id").value;

        card.remove();

        api.removeFavorites(userID, areaID)
    }

    renderInnerHTML = (area) =>
    {
        this.card.innerHTML = `
                <div class="favorite-site-name">
                    ${area.facility_name}
                </div>

                <input class="area-id" type="hidden" value="${area.id}">

                <div class="remove-button">
                     <button class="remove-btn button is-danger" >X</button>
                </div> 
                `
                ;
                // Will add to code later:               
                // link to each facility with more information
                // 
    }
}