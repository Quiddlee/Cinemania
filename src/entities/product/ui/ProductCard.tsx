import { Component } from 'react';

class ProductCard extends Component {
  render() {
    return (
      <li className="grid w-64 gap-4 rounded-[2.5rem] bg-neutral-950 p-4 text-gray-100">
        <img
          className="rounded-[2rem]"
          src="https://upload.wikimedia.org/wikipedia/en/f/fb/Shazam%21_Fury_of_the_Gods_%282023%29_Main_Poster.png"
          alt="The poster of Shazam! Fury of the Gods film"
        />
        <article className="truncate p-2">
          <h2 className="truncate text-xl">Shazam! Fury of the Gods</h2>
          <p className="truncate text-gray-400">
            American superhero film based on the DC character Shazam. Produced
            by New Line Cinema, DC Studios, and the Safran Company, and
            distributed by Warner Bros.
          </p>
          <p className="text-gray-400">Action/Adventure</p>
        </article>
      </li>
    );
  }
}

export default ProductCard;
