import useCounter from "./useCounter";

const HookCustoms = () => {
  // const [count, setCount] = useState(0);

  const [count  , Increment , Decrement] = useCounter();

  // const Increment = () => {
  //   setCount(count + 1);
  // };

  // const Decrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      <div>
        <span className="button">{count}</span>
        <button className="button" onClick={Increment}>
          +
        </button>
        <button className="button" onClick={Decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default HookCustoms;
