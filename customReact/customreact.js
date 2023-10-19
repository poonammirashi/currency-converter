function CustomReact(reactElement,container){
    // const element = document.createElement(reactElement.type);
    // element.innerHTML = reactElement.children;
    // element.setAttribute('href',reactElement.props.href);
    // element.setAttribute('target',reactElement.props.target);
    // cotainer.appendChild(element);

    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue ;
        element.setAttribute(prop,prop);
    }
    container.appendChild(element);
}

const reactElement = {
    type: 'a',
    props : {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector("#root");

CustomReact(reactElement,mainContainer);