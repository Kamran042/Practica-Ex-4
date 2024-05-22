import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("false");
  const [data, setdata] = useState([]);
  const [basket, setBasket] = useState([]);
  const [inpVal, setInpVal] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const router = createBrowserRouter(ROUTES);
  useEffect(() => {
    axios.get("http://localhost:8080/api/examfour").then((resp) => {
      setdata([...resp.data]);
    });
  }, []);
  return (
    <>
      <MainContext.Provider
        value={{
          data,
          setdata,
          loading,
          setLoading,
          error,
          setError,
          inpVal,
          setInpVal,
          basket,
          setBasket,
          sortBy,
          setSortBy,
        }}
      >
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}

export default App;
