import React, {Component} from 'react';
import './App.css';
import {Route, withRouter, Redirect, Switch, BrowserRouter} from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from 'react-redux';
import {initializeApp} from "./redux/app-reducer";
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/store-redux';
import {withSuspense} from "./hoc/withSuspense";
import {getUserHeaderData, getUserProfile, saveProfile} from "./redux/profile-reducer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ProfileEdit from "./components/Profile/ProfileInfo/ProfileEdit";

const LoginPage = React.lazy(() => import('./components/Login/LoginPage'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends Component {

    refreshProfile() {
        this.props.initializeApp();
        let userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserHeaderData(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.authorizedUserId !== prevProps.authorizedUserId) {
            this.refreshProfile();
        }
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div>
                <HeaderContainer/>
                <div className='app-wrapper'>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path='/login'
                                   render={withSuspense(LoginPage)}/>

                            <Route exact path='/'
                                   render={() => <Redirect to={"/profile"}/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs'
                                   render={withSuspense(DialogsContainer)}/>
                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>
                            <Route path='/news'
                                   render={() => <News/>}/>
                            <Route path='/music'
                                   render={() => <Music/>}/>
                            <Route path='/edit'
                                   render={() => <ProfileEdit
                                       profile={this.props.profile}
                                       isAuth={this.props.isAuth}
                                       saveProfile={this.props.saveProfile}
                                   />}/>
                            <Route path='/settings'
                                   render={() => <Settings/>}/>
                            <Route path='*'
                                   render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    authorizedUserId: state.auth.userId,
    profile: state.ProfilePage.profile,
    isAuth: state.auth.isAuth
})

let AppContainer = compose(
    withRouter,
    connect(
        mapStateToProps,
        {
            initializeApp,
            getUserHeaderData,
            getUserProfile,
            saveProfile
        })
)(App);

const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp;