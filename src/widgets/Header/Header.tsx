import { Component, createRef } from 'react';

import { SCROLL_THRESHOLD } from './const/const.ts';
import { IChildren } from '../../shared/types/interfaces.ts';

class Header extends Component<IChildren> {
  containerRef = createRef<HTMLHeadElement>();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (!this.containerRef.current) return;

    const isThresholdScrolled =
      document.body.scrollTop > SCROLL_THRESHOLD ||
      document.documentElement.scrollTop > SCROLL_THRESHOLD;

    if (isThresholdScrolled) {
      this.containerRef.current.classList.add('backdrop-blur-xl');
    } else {
      this.containerRef.current.classList.remove('backdrop-blur-xl');
    }
  };

  render() {
    return (
      <header
        ref={this.containerRef}
        className="sticky top-0 z-10 flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-4 p-6 sm:gap-0 lg:px-12 xl:px-20">
        {this.props.children}
      </header>
    );
  }
}

export default Header;
