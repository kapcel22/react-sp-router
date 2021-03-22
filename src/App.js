import React, {Component} from 'react';
import './Styles/App.scss';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./Templates/Header";
import Page from "./Templates/Page";
import Navigation from "./Templates/Navigation";
import Footer from "./Templates/Footer";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <header>
                        <Header/>
                    </header>
                    <main>
                        <aside>
                            <Navigation/>
                        </aside>
                        <section className="blog">
                            <Page/>
                        </section>
                    </main>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </Router>
        );
    }
}

export default App;