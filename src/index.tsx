import * as React from 'react';
import * as ReactDom from 'react-dom';

import Layout from "./components/Layout";

ReactDom.render(
    <Layout compiler="typescript" framework="React"/>,
    document.getElementById('example')
)