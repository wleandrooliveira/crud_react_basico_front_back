import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Livro from '../livro/livro'


export default props => (
    <Router history={hashHistory}>
        <Route path='/cruds' component={Livro} />
        <Redirect from='*' to='/cruds' />
    </Router>
)

