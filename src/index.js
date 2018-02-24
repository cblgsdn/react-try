import React from 'react';
import ReactDOM from 'react-dom';
import FirstChild from './components/FirstChild.component.js'

class RootApp extends React.Component {
    constructor() {
        super();
        this.state = {
            test: '124'
        }
    }

    render() {
        return(
            <div>
                <h1> yoyo Heading </h1>
                <FirstChild />
            </div>
        )
    }
}

ReactDOM.render(<RootApp />, document.getElementById('root'));