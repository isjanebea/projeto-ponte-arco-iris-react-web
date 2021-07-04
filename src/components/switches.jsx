import React from 'react';
import Switch from '@material-ui/core/Switch';
import NavBarHooks from '../hooks/navbar';


export default function Switches() {
  const { ToggleTheme, theme } = NavBarHooks();
  const handleChange = (event) => {
    ToggleTheme()
  };

  return (
    <div>
      <Switch
        checked={theme.use=='dark'}
        onChange={handleChange}
        name="themeProvider"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}