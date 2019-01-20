import React from 'react'
import {MobileContext, initial} from '../mobile-context'

class Resize extends React.Component {
    constructor(props) {
        super(props);

        this.handleResize = e => {
            const innerWidth = e.target.innerWidth;
            console.log('window was resized');
            this.setState({
                windowWidth: innerWidth,
                isMobile:
                innerWidth <= 1024
                ? true
                : false
            });
        }

        this.state = {
            windoWidth: initial.windowWidth,
            isMobile: initial.isMobile,
            handleResize: this.handleResize,
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <MobileContext.Provider value={this.state}>
            {this.props.children}
            </MobileContext.Provider>
        )
    }
}

export default Resize;
