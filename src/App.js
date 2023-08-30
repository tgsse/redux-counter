import Counter from './components/Counter/Counter';
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";


function App() {
  return (
      <>
        <Header></Header>
        <Auth></Auth>
        <Counter />
      </>
  );
}
/**TODO
 *  - click login btn -> log in user
 *  - click logout btn -> log out user
 *  -
 *
 * */
export default App;
