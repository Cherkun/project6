import React, {Component} from 'react'
import FilterLink from '../containers/FilterLink'
import * as VisibilityFilters from '../constants/VisibilityFilters'
import CartContainer from '../containers/CartContainer';
import {Link} from 'react-router-dom'
import {verify,logout} from '../actions/UserActions'
import {connect} from 'react-redux'

class Header extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.actions.verify();
    }

    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-light fixed-top flex-column flex-md-row">
                <a className="navbar-brand" href="#">The FriendList</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav mr-auto">
                        <FilterLink filter={VisibilityFilters.ALL}>
                            all
                        </FilterLink>
                        <FilterLink filter={VisibilityFilters.FRIENDS}>
                            friends
                        </FilterLink>
                        <FilterLink filter={VisibilityFilters.WORK}>
                            work
                        </FilterLink>
                        <FilterLink filter={VisibilityFilters.STUDY}>
                            study
                        </FilterLink>
                        <FilterLink filter={VisibilityFilters.STARRED}>
                            stared
                        </FilterLink>
                        <li className={"nav-item"}><Link className={'nav-item nav-link'} to="/user/swiper">
                            swiper
                        </Link></li>
                        {
                            !this.props.user.isHasUser ? (
                                <li className={"nav-item"}><Link className={'nav-item nav-link'} to="/user/login">
                                    login
                                </Link></li>
                            ) : (
                                <li className={"nav-item"}><button className={'nav-item nav-link'} onClick={this.props.actions.logout}>
                                    logout
                                </button></li>
                            )
                        }
                    </ul>
                    <CartContainer/>
                </div>
            </header>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            verify: (values) => {
                dispatch(verify(values));
            },
            logout: (values) => {
                dispatch(logout(values));
            },
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)