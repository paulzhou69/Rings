import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { cyan, deepOrange } from '@material-ui/core/colors';
import Dashboard from './components/Dashboard';


const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: "#E0E4E8"
      },
      secondary: {
        main: deepOrange[100]
      },
    },
    typography: {
      fontFamily: "Raleway"
    },
    shadows: ["none"]
  }
);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          < Route exact path="/" component={Dashboard} />
          < Route exact path="/user/:name" component={Dashboard} />
          < Route exact path="/group/:name" component={Dashboard} />
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
