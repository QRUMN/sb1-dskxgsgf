import React from 'react';
import * as Progress from '@radix-ui/react-progress';

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(0);

  return (
    <Progress.Root
      className="relative overflow-hidden bg-gray-200 rounded-full w-[300px] h-[25px]"
      value={progress}
    >
      <Progress.Indicator
        className="w-full h-full bg-blue-500 transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressDemo; 