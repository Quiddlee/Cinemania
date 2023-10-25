import { Component } from 'react';

interface ISearchBtnProps {
  onClick?: () => void;
}

class Button extends Component<ISearchBtnProps> {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="absolute bottom-0 right-0 top-0 m-auto scale-105 rounded-full bg-lime-400 px-6 py-3 font-semibold text-gray-950 transition-all duration-200 hover:scale-110 focus:outline-0 focus:ring focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-black/70 active:scale-105 active:duration-75 peer-focus:-translate-y-0.5"
        type="button">
        Search
      </button>
    );
  }
}

export default Button;
