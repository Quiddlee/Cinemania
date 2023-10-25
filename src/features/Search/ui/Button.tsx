import { Component } from 'react';

interface ISearchBtnProps {
  onClick?: () => void;
}

class Button extends Component<ISearchBtnProps> {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="rounded-full bg-lime-400 px-6 py-3 font-medium text-gray-950 transition-all duration-200 hover:bg-lime-500 active:scale-95"
        type="button">
        Search
      </button>
    );
  }
}

export default Button;
