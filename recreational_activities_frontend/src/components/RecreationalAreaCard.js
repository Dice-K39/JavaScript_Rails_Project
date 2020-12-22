class RecreationalAreaCard
{
    static container = document.querySelector(".display-search")
    static all = [];

    static getMatch(data)
    {
        this.container.innerHTML = '';

        this.all = []; // had to add to avoid filter from adding another of the same area after submitting another search of same parameters.

        data.RECDATA.forEach(area => new RecreationalAreaCard(area));
    }

    static superDuperFilter()
    {
        const query = document.querySelector("#area-filter-by-first-letter").value;

        this.filterAreas(query);
    }

    static filterAreas(letter)
    {
        this.container.innerHTML = "";

        this.all.filter((rec_facility) => 
        {
            if (rec_facility.area.FacilityName.split("")[0] === letter.toUpperCase())
            {
                rec_facility.render();
            }
        })
    }
    
    constructor(area)
    {
        this.area = area;
        this.constructor.all.push(this);
        this.render();
    }

    render()
    {
        const card = document.createElement("div");

        card.className = "card";
        this.card = card;
        this.renderInnerHTML();
        this.attachEventListener(card);
        this.constructor.container.append(card);
    }

    attachEventListener = (card) =>
    {
        card.querySelector(".favorite-btn").addEventListener("click", () => this.handleBtnOnClick());
    }

    handleBtnOnClick()
    {
        const recreationalArea = this.area;
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
                <h2>${this.area.FacilityName} <button class="favorite-btn button is-primary">Favorite</button></h2>
                ${this.area.FacilityDescription}
                <hr>
            </div>
        `;
    }
}