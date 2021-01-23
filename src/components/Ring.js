import React, { Component } from "react";
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import CircleProgressBar from '../view/CircleProgressBar';

const database = [
  {
    circle: "cs0320",
    rings: [
      {
        name: "lab",
        color: "red",
        startDate: "2021/01/21",
        endDate: "2021/01/27"
      },
      {
        name: "project",
        color: "green",
        startDate: "2021/01/21",
        endDate: "2021/01/28"
      }
    ]
  }
]

/**
 * Calculates the progress percentage
 * @param {String} startDate 
 * @param {String} endDate 
 */
function calcProgress(startDate, endDate) {
  const currTime = Date.now();
  const startTime = this.convToUnix(startDate);
  const endTime = this.convToUnix(endDate);
  return (currTime - startTime) / (endTime - startTime)
}

/**
 * Converts a formatted string to unix timestamp
 * @param {String} str format: "YYYY/MM/DD", example: "2013/09/05"
 * Note that the date will be in this format from some date plugin 
 */
function convToUnix(str) {
  return Math.round(new Date(str).getTime()/1000)
}

export default function Ring(props) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>{props.circle}</Title>
      <CircleProgressBar percentage={75} speed={50}/>
    </React.Fragment>
  );
}