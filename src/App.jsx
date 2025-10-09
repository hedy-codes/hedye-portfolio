import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <h1>
                <Layout />
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
