import { memo, useEffect, useRef } from 'react';

interface StateButtonsProps {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
}

const appendRerenderSign = (element: HTMLElement) => {
  const rerenderSignElement = document.createElement('span');
  rerenderSignElement.classList.add('rerender-sign');
  element.appendChild(rerenderSignElement);
  setTimeout(() => element.removeChild(rerenderSignElement), 900);
};

const StateButton = memo(({ children, onClick, disabled }: StateButtonsProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if(ref.current) {
      appendRerenderSign(ref.current);
    }
  });

  return (
    <button
      onClick={onClick}
      ref={ref}
      disabled={disabled}>
      {children}
    </button>
  );
});

export default StateButton;