/**
 * @RootComponent
 * description = 'Basic Login Page'
 * pageTypes = LOGIN
 */
import React from 'react';
import { render } from 'react-dom';
import Login from './login';
import '../../index.css';

console.log('Login Loaded');

render(<Login />, document.querySelector('.block.commerce-login'));
