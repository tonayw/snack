import React from 'react';
import { useCounterPlusOne, useCounterMinusOne, useCounterReset } from './redux/hooks';

export default function CounterPage() {
  const { count, counterPlusOne } = useCounterPlusOne();
  const { counterMinusOne } = useCounterMinusOne();
  const { counterReset } = useCounterReset();

  return (
    <div className="examples-counter-page">
      <h1>Counteraaaaaa</h1>
      <p>This is simple scounter demo tof show how Redux sync actions wosrk. sdf</p>
      <button className="btn-minus-one" onClick={counterMinusOne} disabled={count === 0}>
        -
      </button>
      <span>{count}</span>
      <button className="btn-plus-one" onClick={counterPlusOne}>
        +
      </button>
      <button className="btn-reset" onClick={counterReset}>
        Reset
      </button>
    </div>
  );
}
