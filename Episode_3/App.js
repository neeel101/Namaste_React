import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => <h1>Neelesh's React</h1>;


const Heading = () => {

    return <> <Title />
           <p>Neelesh lets just dont lose hope we will make it to the END ! LETS DO OT !</p>
           </>

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading />);
