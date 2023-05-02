import "./App.css";
import "../src/assets/crud.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Navbar from "./components/visual/Navbar";

import { ReactQueryDevtools } from "react-query/devtools";
import RoutesList from "./utils/RouteList";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
        <RoutesList></RoutesList>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
