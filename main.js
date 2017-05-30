import React from 'react';
import ReactDOM from 'react-dom';
import Ground from './components/ground';
import './style.scss';

class GroundTester extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            height: 50,
            width: 50,
            bars: this.randomize()
        };
    }

    randomize() {
        let arr = [];
        for (let i = 0; i < 50; ++i) {
            let row = [];
            for (let j = 0; j < 50; ++j) {
                row.push(Math.floor(Math.random() * 6));
            }
            arr.push(row);
        }
        return arr;
    }

    randomizeClicked() {
        this.setState({
            bars: this.randomize()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.randomizeClicked.bind(this)}>Randomize</button>
                <Ground {...this.state} />;
            </div>
        )
    }

}

ReactDOM.render(<GroundTester />, document.getElementById('react-me'));
