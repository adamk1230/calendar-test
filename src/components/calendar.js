import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment';
import events from '../events';

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

let Calendar = React.createClass({
	render(){
		return(
			<BigCalendar
				{...this.props}
				events={events}
				views={allViews}
				defaultDate={new Date(2017, 3, 1)}
			/>
		)
	}
})

export default Calendar;