import React from 'react';

import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} className={classes.myInput} />;
});

MyInput.displayName = 'My Input';

export default MyInput;
