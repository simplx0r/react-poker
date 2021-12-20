import { StoreonStore } from "storeon";
import { createSubstore } from "storeon-substore";
import { Events, State } from "../store";


const sliceName = "counter";

export interface CounterModuleState {
  [sliceName]: {
    number: number;
  };
}

export const CounterIncrementEvent = "incrementCounter";
export const CounterSetEvent = "setCounter";

export interface CounterModuleEvents {
  // `inc` event which do not goes with any data
  [CounterIncrementEvent]: undefined;
  // `set` event which goes with number as data
  [CounterSetEvent]: number;
}

export const counterModule = (parentStore: StoreonStore<State, Events>) => {
  const store = createSubstore(parentStore, sliceName);
  store.on("@init", () => ({ number: 228 }));
  store.on(CounterIncrementEvent, (state) => ({ number: state.number + 1 }));
  store.on(CounterSetEvent, (state, event) => ({
    number: event
  }));
};