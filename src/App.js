import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect, Provider } from 'react-redux';
import { initializeApp } from "./redux/app-reducer";
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/store-redux';
import {withSuspense} from "./hoc/withSuspense";
const LoginPage = React.lazy(() => import('./components/Login/LoginPage'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Nav />
                <div className='app-wrapper-content'>
                    <Route path='/login' render={withSuspense(LoginPage)} />
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
                    <Route path='/users' render={() =>
                        <UsersContainer />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default MainApp;