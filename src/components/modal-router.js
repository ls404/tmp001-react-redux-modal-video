import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ModalContent from './modal-content';

import classes from './modal-router.css';

const modalPathName = '/popup';

class ModalSwitch extends Component {

    componentWillUpdate(nextProps) {
        const { location } = this.props;
        // set previousLocation if props.location is not modal
        if (nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)) {
            this.previousLocation = this.props.location;
        }
    }

    render() {
        const { location, match } = this.props;
        const isModal = (location.state && location.state.modal
            && this.previousLocation !== location); // not initial render
        console.log(`The pop-up window is ${isModal ? 'open' : 'closed'}!`);
        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path={match.path} component={ModalHome}/>
                    <Route path={modalPathName} component={ModalContent}/>
                </Switch>
                {isModal ? <Route path={modalPathName} component={ModalWindow} /> : null}
            </div>
        );
    }
}

const ModalHome = () => {
    return (
        <div>
            <Link 
                className={classes.button}
                to={{
                    pathname: modalPathName,
                    state: { modal: true } }}>
                Open Popup
            </Link>
        </div>
    );
}

const ModalWindow = ({ history }) => {
    const back = (ev) => {
        ev.stopPropagation();
        history.goBack();
    }
    const stay = (ev) => {
        ev.stopPropagation();
    }
    return (
        <div onClick={back} className={classes['modal-background']}>
            <div className={classes.modal} onClick={stay} >
                <button type='button' className={classes['close-btn']} onClick={back} />
                <ModalContent />
            </div>
        </div>
    );
}

const ModalRouter = () => {
    return (
        <Router>
            <Route component={ModalSwitch} />
        </Router>
    );
}

export default ModalRouter;