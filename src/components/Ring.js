import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';

const database = [
  {
    folder: "cs0320",
    rings: [
      {
        name: "homework",
        color: "red",
        startDate: "02-01-2021",
        endDate: "02-10-2021"
      },
      {
        name: "project",
        color: "green",
        startDate: "02-08-2021",
        endDate: "02-23-2021"
      }
    ]
  }
]

class Ring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      database: {
        cicle: "cs0320",
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
    }
  }

  /**
   * Calculates the progress percentage
   * @param {String} startDate 
   * @param {String} endDate 
   */
  calcProgress(startDate, endDate) {
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
  convToUnix(str) {
    return Math.round(new Date(str).getTime()/1000)
  }

  render() {
    const theme = useTheme();
    return (
      <React.Fragment>
        <Title>XXX's Rings</Title>
      </React.Fragment>
    );
  }
}

export default Ring;

// export default function Ring() {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Title>XXX's Rings</Title>
//     </React.Fragment>
//   );
// }