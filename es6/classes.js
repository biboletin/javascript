class User{
    constructor(name, pass){
        this.name = name;
        this.pass = pass;
    }

    showInfo(){
        return this.infoToString("name: " + this.name + " password: " + this.pass);
    }

    infoToString(str){
        return "(" + str.toString() + ")";
    }
}

let bib = new User("bibo", "123");

console.log(bib.showInfo());