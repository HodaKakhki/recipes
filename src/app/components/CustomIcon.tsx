import React from 'react'

type CustomIconProps = {
    color: string;
    // add any other props if needed
  };

  const CustomIcon: React.FC<CustomIconProps> = ({ color }) => {
    return <svg style={{ fill: color }} />;
  };
  
  export default CustomIcon;
