import React, { Component } from 'react';
import { useTheme } from '@material-ui/core/styles';

class PersonalIcon extends Component {

	/**
	 * convert unix time to date time
	 */
	unixToDateTime(unixtime) {
		var d = new Date(unixtime);
		const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var year = d.getFullYear();
		var month = months[d.getMonth()];
		var date = d.getDate();
		var hour = d.getHours();
		var min = d.getMinutes();
		var time = month + ' ' + date + ' ' + year + ' ' + hour + ':' + min;
		return time;
	}

	/**
	 * convert unixtime to hours elapsed from Jan 1, 1970
	 */
	unixToHour(unixtime) {
		//unix time is in milliseconds 
		return Math.floor(unixtime / 1000 / 60 / 60);
	}

	state = {
		database: [

			{
				circle: "csci0320",
				rings: [
					{
						"name": "homework",
						"color": "red",
						"startDate": 1611427494628, //TODO: 
						"endDate": 1611427494628,
					},
					{
						"name": "project",
						"color": "green",
						"startDate": 1611427494628,
						"endDate": 1611427494628,
					}
				] 
			}, 

			{
				circle: "apma1200",
				rings: [
					{
						"name": "homework",
						"color": "red",
						"startDate": 1611427494628,
						"endDate": 1611427494628,
					},
					{
						"name": "project",
						"color": "green",
						"startDate": 1611427494628,
						"endDate": 1611427494628,
					}
				] 
			}
		]
	 }
	
	render() { 
		return (  );
	}
}
 
export default PersonalIcon;
