import React,{Component} from 'react';
import axios from 'axios';
import './ChatBotMain.css';
import profile from '../assets/profile.jpg';
import bot from '../assets/bot.png';
class ChatBotMain extends Component{
    state={
        currentQuestion : '',
        queries:[]
    }
    submitQuery=(event)=>{
        let form = document.getElementById('form');
        form.reset();
        event.preventDefault();
        let answerArray=[];
        answerArray = this.state.queries;
        answerArray.push(this.state.currentQuestion);
        this.setState({queries:answerArray});
        axios.get('https://api.wolframalpha.com/v1/result?i='+ this.state.currentQuestion +'%3F&appid=RX566T-A6RE473GT5')
        .then(response=>
        {
            answerArray.push(response.data);
            this.setState({queries:answerArray});
        })
        .catch(error =>{
            console.log(error);
        })
    }
    onChange=(event)=>{
        this.setState({currentQuestion:event.target.value});
    }
    render(){
        let query = this.state.queries.map((query,index)=>{
            if(index%2 !== 0 )
            {
                return <div className="container" key={query}>
                <img src={bot} alt="Avatar" style={{width:'100%'}}/>
                <p>{query}</p>
                </div>
            }
            if(index%2 === 0){
                return <div className="container darker" key={query}>
                <img src={profile} className="right" alt="Avatar" style={{width:'100%'}}/>
                <p>{query}</p>
                </div>
            }
        });
        return(
            <div>
                <div className="top_menu">
                <div className="buttons">
                    <div className="button close"></div>
                    <div className="button minimize"></div>
                    <div className="button maximize"></div>
                </div>
                <div className="title">ChatBOT</div>
                <div className="chat-area">{query}</div>
                </div>
                <form id="form" className="bottom_wrapper" onSubmit={this.submitQuery}>
                <input type='text' className="message_input" onChange = {this.onChange} placeholder="Type your message here..." />
                        <input type='submit' className="text" value='Send'/>    
                </form>
            </div> 
        )
    }
}

export default ChatBotMain;