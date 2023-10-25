import { Component } from 'react';

interface IInputState {
  val: string;
}

class Input extends Component<object, IInputState> {
  state = {
    val: '',
  };

  render() {
    const { val } = this.state;

    return (
      <input
        className="w-full rounded-full border border-white/20 bg-white/10 px-12 py-3 font-light text-gray-300 transition-all duration-200 hover:bg-white/20 focus:-translate-y-1.5 focus:outline-0 focus:ring focus:ring-white/20"
        placeholder="Type to Search..."
        type="text"
        value={val}
        onChange={(e) => this.setState({ val: e.target.value })}
      />
    );
  }
}

export default Input;
