import { createStoreon } from "storeon";
import { storeonDevtools } from "storeon/devtools";
import {
  counterModule,
  CounterModuleState,
  CounterModuleEvents
} from "./slices/counter.module";

// State structure
export type State = CounterModuleState;
// export type State = CounterModuleState & NextModuleState;

export type Events = CounterModuleEvents;
// export type Events = CounterModuleEvents & NextModuleEvents;

export const store = createStoreon<State, Events>([
  counterModule,
  process.env.NODE_ENV !== "production" &&
    storeonDevtools({
      name: "React Poker"
    })
]);
