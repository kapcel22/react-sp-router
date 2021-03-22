import React, {Component} from 'react';
import {Prompt} from 'react-router-dom';

class ContactPage extends Component {
    state ={
        message: ''
    }

    messageChangeHandle = e =>{
        this.setState({
            message: e.target.value
        });
    }

    submitMessageHandle = e =>{
        e.preventDefault();
        this.setState({
            message: ''
        });
    }


    render() {
        const { message } = this.state;
        return (
            <div className="contact">
                <form onSubmit={this.submitMessageHandle}>
                    <h2>Napisz do nas</h2>
                    <textarea
                        placeholder="Wiadomość..."
                        value={message}
                        onChange={this.messageChangeHandle}
                    />
                    <button>Wyślij</button>
                </form>
                <Prompt
                    when={message !== ''}
                    message="Masz niewypełniony formularz. Czy chcesz opuścić tę stronę?"
                />
            </div>
        );
    }
}

export default ContactPage;
