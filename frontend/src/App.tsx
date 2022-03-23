import React from "react";
import AllRoutes from "./AllRoutes";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <AllRoutes />
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Container h="100%">
    // <Box component={Container} display="flex" flexDirection="column" height="100vh" sx={{maxWidth: {xs: "80%", md: "70%"}}}>
    <AllRoutes />
    // </Box>
    // </Container>
  );
}

export default App;
