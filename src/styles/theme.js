
const Dark = {
    primary : "rgb(60,30,60)",
    secundary: "white", 
    destaque : 'rgb(50,0,50)',
    title: 'white',
    icones : "rgb(40,40,40)",
    border : "255,255,255",
    bgImage: "rgba(0,0,0,.8)",
    bgOpacity : "255,255,255",
    borderSecundary : '0,0,0'
}


// const Light = {
//     primary : "#EB0C6B",
//     secundary: "white",
//     icones : "rgb(40,40,40)",
//     border : "0,0,0",
//     bgImage : "#EBE2A0",
    
// }
const Light = {
    ...Dark,
    primary: "red",
    icones : "red"
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