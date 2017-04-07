const React = require('react');

import TestComponent from '../index';

geminiReact.suite('Header', suite => {
    suite.render(<TestComponent />).capture('initial');
});