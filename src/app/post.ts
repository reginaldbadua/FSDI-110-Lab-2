export class Post {

    public content = '';
    public date: Date;
    public from ='';
    public to = '';
    public imageUrl= '';

    constructor(){
        //default value
        this.from = "Everyone";
        this.to = "Everyone";
        this.date = new Date(); //current date time
    }

}
