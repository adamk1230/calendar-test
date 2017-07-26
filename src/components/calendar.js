import React from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../events';

import helpers from '../utils/helpers'

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

class Calendar extends React.Component {
	constructor () {
		super()

		this.state = {
			events: []
		}

	// this.componentDidMount = this.componentDidMount.bind(this)

	} // ends constructor

	componentDidMount() {
		console.log("Made it to CDM")
		console.log(moment('20170725T1530').format('llll'))
		helpers.getEvents()
			.then(response => {
				console.log("made it to response")
				// console.log(response.data)
				let eventsArray = response.data
				console.log(eventsArray)
				this.setState({
					events: eventsArray
				})


				// eventsArray.forEach(event => {
				// 	this.setState({
				// 		events: event
				// 	})

				// })
			})

	}// ends compnetDidMount


	render() {
		console.log("this.state.events: ")
		console.log(this.state.events)
		console.log("events: ")
		console.log(events)
		return(
			<BigCalendar
				{...this.props}
				events={this.state.events}
				views={allViews}
				// startAccessor='startDate'
      	// endAccessor='endDate'
				// defaultDate={new Date(2017, 3, 1)}
			/>
		)
	}



}


// let Calendar = React.createClass({
// 	render(){
// 		return(
// 			<BigCalendar
// 				{...this.props}
// 				events={events}
// 				views={allViews}
// 				// startAccessor='startDate'
//       	// endAccessor='endDate'
// 				// defaultDate={new Date(2017, 3, 1)}
// 			/>
// 		)
// 	}
// })

export default Calendar;