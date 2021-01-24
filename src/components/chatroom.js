import React from 'react';
import ReactDOM from 'react-dom';
import './chatroom.css'
import '../App.css'
import RingIcon1 from './svg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Message = ({chat, user}) => (
  <Grid container style={{direction: 'row'}}>
  <RingIcon1 style={{paddingRight: 3}}/>
  <li className={`chat ${user === chat.username ? "right" : "left"}`}>
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
                content: <p>wow we have a chatroom</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
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
                img: "http://i.imgur.com/Tj5DGiO.jpg",
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