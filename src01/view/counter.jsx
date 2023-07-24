import React, { useState } from "react";
import store from "../store/store";
export default function Counter() {
  const [count, setCount] = useState(store.getState().Counter.value);
  //加监听事件，只能在redux里面使用
  console.log(store.getState().Show.show);
  store.subscribe(() => {
    setCount(store.getState().Counter.value);
  });
  return (
    <div>
      <div>{store.getState().Counter.value}</div>
      {/* dispatch 操作store里面的数据 */}
      <button
        onClick={() => {
          store.dispatch({ type: "add" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch({ type: "minus" });
        }}
      >
        -
      </button>
    </div>
  );
}
