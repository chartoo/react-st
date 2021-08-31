import React from 'react';
const name="Josh Perez";
const user={
    firstName:'Harper',
    lastName:'Perez'
};
const element = React.createElement(
    'h1',
    {
        className: 'greeting',
        id:'element-id'
    },
    'Hello, world!'
  );
function formatName(user){
    return user.firstName+' '+user.lastName;
}
function IntroJSX() {
    return (
        <div>
            {element}
            <h2>Hello, {formatName(user)}</h2>
        </div>
    );
}
export default IntroJSX;