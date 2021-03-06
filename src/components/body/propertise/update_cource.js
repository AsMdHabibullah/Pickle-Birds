import React from 'react';
import { NavLink } from "react-router-dom";



const UpdateCource = () => {

    return (

        <div className="update_cource">
            <div className="container" data-aos="fade-right">
                <img src={`${process.env.PUBLIC_URL}/assets/images/card.png`} alt="" />
                <div className="row">
                    <div className="col-xl-4 col-md-4 col-sm-12 cource">
                        <h2 className="text-center">
                            Cources
                            <hr className="star_border"></hr>
                        </h2>
                    </div>
                    <div className="col-xl-8 col-md-8 col-sm-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-header text-center">
                                            <a href="/">Special title treatment</a>
                                        </div>
                                        <button className="btn btn-info buy_btn"><NavLink to="/log-in">Buy</NavLink></button>
                                        <div className="card-body">
                                            <a href="/">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/profile.png`} alt="" />
                                            </a>
                                        </div>
                                        <div className="card-footer text-muted">
                                            <h5>Tag: Django, ReactJs</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-md-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-header text-center">
                                            <a href="/">Special title treatment</a>
                                        </div>
                                        <button className="btn btn-info buy_btn"><NavLink to="/log-in">Buy</NavLink></button>
                                        <div className="card-body">
                                            <a href="/">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/profile.png`} alt="" />
                                            </a>
                                        </div>
                                        <div className="card-footer text-muted">
                                            <h5>Tag: Django, ReactJs</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-md-6 col-sm-12">
                                    <div className="card">
                                        <div className="card-header text-center">
                                            <a href="/">Special title treatment</a>
                                        </div>
                                        <button className="btn btn-info buy_btn"><NavLink to="/log-in">Buy</NavLink></button>
                                        <div className="card-body">
                                            <a href="/">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/profile.png`} alt="" />
                                            </a>
                                        </div>
                                        <div className="card-footer text-muted">
                                            <h5>Tag: Django, ReactJs</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default UpdateCource;
