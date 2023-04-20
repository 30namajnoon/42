import createElement from "../js/createElement.js";
import appContext from "./appContext.js";
import data from "../js/data.js";
import Link from "./Link.js";
export default function Inicio() {
    
}

Inicio.prototype.set = function() {
    let appContainer = appContext.get("container");
    this.container = createElement(appContainer,{tagName:"div",className:"inicio_container"});
    this.linksContainer = createElement(this.container,{tagName:"div",className:"links_container"});
    this.links = data.map(cv => {
        new Link(this.linksContainer,cv.link);
    })
}