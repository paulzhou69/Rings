import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';

const database = [
  {
    "folder": "cs0320",
    "rings": [
      {
        "name": "homework",
        "color": "red",
        "startDate": "02-01-2021",
        "endDate": "02-10-2021"
      },
      {
        "name": "project",
        "color": "green",
        "startDate": "02-08-2021",
        "endDate": "02-23-2021"
      }
    ] 
  }
]

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>XXX's Rings</Title>
    </React.Fragment>
  );
}