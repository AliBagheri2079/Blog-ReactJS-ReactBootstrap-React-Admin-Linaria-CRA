import SSRProvider from "react-bootstrap/SSRProvider";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarLayout from "../layout/Navbar";

const App = () => {
  return (
    <>
      <SSRProvider>
        <ThemeProvider
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
          minBreakpoint="xxs"
        >
          <NavbarLayout />
          {/* Home from pages folder */}
        </ThemeProvider>
      </SSRProvider>
    </>
  );
};

export default App;
