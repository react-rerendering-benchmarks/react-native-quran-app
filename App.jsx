import { memo } from "react";
import store from "./src/store/store";
import { Provider } from "react-redux";
import MainApp from "./src/MainApp";
import CustomStatusBar from "./src/components/CustomStatusBar";
const App = memo(() => {
  return <>
      <Provider store={store}>
        <CustomStatusBar />
        <MainApp />
      </Provider>
    </>;
});
export default App;