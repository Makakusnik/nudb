import { useState } from 'react';
import { TbListSearch } from 'react-icons/tb';

const SearchBar = () => {
  const [isFocused, setFocus] = useState<boolean>(true);
  return (
    <form className="mx-auto w-fit rounded-md bg-white p-4" role="search">
      <div
        className={`flex items-center rounded-md bg-slate-50 px-4 transition-shadow delay-75 duration-300  ${
          isFocused ? 'ring-4 ring-teal-400/30' : ''
        }`}
      >
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          aria-label="Search for product"
          type="text"
          className="h-12 rounded-lg border-transparent bg-transparent text-xl placeholder:opacity-50"
          placeholder="Search for product..."
        />
        <TbListSearch
          className={`flex text-teal-200/80 transition-all duration-300 ${
            isFocused ? 'scale-125 text-teal-400/80' : ''
          }`}
          size={32}
        />
      </div>
    </form>
  );
};

export default SearchBar;
