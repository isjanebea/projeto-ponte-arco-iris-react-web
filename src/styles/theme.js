
const Dark = {
    primary : "white",
    secundary: "rgb(60,30,60)"
}


const Light = {
    primary : "black",
    secundary: "white"
}

class Theme {
    constructor () {
        this.fontFamily = 'Roboto';
        this.borderColor= 'rgba(0,0,0,0.5)';
        this.color = Dark;
        this.use = 'dark'; // default
    }
    toggleTheme(theme) {
        this.use = theme ? 'dark' : 'light';
        this.color = theme ? Dark : Light;
    }
    
}

export default new Theme();