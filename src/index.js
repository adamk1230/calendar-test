import React from 'react';
import ReactDOM from 'react-dom';

import Calendar from './components/calendar';

const divStyle = {
	height: 600
};

ReactDOM.render(
	<div style={divStyle}>
		<h1>Hello World</h1>
		<Calendar />
	</div>
	, document.getElementById('root'));