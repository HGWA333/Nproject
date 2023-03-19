import "./App.css";
import { useWeb3 } from "./useWeb3";
import Sample1 from "./components/Sample1/Sample1";
import Sample2 from "./components/Sample2/Sample2";
import Test from "./components/Test/Test";

function App() {
  const [web3, account] = useWeb3();

  // if (!account) return <>메타 마스크를 설치해 주세요</>;
  return (
    <div className="App">
      <Sample1 />
      <Sample2 />
      <Test />
    </div>
  );
}

export default App;
