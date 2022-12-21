import { useContext, useRef, useState } from 'react';
import type { Product } from '@type/Product';

import { FoodDetailModal } from '@components/Modal/Data';

import { ModalContext } from '@context/ModalContext';
import { useOutsideClick } from '@hooks/useOutsideClick';

import { keyboardEventHandler } from '@lib/index';

import { CheckboxTableCell, NameTableCell, NutrientTableCell } from './Cells';

interface TableRowProps {
  data: Product;
}

export const TableRow = ({ data }: TableRowProps) => {
  const { setModalContent, setModalState, setCloseHandler } = useContext(ModalContext);
  const [isActive, setActive] = useState<boolean>(false);
  const [isFocused, setFocused] = useState<boolean>(false);

  const ref = useRef(null);

  const handleOutsideClick = () => {
    setActive(false);
  };

  const handleCloseModal = () => {
    console.log('closing');
    setActive(false);
  };

  const handleClick = () => {
    setActive(true);
    setCloseHandler && setCloseHandler(() => handleCloseModal);
    setModalContent && setModalContent(<FoodDetailModal product={data} />);
    setModalState && setModalState(true);
  };

  const handleFocused = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  useOutsideClick(ref, isActive, handleOutsideClick);

  return (
    <tr
      ref={ref}
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={keyboardEventHandler({ keys: 'Enter', handler: handleClick })}
      onFocus={handleFocused}
      onBlur={handleBlur}
      className={`relative isolate my-2 flex w-full min-w-fit cursor-pointer flex-row border-2 border-solid border-transparent py-1 transition-all duration-300  first:mt-0   even:bg-slate-100  
        hover:border-teal-500/30 hover:text-teal-700 focus:z-10 focus:bg-teal-500/10 focus:text-teal-700 focus:shadow-xl focus:even:bg-teal-500/10 lg:rounded-lg ${
          isActive ? 'bg-teal-500/10 text-teal-700 shadow-xl even:bg-teal-500/10' : ''
        }
        `}
    >
      <CheckboxTableCell>
        <input disabled className="h-5 w-5 cursor-pointer disabled:cursor-not-allowed" type="checkbox" />
      </CheckboxTableCell>
      <NameTableCell>{data.name}</NameTableCell>
      <NutrientTableCell>{data.energy}</NutrientTableCell>
      <NutrientTableCell>{data.fats}</NutrientTableCell>
      <NutrientTableCell>{data.proteins}</NutrientTableCell>
      <NutrientTableCell>{data.carbohydrates}</NutrientTableCell>
      <NutrientTableCell>{data.salt}</NutrientTableCell>
    </tr>
  );
};