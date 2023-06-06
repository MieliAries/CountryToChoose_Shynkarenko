import React from 'react';

export default function Profile() {
    return (
        <div>
            <div style ={{textAlign: 'center'}}>
                <h1>Profile page</h1>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center'
            }}>>
            <div style ={{width: '50%', textAlign: 'center'}}>
                <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="user_icon" style ={{height: '20%'}}/>
            </div>
            <div style ={{width: '50%', textAlign: 'center'}}>
                <h1>First name:</h1>
                <p>Mieli</p>
                <h1>Second name:</h1>
                <p>Aries</p>
                <h1>Email:</h1>
                <p>ariesmieli@gmail.com</p>
            </div>
            </div>
        </div>

    );
};