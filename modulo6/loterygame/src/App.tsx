import Router from "./Routes/Router";
import { MainPage } from "./style";
import GlobalStyle from "./globalStyles";

function App() {

  return (
    <MainPage>
      <GlobalStyle/>
      <Router />
    </MainPage>
  );
}

export default App;
