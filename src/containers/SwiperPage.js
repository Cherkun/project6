import React, {Component} from 'react'
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css'
import './swiper.css'
import SwiperForm from './SwiperForm'
import LoginForm from './LoginForm'
import {register, login} from '../actions/UserActions'
import {connect} from 'react-redux'
import {FaFire} from 'react-icons/lib/fa'

class SwiperPage extends Component{
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const mySwiper = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            preloadImages: false,
            lazy: true
        };
        const childSwiper = {
            0: {
                image: 'https://livedemo00.template-help.com/wt_58888_v12/intense-landings/landing-shop/images/slide-1.jpg'
            }
            ,
            1: {
                image: 'https://livedemo00.template-help.com/wt_58888_v12/intense-landings/landing-shop/images/slide-2.jpg'
            }
            ,
            2: {
                image: 'https://livedemo00.template-help.com/wt_58888_v12/intense-landings/landing-shop/images/slide-3.jpg'
            }
            ,
        };
        return (
            <div>
                <section>
                    <div className={"swiper-block-outside swiper-style-1"}>
                        <Swiper {...mySwiper}>
                            {
                                Object.keys(childSwiper).map((i) => {
                                    return (
                                        <div className={"swiper-slide"} key={i}>
                                            <div data-background={childSwiper[i].image} className="swiper-lazy">
                                                <div className="swiper-lazy-preloader"></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Swiper>
                        <div className="jumbotron-custom jumbotron-custom-variant-1 jumbotron-custom-outside">
                            <div className="container-fluid">
                                <div className="row justify-content-center justify-content-middle spacing-55">
                                    <div className="col-sm-5 col-md-5 context-dark">
                                        <h2>eCommerce Ready</h2>
                                        <p>We have included all you may need to build an Amazing eCommerce Website from
                                            a scratch. Create your successful business now!</p>
                                        <ul className="marked-list marked-list__marker-1 list-collumn-2">
                                            <li>Grid View;</li>
                                            <li>Shopping Cart Page;</li>
                                            <li>Checkout Page;</li>
                                            <li>Single Product Page.</li>
                                        </ul>
                                        <a className="btn btn-primary btn-effect-ujarak btn-square" href="#">Get
                                            template</a>
                                    </div>
                                    <div className="col-sm-6 col-lg-5">
                                        <div className="form-register-wrap">
                                            <h4>Register and get a discount</h4>
                                            {(this.props.page=='swiper')?<SwiperForm onSubmit={this.props.actions.register}/>:<LoginForm onSubmit={this.props.actions.login}/>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={"section-lg text-center bg-white"} id={"services"}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm services-cell">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className={"box-minimal-icon"}>
                                            <FaFire/>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        {this.props.page}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                Одна из трёх колонок
                            </div>
                            <div className="col-sm">
                                Одна из трёх колонок
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state, ownParams){
    return {
        page: ownParams.match.params.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            register: (values) => {
                dispatch(register(values));
            },
            login: (values) => {
                dispatch(login(values));
            },
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SwiperPage)