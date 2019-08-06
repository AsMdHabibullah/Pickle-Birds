import React from 'react';
import { NavLink } from 'react-router-dom';

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <main class="posts-listing col-lg-8">
                        <div class="container">
                            <div class="row">
                                <div class="post col-xl-6">
                                    <div class="post-thumbnail"><NavLink to="/blog-post-details"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/blog-post-1.jpeg" alt="..." class="img-fluid" /></NavLink></div>
                                    <div class="post-details">
                                        <div class="post-meta d-flex justify-content-between">
                                            <div class="date meta-last">20 May | 2016</div>
                                            <div class="category"><a href="#">Business</a></div>
                                        </div><a href="post.html">
                                            <h3 class="h4">Alberto Savoia Can Teach You About Interior</h3></a>
                                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        <footer class="post-footer d-flex align-items-center"><a href="#" class="author d-flex align-items-center flex-wrap">
                                            <div class="avatar"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/avatar-3.jpg" alt="..." class="img-fluid" /></div>
                                            <div class="title"><span>John Doe</span></div></a>
                                            <div class="date"><i class="icon-clock"></i> 2 months ago</div>
                                            <div class="comments meta-last"><i class="icon-comment"></i>12</div>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination pagination-template d-flex justify-content-center">
                                    <li class="page-item"><a href="#" class="page-link"> <i class="fa fa-angle-left"></i></a></li>
                                    <li class="page-item"><a href="#" class="page-link active">1</a></li>
                                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                                    <li class="page-item"><a href="#" class="page-link">3</a></li>
                                    <li class="page-item"><a href="#" class="page-link"> <i class="fa fa-angle-right"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </main>
                    <aside class="col-lg-4">

                        <div class="widget search">
                            <header>
                                <h3 class="h6">Search the blog</h3>
                            </header>
                            <form action="#" class="search-form">
                                <div class="form-group">
                                    <input type="search" placeholder="What are you looking for?" />
                                    <button type="submit" class="submit"><i class="icon-search"></i></button>
                                </div>
                            </form>
                        </div>
                        <div class="widget latest-posts">
                            <header>
                                <h3 class="h6">Latest Posts</h3>
                            </header>
                            <div class="blog-posts"><a href="#">
                                <div class="item d-flex align-items-center">
                                    <div class="image"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/small-thumbnail-1.jpg" alt="..." class="img-fluid" /></div>
                                    <div class="title"><strong>Alberto Savoia Can Teach You About</strong>
                                        <div class="d-flex align-items-center">
                                            <div class="views"><i class="icon-eye"></i> 500</div>
                                            <div class="comments"><i class="icon-comment"></i>12</div>
                                        </div>
                                    </div>
                                </div></a><a href="#">
                                    <div class="item d-flex align-items-center">
                                        <div class="image"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/small-thumbnail-2.jpg" alt="..." class="img-fluid" /></div>
                                        <div class="title"><strong>Alberto Savoia Can Teach You About</strong>
                                            <div class="d-flex align-items-center">
                                                <div class="views"><i class="icon-eye"></i> 500</div>
                                                <div class="comments"><i class="icon-comment"></i>12</div>
                                            </div>
                                        </div>
                                    </div></a><a href="#">
                                    <div class="item d-flex align-items-center">
                                        <div class="image"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/small-thumbnail-3.jpg" alt="..." class="img-fluid" />
                                        </div>
                                        <div class="title"><strong>Alberto Savoia Can Teach You About</strong>
                                            <div class="d-flex align-items-center">
                                                <div class="views"><i class="icon-eye"></i> 500</div>
                                                <div class="comments"><i class="icon-comment"></i>12</div>
                                            </div>
                                        </div>
                                    </div></a></div>
                        </div>
                        <div class="widget categories">
                            <header>
                                <h3 class="h6">Categories</h3>
                            </header>
                            <div class="item d-flex justify-content-between"><a href="#">Growth</a><span>12</span></div>
                            <div class="item d-flex justify-content-between"><a href="#">Local</a><span>25</span></div>
                            <div class="item d-flex justify-content-between"><a href="#">Sales</a><span>8</span></div>
                            <div class="item d-flex justify-content-between"><a href="#">Tips</a><span>17</span></div>
                            <div class="item d-flex justify-content-between"><a href="#">Local</a><span>25</span></div>
                        </div>
                        <div class="widget tags">
                            <header>
                                <h3 class="h6">Tags</h3>
                            </header>
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="#" class="tag">#Business</a></li>
                                <li class="list-inline-item"><a href="#" class="tag">#Technology</a></li>
                                <li class="list-inline-item"><a href="#" class="tag">#Fashion</a></li>
                                <li class="list-inline-item"><a href="#" class="tag">#Sports</a></li>
                                <li class="list-inline-item"><a href="#" class="tag">#Economy</a></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}

export default BlogPost;