import BarChartChartUserRegisterbyMonth from "./components/BarChartChartUserRegisterbyMonth";
import ColumnChartCountPercentageCatgories from "./components/ColumnChartCountPercentageCatgories";
import LineChartChartUserRegisterbyMonth from "./components/LineChartChartUserRegisterbyMonth";
import PieChartCountPercentageCatgories from "./components/PieChartCountPercentageCatgories";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col">
            <BarChartChartUserRegisterbyMonth />
          </div>
          <div class="col">
            <LineChartChartUserRegisterbyMonth />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <PieChartCountPercentageCatgories />
          </div>
          <div class="col">
            <ColumnChartCountPercentageCatgories />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
