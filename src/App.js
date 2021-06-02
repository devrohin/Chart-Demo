import Line from './Line';
import Doughnut from './Doughnut';
import Linenivo from './LineNivo';
import Doughnutnivo from './Doughnutnivo';

function App() {
  return (
    <div>

      <h2>Nivo - Line Chart</h2>
      <div style={{ height: 400, width: 400, border: "3px solid #000000" }}>
        <Linenivo />
      </div>

      <h2>Nivo - Pie Chart</h2>
      <div style={{ height: 400, width: 400, border: "3px solid #000000" }}>
        <Doughnutnivo />
      </div>

      <Line />
      <Doughnut />
    </div>
  );
}

export default App;
