import React from 'react';

const LoginPage = () => {
    return (
        <div className="flex-column">
            <h2>Wymagane uwierzytelnienie:</h2>
            <label>
                Login:
                <input type="text"/>
            </label>
            <label>
                Hasło:
                <input type="password"/>
            </label>
            <button>Zaloguj</button>
        </div>
    );
};

export default LoginPage;
