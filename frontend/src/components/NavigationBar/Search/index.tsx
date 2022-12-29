import { useState } from 'react';
import type { FormEvent } from 'react';
import { TbListSearch } from 'react-icons/tb';

export const SearchBar = () => {
  const [isFocused, setFocus] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className={`absolute left-0 top-0 min-h-[110%] min-w-full bg-transparent transition-colors ${
          isFocused ? 'z-[-1] bg-gray-500/40' : 'z-[-99]'
        } `}
      />
      <form
        className={`mx-auto max-w-xl rounded-lg bg-white p-4 transition-transform duration-300 ${
          isFocused ? 'scale-110' : ''
        }`}
        role="search"
        onSubmit={handleSubmit}
      >
        <div
          className={`z-10 flex items-center rounded-md bg-slate-50 px-4 transition-shadow delay-75 duration-300 ${
            isFocused ? 'ring-4 ring-teal-400/30' : ''
          }`}
        >
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            aria-label="Search for product"
            type="text"
            className="flex h-12 flex-1 rounded-lg border-transparent bg-transparent text-xl placeholder:opacity-50"
            placeholder="Search for product..."
            style={{ minWidth: '16ch', width: '12rem' }}
          />
          <TbListSearch
            className={`flex text-teal-200/50 transition-all duration-300 ${isFocused ? ' text-teal-300/70' : ''}`}
            size={32}
          />
        </div>
      </form>
    </>
  );
};
