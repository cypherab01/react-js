import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleCounterAdd = (value: number) => {
    setCounter((prevValue) => prevValue + value);
    console.log(counter + value);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const buttonClass =
    "px-4 py-2 rounded-sm hover:bg-black hover:text-white cursor-pointer border-2";

  const CounterButton = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <button onClick={() => handleCounterAdd(value)} className={buttonClass}>
      {label}
    </button>
  );

  return (
    <div className="flex items-center justify-center flex-col h-[100dvh] w-[100dvw] gap-6">
      <h2 className="text-2xl font-medium">Counter</h2>
      <h1 className="text-8xl font-bold">{counter}</h1>
      <div className="flex items-center justify-center gap-4">
        <CounterButton value={5} label="+5" />
        <CounterButton value={1} label="+1" />
        <CounterButton value={10} label="+10" />
      </div>
      <button onClick={handleReset} className={buttonClass}>
        Reset
      </button>
    </div>
  );
}

export default App;
