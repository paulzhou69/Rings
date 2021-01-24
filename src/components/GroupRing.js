import React, { Component } from "react";
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import CircleProgressBar from '../view/CircleProgressBar';
import ActivityRings, {ActivityRingsConfig, ActivityRingsData} from "react-activity-rings";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { CheckBox } from "@material-ui/icons";

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

export default function GroupRing(props) {
  const theme = useTheme();
  const circleName = props.circleName;
  const rings = props.rings;
  // console.log(rings);
  const valueObj = rings.map(ring => {
    return { 
      value: calcProgress(ring.startDate, ring.endDate), 
      label: ring.name,
      color: ring.color };
  })

  const activityConfig = {
    width: 200,
    height: 200,
    radius: 50,
    ringSize: 18,
  }

  return (
    <React.Fragment>
      <br/><br/>
      {circleName}
      <div style={{ display: "flex", justifyContent: "center" }}
           onClick={() => console.log(valueObj)}>
        <ActivityRings data={valueObj} config={activityConfig}/> 
      </div>
      Score: {100 - Math.floor(valueObj[0].value * 100)}%
    </React.Fragment>
  );
}