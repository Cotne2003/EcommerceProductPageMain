import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [numOfCouple, setNumOfCouple] = useState(0);
  const [cartNotification, setCartNotification] = useState(0);
  return (
    <>
      <Header numOfCouple={numOfCouple} cartNotification={cartNotification} />
      <Main
        numOfCouple={numOfCouple}
        setNumOfCouple={setNumOfCouple}
        cartNotification={cartNotification}
        setCartNotification={setCartNotification}
      />
    </>
  );
}

export default App;
