import { themeStore } from "./components/Header/store";
import { RoutesComponent } from "./routes";

function App() {
  themeStore.getDarkModeByStorage();

  return <RoutesComponent />;
}

export default App;
