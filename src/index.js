import React from 'react';
import ReactDOM from 'react-dom';

import Todos from './containers/Todos';

ReactDOM.render(
    <React.StrictMode>
        <Todos />
    </React.StrictMode>,
    document.getElementById('root')
);