import { Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';

export default function Temp() {
  const [isShowing, setIsShowing] = useState(false);

  // Use useEffect to trigger the translation after the component mounts
  useEffect(() => {
    setIsShowing(true);
  }, []);

  return (
    <div className="flex flex-col items-center py-16">
      <Transition
        as={Fragment}
        show={isShowing}
        enter="transform transition duration-[400ms]"
        enterFrom="translate-x-[-50%]"
        enterTo="translate-x-0"
        leave="transform duration-500 transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-[-50%]"
      >
        {/* Your content goes here */}
        <div className="h-32 w-32 rounded-md bg-blue-300 shadow-lg">
          {/* Content of the box */}
        </div>
      </Transition>
    </div>
  );
}
