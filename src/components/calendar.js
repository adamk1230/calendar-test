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

		}
	} // ends constructor

	componentDidMount() {
		helpers.getEvents()
			.then(function(response) {
				console.log(response)
			})

	}// ends compnetDidMount

	render() {
		return(
			<BigCalendar
				{...this.props}
				events={events}
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