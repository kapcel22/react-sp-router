import React, {Component} from 'react';

class CssPage extends Component {
    state = {
        active: false
    }

    changeActiveHandle = ()=>{
        this.setState(({active})=>({
            active: !active
        }))
    }

    render() {
        return (
            <div>
                <h2>Kurs - sekcja css</h2>
                <button>Przycisk</button>
            </div>
        );
    }
}

export default CssPage;