 <h1>React Counter</h1>
      <h2 className={count > 0 ? "pos" : count < 0 ? "neg" : ""}>{count}</h2>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increment (+)</button>
        <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)} className="btn">Increment (+)</button>
        <button onClick={() => setCount(count - 1)} className="btn">Decrement (-)</button>
        <button onClick={() => setCount(0)} className="btn">Reset</button>
      </div>
    </div>
  );
