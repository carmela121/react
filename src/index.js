import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Text from './Text';
// import Gallery from './Gallery';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
