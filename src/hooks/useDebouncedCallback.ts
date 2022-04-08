import { useCallback, useRef } from "react";

function useDebouncedCallback<D>(
    callback: Function,
    delay= 300
): Function {
    const timeOutRef = useRef<NodeJS.Timeout>();

    return useCallback(
      (...arg) => {
          if(timeOutRef.current) {
              clearTimeout(timeOutRef.current);
          }

          return new Promise<D>(resolve => {
            timeOutRef.current = setTimeout(() => {
                resolve(callback(...arg));
            }, delay)
          })

      }, [callback, delay]
    )
}

export default useDebouncedCallback;