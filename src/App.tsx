import { BrowserRouter } from "react-router-dom";
import { Navigation } from "shared/router/Navigation";
import { GlobalStyle } from "styles/global";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navigation />
    </BrowserRouter>
  );
};

export default App;
