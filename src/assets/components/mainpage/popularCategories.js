import React, { Component } from 'react'

import CategoryImage from '../../images/category.png';

export default class PopularCategories extends Component {
    render() {
        return (
            <div className="container popular-categories">
                <div className="row">
                    <div className="container-title">
                        Popular categories:
                    </div>
                    <div className="blocks-row">
                        <div className="block">
                            <a href="#">
                                <div className="image-block">
                                    <img src={CategoryImage} alt="category-image" />
                                </div>
                                <div className="content-block">
                                    <div className="category-title">
                                        Dishwasher
                                    </div>
                                    <div className="category-description">
                                        Drawer or Glides, Element or Burner,
                                        Filter, Fuse, Handle or Latch ..
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="block">
                            <a href="#">
                                <div className="image-block">
                                    <img src={CategoryImage} alt="category-image" />
                                </div>
                                <div className="content-block">
                                    <div className="category-title">
                                        Dishwasher
                                    </div>
                                    <div className="category-description">
                                        Drawer or Glides, Element or Burner,
                                        Filter, Fuse, Handle or Latch ..
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="block">
                            <a href="#">
                                <div className="image-block">
                                    <img src={CategoryImage} alt="category-image" />
                                </div>
                                <div className="content-block">
                                    <div className="category-title">
                                        Dishwasher
                                    </div>
                                    <div className="category-description">
                                        Drawer or Glides, Element or Burner,
                                        Filter, Fuse, Handle or Latch ..
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="block">
                            <a href="#">
                                <div className="image-block">
                                    <img src={CategoryImage} alt="category-image" />
                                </div>
                                <div className="content-block">
                                    <div className="category-title">
                                        Dishwasher
                                    </div>
                                    <div className="category-description">
                                        Drawer or Glides, Element or Burner,
                                        Filter, Fuse, Handle or Latch ..
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="block">
                            <a href="#">
                                <div className="image-block">
                                    <img src={CategoryImage} alt="category-image" />
                                </div>
                                <div className="content-block">
                                    <div className="category-title">
                                        Dishwasher
                                    </div>
                                    <div className="category-description">
                                        Drawer or Glides, Element or Burner,
                                        Filter, Fuse, Handle or Latch ..
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="block">
                            <a href="#">
                                <div className="image-block">
                                    <img src={CategoryImage} alt="category-image" />
                                </div>
                                <div className="content-block">
                                    <div className="category-title">
                                        Dishwasher
                                    </div>
                                    <div className="category-description">
                                        Drawer or Glides, Element or Burner,
                                        Filter, Fuse, Handle or Latch ..
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
