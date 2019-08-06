import React from 'react';


const AllCource = () => {
    return (
        <div>
            <div className="update_cource" data-aos="fade-left">
                <div className="container">
                    <h2 className="text-center">All-Cources</h2>
                    <hr className="star_border"></hr>
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-12" >
                            <div className="card">
                                <div className="card-header text-center">
                                    <a href="/">Special title treatment</a>
                                </div>
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
                        <div className="col-xl-4 col-md-4 col-sm-12">
                            <div className="card">
                                <div className="card-header text-center">
                                    <a href="/">Special title treatment</a>
                                </div>
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
                        <div className="col-xl-4 col-md-4 col-sm-12">
                            <div className="card">
                                <div className="card-header text-center">
                                    <a href="/">Special title treatment</a>
                                </div>
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
    );
};


export default AllCource;
