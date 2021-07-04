import React from 'react';
import Switch from '@material-ui/core/Switch';
import NavBarHooks from '../hooks/navbar';


export default function Switches() {
  const [state, setState] = React.useState(false);
  const { ToggleTheme } = NavBarHooks();
  const handleChange = (event) => {
    ToggleTheme()
    setState(event.target.checked);
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="themeProvider"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}