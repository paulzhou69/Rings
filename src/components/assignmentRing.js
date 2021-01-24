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
import Typography from '@material-ui/core/Typography';

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

export default function AssignmentRing(props) {
  const theme = useTheme();
  const rings = props.rings;
  // console.log(props.rings);
  const activityData = [
    { 
      value: calcProgress(rings.startDate, rings.endDate), 
      label: rings.name,
      color: rings.color 
    }
]

  const activityConfig = {
    width: 200,
    height: 200,
    radius: 40,
    ringSize: 16,
  }

  return (
    <React.Fragment>
      <br/>
      <div style={{ display: "flex", justifyContent: "center" }}
           onClick={() => console.log(props)}>
        <ActivityRings data={activityData} config={activityConfig}/> 
      </div>
    </React.Fragment>
  );
}