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
	 * @param {number} unixtime
	 */
	unixToDay(unixtime) {
		//unix time is in milliseconds 
		return Math.floor(unixtime / 1000 / 60 / 60 / 24);
	}

	state = {
		database: [

			{
				circle: "csci0320",
				rings: [
					{
						name: "homework",
						color: "red",
						startDate: "2021/01/19",
						endDate: "2021/01/25",
					},
					{
						name: "project",
						color: "green",
						startDate: "2021/01/18",
						endDate: "2021/01/24",
					}
				] 
			}, 

			{
				circle: "apma1200",
				rings: [
					{
						name: "homework",
						color: "red",
						startDate: "2021/01/10",
						endDate: "2021/01/31",
					},
					{
						name: "project",
						color: "green",
						startDate: "2021/01/15",
						endDate: "2021/01/23",
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
