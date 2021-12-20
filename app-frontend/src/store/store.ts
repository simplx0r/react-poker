import { createStoreon } from "storeon";
import { storeonDevtools } from "storeon/devtools";
import {
  counterModule,
  CounterModuleState,
  CounterModuleEvents
} from "./slices/counter.module";

export type State = CounterModuleState;

export type Events = CounterModuleEvents;


export const store = createStoreon<State, Events>([
  counterModule,
  process.env.NODE_ENV !== "production" &&
    storeonDevtools({
      name: "React Poker"
    })
]);
