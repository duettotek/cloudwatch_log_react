import React from 'react';
import Switch from '@material-ui/core/Switch';
import LineDemo from './component/LineDemo'
import HorizontalBarDemo from './component/HorizontalBarDemo'
import BarDemo from './component/BarDemo'

function App() {

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      {state.checkedA ? <BarDemo /> : <LineDemo />}
    </div>

  );
}

export default App;
