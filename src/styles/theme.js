
const Dark = {
    primary : "rgb(150,150,150)",
    secondary: "rgb(240,240,240)", 
    destaque : 'rgb(50,0,50)',
    title: 'white',
    icones : "rgb(40,40,40)",
    border : "255,255,255",
    bgImage: "rgba(0,0,0,.8)",
    bgOpacity : "0,0,0",
    bordersecondary : '0,0,0',
    bgCard : "rgb(255,240,255)",
    bgCard2 : "rgba(255,255,255,0.8)",
    borderCard : "rgba(30,30,30,0.2)",
    cardColor : "rgb(60,0,30)",
    bg : "rgb(20,20,20)"
}


// const Light = {
//     primary : "#EB0C6B",
//     secondary: "white",
//     icones : "rgb(40,40,40)",
//     border : "0,0,0",
//     bgImage : "#EBE2A0",
    
// }
const Light = {
    ...Dark,
    primary : "red"
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