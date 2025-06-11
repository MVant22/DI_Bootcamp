import React , {Component} from 'react';

class Exercise extends Component {
    render(){
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
};

        return (
            <div>
                <h1 style={style_header}>This a Header</h1>

                <p>This is a paragraph</p>

                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Visit React Official Website
                </a>

                <h3>This is a Form:</h3>

                <p>Enter your name</p>

                <form>
                    <label>
                        Name: <input type="text" name="name"/>
                    </label>
                    <button>Submit</button>
                </form>

                <h3>Here is an image</h3>

                <img
                    src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
                    alt="logo"
                    style={{ display: 'block', marginTop: '10px'}}
                />

                <h3>This is a list:</h3>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        )
    }
}


export default Exercise;