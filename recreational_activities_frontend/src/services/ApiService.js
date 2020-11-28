class ApiService
{
    constructor(baseURL)
    {
        this.baseURL = baseURL;
    }

    searchActivities = (data) =>
    {
        console.log(data);
        debugger
        fetch(`${this.baseURL}/search`)
            .then(res => res.json());
    };
}