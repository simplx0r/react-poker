import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './header';
import { store } from '../store/store';
import { StoreContext } from 'storeon/preact'

const App: FunctionalComponent = () => {
    return (
    <StoreContext.Provider value={store}>
        <div id="preact_root">
            <Header />
            <Router>
                <Route path="/" component={Home} />
                <Route path="/profile/" component={Profile} user="me" />
                <Route path="/profile/:user" component={Profile} />
                <NotFoundPage default />
            </Router>
        </div>
    </StoreContext.Provider>

    );
};

export default App;
