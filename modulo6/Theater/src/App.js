import Router from "./Routes/Router";
import GlobalStyle from "./Global/GlobalStyle"

export const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Router />
    </div>
  )
}