import React from 'react';
import ReactDOM from 'react-dom';
import './chatroom.css'
import '../App.css'
import RingIcon1 from './svg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Message = ({chat, user}) => (
  <Grid container style={{direction: 'row'}} className={`chat ${user === chat.username ? "right" : "left"}`}>
  <RingIcon1 style={{paddingRight: 3}}/>
  <li style={{borderRadius: 5, paddingLeft:5,paddingRight:5,paddingTop:2,paddingBottom:-6,background: '#E0E4E8'}}>
      {chat.content}
  </li>
  </Grid>
);

class Chatroom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [{
                username: "sean",
                content: <p>hi</p>,
            }, {
                username: "paul",
                content: <p>wow</p>,
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "alex",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "alex";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h4>chatroom</h4>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;