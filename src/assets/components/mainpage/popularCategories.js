import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import VacuumCleaner from '../../images/thumbnails/category/vacuum-cleaner.png';
import Dishwasher from '../../images/thumbnails/category/dishwasher.png';
import Freezer from '../../images/thumbnails/category/freezer.png';
import Fridge from '../../images/thumbnails/category/fridge.png';
import Multicooker from '../../images/thumbnails/category/multicooker.png';
import WashingMachine from '../../images/thumbnails/category/washing-machine.png';


export default class PopularCategories extends Component {
    render() {
        return (
            <div className="container popular-categories">
                <div className="row">
                    <div className="container-title">
                        Популярні категорії:
                    </div>
                    <div className="blocks-row">
                        <div className="block">
                            <NavLink to="/catalog">
                                <div className="image-block">
                                    <img src={VacuumCleaner} alt="category-image" />
                                </div>
                                <div className="content-block">
                                    <div className="category-title">
                                        Пилососи
                                    </div>
                                    <div className="category-description">
                                        Drawer or Glides, Element or Burner,
                                        Filter, Fuse, Handle or Latch ..
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="block">
                            <NavLink to="/catalog">
                                <div className="image-block">
                                    <img src={Multicooker} alt="category-image" />
                                </div>
                                <div className="content-block">
                                    <div className="category-title">
                                        Мультиварки
                                    </div>
                                    <div className="category-description">
                                        Drawer or Glides, Element or Burner,
                                        Filter, Fuse, Handle or Latch ..
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="block">
                            <NavLink to="/catalog">
                                <div className="image-block">
                                    <img src={Freezer} alt="category-image" />
                                </div>
                                <div className="content-block">
                                    <div className="category-title">
                                        Морозильні камери
                                    </div>
                                    <div className="category-description">
                                        Drawer or Glides, Element or Burner,
                                        Filter, Fuse, Handle or Latch ..
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="block">
                            <NavLink to="/catalog">
                                <div className="image-block">
                                    <img src={WashingMachine} alt="category-image" />
                                </div>
                                <div className="content-block">
                                    <div className="category-title">
                                        Пральні машини
                                    </div>
                                    <div className="category-description">
                                        Drawer or Glides, Element or Burner,
                                        Filter, Fuse, Handle or Latch ..
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="block">
                            <NavLink to="/catalog">
                                <div className="image-block">
                                    <img src={Dishwasher} alt="category-image" />
                                </div>
                                <div className="content-block">
                                    <div className="category-title">
                                        Посудомийні машини
                                    </div>
                                    <div className="category-description">
                                        Drawer or Glides, Element or Burner,
                                        Filter, Fuse, Handle or Latch ..
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="block">
                            <NavLink to="/catalog">
                                <div className="image-block">
                                    <img src={Fridge} alt="category-image" />
                                </div>
                                <div className="content-block">
                                    <div className="category-title">
                                        Холодильники
                                    </div>
                                    <div className="category-description">
                                        Drawer or Glides, Element or Burner,
                                        Filter, Fuse, Handle or Latch ..
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
