//@ts-ignore
import { countStore as countStoreRemote } from "app1/stores/countStore";
import { StoreApi, UseBoundStore } from "zustand";
import { CountStore } from "../store/countStore";

export const countStore: UseBoundStore<
  CountStore,
  StoreApi<CountStore>
> = countStoreRemote;