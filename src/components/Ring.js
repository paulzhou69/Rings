import React, { Component } from "react";
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import CircleProgressBar from '../view/CircleProgressBar';
import ActivityRings, {ActivityRingsConfig, ActivityRingsData} from "react-activity-rings";

/**
 * Calculates the progress percentage
 * @param {String} startDate 
 * @param {String} endDate 
 */
function calcProgress(startDate, endDate) {
  const currTime = Date.now() / 1000;
  // const startTime = this.convToUnix(startDate);
  // const endTime = this.convToUnix(endDate);
  const startTime = Math.round(new Date(startDate).getTime()/1000);
  const endTime = Math.round(new Date(endDate).getTime()/1000);
  return (currTime - startTime) / (endTime - startTime)
}

export default function Ring(props) {
  const theme = useTheme();
  console.log(props);
  const circleName = props.circleName;
  const rings = props.rings;
  // console.log(rings);
  const valueObj = rings.map(ring => {
    return { value: calcProgress(ring.startDate, ring.endDate) };
  })

  const activityConfig = {
    width: 300,
    height: 300,
    radius: 120,
    ringSize: 14,
  }

  return (
    <React.Fragment>
      {circleName}
      <br/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ActivityRings data={valueObj} config={activityConfig}/> 
      </div>
    </React.Fragment>
  );
}