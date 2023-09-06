
function customRender(element, container){
    // const hypeLink = document.createElement(element.type)
    // hypeLink.innerText = element.children
    // hypeLink.setAttribute('href', element.props.href)
    // hypeLink.setAttribute('target', element.props.target)
    // container.appendChild(hypeLink)

    const domEle = document.createElement(element.type)
    domEle.innerHTML = element.children
    for(let prop in element.props){
        domEle.setAttribute(prop, element.props[prop])
    }

    container.appendChild(domEle)
}

const customElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me"
}

const customElement2 = {
    type: 'input',
    children: 'enter password',
    props:{
        type: "password",
        name: "pass",
        id: 'userPass',
        placeholder: 'enter password'
    }
}

const mainContainer = document.getElementById('root')

customRender(customElement, mainContainer)
customRender(customElement2, mainContainer)