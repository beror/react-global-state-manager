import { memo, useEffect, useRef } from 'react';

interface StateButtonsProps {
  children: string;
  onClick?: () => void;
}

const StateButton = memo(({ children, onClick }: StateButtonsProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if(ref.current) {
      appendRerenderSign(ref.current);
    }
  });

  const appendRerenderSign = (element: HTMLElement) => {
    const rerenderSignElement = document.createElement('span');
    rerenderSignElement.classList.add('test');
    element.appendChild(rerenderSignElement);
    setTimeout(() => element.removeChild(rerenderSignElement), 900);
  };

  return (
    <button
      onClick={onClick}
      ref={ref}>
      {children}
    </button>
  );
});

export default StateButton;