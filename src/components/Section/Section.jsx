import { forwardRef } from 'react';


export const SectionBase = forwardRef((props, ref) => {
    return (
      <section ref={ref} {...props} />
    );
  });

  export const WrappedSection = (Component) => {
    const WrappedComponent = forwardRef((props, ref) => {
      return <Component innerRef={ref} {...props} />;
    });
  
    return WrappedComponent;
  };