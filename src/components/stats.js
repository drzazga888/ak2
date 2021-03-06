import React from 'react';
import Dygraph from 'dygraphs';

class Stats extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			history: [[this.props.step, this.props.roughness]]
		};
	}

	componentDidMount() {
		this.chart = new Dygraph(this.refs.chartDom, this.state.history, {
			labels: ['Krok', 'Chropowatość'],
			axes: {
				'y': {
					axisLabelFormatter: val => Math.round(Number(val) * 10000) / 10000,
					valueFormatter: val => Number(val).toFixed(5),
					includeZero: true
				}
			},
			legend: 'always',
			color: '#00E3FF'
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.step === 0) {
			this.setState({
				history: [[nextProps.step, nextProps.roughness]]
			});
		} else if (nextProps.step !== this.props.step) {
			let newHistory = this.state.history.map(arr => arr.slice());
			this.setState({
				history: newHistory.concat([[nextProps.step, nextProps.roughness]])
			});
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.history !== this.state.history) {
			this.chart.updateOptions({
				file: this.state.history
			});
		}
	}

	render() {
		return (
			<div className="stats">
				<p>
					<span title="Nr kroku symulacji">Krok: <strong>{this.props.step}</strong></span>,&nbsp;
					<span title="Chropowaść obliczana jest jako odchylenie standardowe wysokości wszystkich zdyskretyzowanych punktów w podstawie podłoża">Chropowatość: <strong>{(this.props.roughness).toFixed(5)}</strong></span>
				</p>
				<div className="chart" ref="chartDom"></div>
			</div>
		);
	}

}

export default Stats;
