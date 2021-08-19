
class cardBluePrint{
    constructor(
        name,
        app,
        friendFrom,
        imgAdr,
        dateWished,
        greetMsg,
    ){
        this.name = name;
        this.app = app;
        this.friendFrom = friendFrom;
        this.imageAdr  =  imgAdr;
        this.greetMessage = greetMsg;
        this.dateWished = dateWished;
    }
    timeWished(){
        let wishedDate = new Date(this.dateWished);
        let date = new Date();
        let timeInMS = date - wishedDate;//in millisecond
        let days = Math.floor(timeInMS/86400000)
        let hr = Math.floor((timeInMS%86400000)/(1000*60*60));
        let min = Math.floor((timeInMS%(1000*60*60))/(1000*60));
        return `${days} days,${hr} Hours, ${min} minutes`;
    }
}
export default cardBluePrint;