import React, {useEffect, useRef} from 'react';

function useUpdateEffect(cb: () => void, deps: React.DependencyList) {
  const rendered = useRef(false);
  useEffect(() => {
    if (rendered.current) {
      cb();
    } else {
      rendered.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useUpdateEffect;
