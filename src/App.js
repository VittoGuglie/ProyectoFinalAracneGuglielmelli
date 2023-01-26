import ShopProvider from "./context/ShopProvider";
import MainNavigator from "./Navigations";

function App() {
  return (
    <ShopProvider>
      <MainNavigator />
    </ShopProvider>
  );
}

export default App;
