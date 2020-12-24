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

    // live coding example
    static sortMyFavorites()
    {
        event.preventDefault();

        const userID = document.querySelector(".user-id").value;

        const url = `http://localhost:3000/api/v1` + `/users/${userID}/recreational_areas`;

        fetch(url)
            .then(res => res.json())
            .then(data => 
            {

                this.container.innerHTML = "";

                const sortedData = data.sort((a, b) =>
                {
                    if (a.facility_name < b.facility_name)
                    {
                        return -1;
                    }
                    else if (a.facility_name > b.facility_name)
                    {
                        return 1;
                    }

                    return 0;
                })

                new FavoritesCard(sortedData);
            });
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

        api.removeFavorites(userID, areaID);
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
                `;
                
                // Will add to code later:               
                // link to each facility with more information
                // 
    }
}