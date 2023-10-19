import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <h3>Custom App !</h3>
    )
}

// const reactElement = {
//     type: 'a',
//     props : {
//         href: 'https://google.com',
//         target:'_blank'
//     },
//     children: 'click me to visit google'
// }

const newReatElement = (
    <a href="https://google.com" target="_blank">visit google</a>
)

const anotheruser = 'gautam'

const reactElement = React.createElement('a', 
    {href: 'https://google.com',target:'_blank'},
    'click me to visit google',
    anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
