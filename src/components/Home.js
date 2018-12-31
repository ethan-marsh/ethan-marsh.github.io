import React, { Component } from "react";
import styled from "styled-components";

export default class Home extends Component {
  socialLinks = {
    linkedin: {
      href: "https://www.linkedin.com/in/ethan-marsh-50687296",
      icon: "icon-linkedin.png"
    },
    github: {
      href: "https://github.com/ethan-marsh",
      icon: "icon-github.png"
    },
    email: {
      href: "mailto:ethancmarsh@yahoo.com?subject=Saw%20Your%20Site!",
      icon: "icon-email.png"
    },
    phone: {
      href: "tel:+19257876250",
      icon: "icon-phone.png"
    }
  };

  componentDidUpdate() {
    const homeHght = document.querySelector("#home").offsetHeight + 1;
    const percentOf = (window.scrollY + 1) / homeHght;
    this.homeHeight = `${Math.floor(percentOf * 100)}%`;

    window.addEventListener("scroll", this.cdm());
  }

  cdm = () => {
    console.log(this.homeHeight);
  };

  scrollToAbout = el => {
    const start = el.getBoundingClientRect(),
      target = document.querySelector("#about").getBoundingClientRect(),
      scrollNeeded = target.top - start.top;

    const pos = scrollNeeded === 0 ? "--is-absolute" : "--is-fixed";
    const home = document.querySelector(".home");

    //make div fixed
    home.classList.add(pos);

    window.scrollBy({
      top: scrollNeeded,
      left: 0,
      behavior: "smooth"
    });

    //window.addEventListener("mouse", () => home.classList.remove(pos));
  };

  render() {
    return (
      <Content
        className="home-content"
        onClick={this.cdm}
        height={this.homeHeight || "100%"}
      >
        '
        <div className="home__title">
          <h1
            className="home__title-h1 tms-caption color-white weight-light mb-0"
            data-animate-in="preset:fadeIn;duration:1000ms;delay:100ms;"
            data-no-scale
          >
            Ethan Marsh
          </h1>
        </div>
        <div className="home__divider">
          <hr className="opacity-05" />
        </div>
        <div className="home__bottom">
          <h2
            className="home__bottom-subtitle tms-caption color-grey-light weight-light mb-20 mb-mobile-20"
            data-animate-in="preset:slideInDownShort;duration:1000ms;delay:1000ms;"
            data-no-scale
          >
            Front-End Web Developer / San Francisco
          </h2>
          <ButtonMore
            href="/"
            className="home__bottom-more"
            onClick={e => this.scrollToAbout(e.currentTarget)}
          >
            &or;
          </ButtonMore>
          <div className="home__bottom__links">
            <ul
              className="home__bottom__links-list tms-caption social-list list-horizontal no-margins"
              data-animate-in="preset:slideInDownShort;duration:1000ms;delay:1000ms;"
            >
              {Object.keys(this.socialLinks).map(key => (
                <li className="social-item" key={key}>
                  <a
                    href={this.socialLinks[key].href}
                    className={`social-link social-link--${key}`}
                  >
                    <img
                      className="social-link__icon"
                      src={`images/icons/${this.socialLinks[key].icon}`}
                      alt={`social icon for ${key}`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Content>
    );
  }
}

const ButtonMore = styled.button`
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    color: #6bf;
  }
`;
const Content = styled.div`
  height: ${props => props.height};
`;
