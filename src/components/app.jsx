import React from "react";
import {BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom";
import PropTypes from "prop-types";
import offerPropType from "../types/offer";
import Main from "./main";
import Login from "./login";
import Favorites from "./favorites";
import Property from "./property";

const Offer = (props) => {
  let {id} = useParams();
  id = parseInt(id, 10);
  const offerResults = props.offers.filter((offer) => offer.id === id);

  if (offerResults.length === 1) {
    return <Property offer={offerResults[0]} />;
  } else {
    // 404 page
    return <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">Property not found</b>
                <p className="cities__status-description">Sorry, we could not find your requested property.</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
      <footer className="footer container">
        <Link to="/" className="footer__logo-link">
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>;
  }
};

Offer.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired
};

const App = (props) => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main offers={props.offers} />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/favorites">
        <Favorites favorites={props.offers} />
      </Route>
      <Route exact path="/offer/:id?">
        <Offer offers={props.offers} />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropType).isRequired
};

export default App;
