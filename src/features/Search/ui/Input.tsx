import { Component, SyntheticEvent } from 'react';

interface IInputState {
  val: string;
}

interface IInputProps {
  value?: string;
  onChange?: (newVal: string) => void;
}

class Input extends Component<IInputProps, IInputState> {
  state = {
    val: this.props.value ?? '',
  };

  handleChange = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;

    this.props.onChange?.(value);
    this.setState({ val: value });
  };

  render() {
    return (
      <input
        className="peer w-full rounded-full border-l border-t border-white/20 bg-white/10 px-12 py-3 font-light text-gray-300 transition-all duration-200 hover:bg-white/20 focus:-translate-y-0.5 focus:border-transparent focus:outline-0 focus:ring focus:ring-lime-300"
        placeholder="Type to Search..."
        type="text"
        value={this.state.val}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
