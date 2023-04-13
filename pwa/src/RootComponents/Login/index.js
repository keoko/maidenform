/**
 * @RootComponent
 * description = 'Basic Login Page'
 * pageTypes = LOGIN
 */
import React from 'react';
import { render } from 'react-dom';
import Login from './login';
import '../../index.css';
import store from '../../store';
import Adapter from '../../components/Adapter/adapter';

console.log('Login Loaded');

const origin = globalThis.location.origin;
const styles = new Set();
const configureLinks = links => [...links.values()];

render((<Adapter
    apiUrl="https://www.marbec.click/graphql-maidenform-qa"
    configureLinks={configureLinks}
    origin={origin}
    store={store}
    styles={styles}>
        <Login/>
    </Adapter>),
    document.querySelector('.block.commerce-login'));
