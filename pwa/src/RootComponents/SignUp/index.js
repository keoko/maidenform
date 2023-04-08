/**
 * @RootComponent
 * description = 'Basic Login Page'
 * pageTypes = LOGIN
 */
import React from 'react';
import { render } from 'react-dom';
import SignUp from './signup';
import '../../index.css';

console.log('Login Loaded');

render(<SignUp />, document.querySelector('.block.commerce-signup'));
