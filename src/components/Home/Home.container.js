import React, { Component } from 'react';
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import { ClientContext } from 'contexts/ClientContext';
import Sections from './Sections';

class Home extends Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
  }

  getContentPosition = () => {
    const currentRef = this.contentRef.current;
    const positions = currentRef.getBoundingClientRect();

    return positions.top;
  };

  render() {
    return (
      <div id="home">
        <ClientContext.Consumer>
          {({ wHeight, scrollY }) => (
            <Hero
              scrollY={scrollY}
              wHeight={wHeight}
              getContentPosition={this.getContentPosition}
            />
          )}
        </ClientContext.Consumer>

        <Sections forwardedRef={this.contentRef}>
          {/* Template sections here */}
          <Footer />
        </Sections>
      </div>
    );
  }
}

export default Home;
