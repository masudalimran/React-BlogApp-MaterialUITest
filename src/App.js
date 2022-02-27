import { Route, Routes } from "react-router-dom";
import DataGridComponent from "./components/DataGridComponent";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="data-grid" element={<DataGridComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
