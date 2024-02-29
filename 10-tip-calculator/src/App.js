import { useState } from "react";
import InputField from "./InputField";
import TipSelect from "./TipSelect";
import BillText from "./BillText";
import Reset from "./Reset";

function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const avgTip = (myTip + friendTip > 0 ? bill * (((myTip + friendTip) / 2) / 100) : 0);

  function resetState() {
    setBill(0);
    setMyTip(0);
    setFriendTip(0);
  }


  return (
    <div>
      <InputField text="How much was the bill?">
        <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
      </InputField>
      <InputField text="How did you like the service?">
        <TipSelect value={myTip} onChange={setMyTip} />
      </InputField>
      <InputField text="How did your friend like the service?">
        <TipSelect value={friendTip} onChange={setFriendTip} />
      </InputField>
      {bill > 0 &&
        <>
          <BillText bill={bill} avgTip={avgTip} />
          <Reset onClick={resetState} />
        </>
      }
    </div>
  );
}

export default App;
