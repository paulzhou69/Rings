import React, { Component } from 'react';
import { useTheme } from '@material-ui/core/styles';

class PersonalIcon extends Component {

	/**
	 * convert unix time to date time
	 */
	unixToDateTime(unixtime) {
		var d = new Date(unixtime * 1000);
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
		//unix time is in seconds 
		return Math.floor(unixtime / 60 / 60 / 24);
	}

	/**
   * Converts a formatted string to unix timestamp
   * @param {String} str format: "YYYY/MM/DD", example: "2013/09/05"
   * Note that the date will be in this format from some date plugin 
   */
  strToUnix(str) {
    return Math.round(new Date(str).getTime() / 1000);
  }

	/**
   * Calculates the progress percentage
   * @param {String} startDate 
   * @param {String} endDate 
   */
  singleRingProgress(startDate, endDate) {
    const curUnixTime = Date.now() / 1000;
    const startUnixTime = this.strToUnix(startDate);
		const endUnixTime = this.strToUnix(endDate);
		if (curUnixTime < startUnixTime) throw "start time after current time";
		if (endUnixTime < startUnixTime) throw "end time already passed";
		// if (curUnixTime == endUnixTime) return ?; 
		return (curUnixTime - startUnixTime) / (endUnixTime - startUnixTime);
	}
	
	/**
	 * calculate the overall progress, return a percentage of progress
	 */
	overallProgress() {
		var numRings = 0  // number of circles
		var progress = 0
		for (circle in this.state.database) {
			for (ring in circle.rings) {
				numRings++;
				progress += this.singleRingProgress(ring.startDate, ring.endDate);
			}
		}
		if (numRings == 0) return 100;
		return progress / numRings;
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
		return ( 
			// TODO: 
		 );
	}
}
 
export default PersonalIcon;
