import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface TaskProps {
  id: number;
  title: string;
  state: string;
}

interface Store {
  tasks: TaskProps[];
  draggedTask: number | null;
  addTask: (title: string, state: string) => void;
  removeTask: (id: number) => void;
  setDraggedTask: (id: number | null) => void;
  moveTask: (id: number, state: string) => void;
}

interface LogConfig<S, G, A> {
  (set: (...args: any[]) => void, get: G, api: A): S;
}

type SetState = (...args: any[]) => void;
type GetState = () => any;
type StoreApi = any;

const store = (set: any) => ({
  tasks: [],
  draggedTask: null,

  addTask: (title: string, state: string) =>
    set(
      (store: Store) => {
        const newId =
          store.tasks.length > 0
            ? Math.max(...store.tasks.map((t) => t.id)) + 1
            : 1;
        return {
          tasks: [...store.tasks, { id: newId, title, state }],
        };
      },
      false,
      "addTask"
    ),

  removeTask: (id: number) =>
    set(
      (store: Store) => ({
        tasks: store.tasks.filter((t) => t.id !== id),
      }),
      false,
      "removeTask"
    ),

  setDraggedTask: (id: number | null) =>
    set(() => ({ draggedTask: id }), false, "setDraggedTask"),

  moveTask: (id: number, state: string) =>
    set(
      (store: Store) => {
        const updatedTasks = store.tasks.map((task) =>
          task.id === id ? { ...task, state } : task
        );
        return { tasks: updatedTasks };
      },
      false,
      "moveTask"
    ),
});

const log =
  <S, G extends GetState, A extends StoreApi>(config: LogConfig<S, G, A>) =>
  (set: SetState, get: G, api: A): S =>
    config(
      (...args: any[]) => {
        const current = get();
        if(!current) {
          // get state from external source (e.g. server)
        }
        console.log("state", current);
        console.log("dispatch", args);
        set(...args);
      },
      get,
      api
    );

export const useStore = create<Store>()(
  log(persist(devtools(store), { name: "TaskStore" }))
);
