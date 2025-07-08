import { create } from "zustand";

export interface TaskProps {
  id: number;
  title: string;
  state: string;
}

interface Store {
  tasks: TaskProps[];
  addTask: (title: string, state: string) => void;
  removeTask: (id: number) => void;
}

export const useStore = create<Store>((set) => ({
  tasks: [
    {
      id: 1,
      title: "TestTask",
      state: "PLANNED",
    },
  ],
  addTask: (title, state) =>
    set((store) => {
      const newId =
        store.tasks.length > 0
          ? Math.max(...store.tasks.map((t) => t.id)) + 1
          : 1;
      return {
        tasks: [...store.tasks, { id: newId, title, state }],
      };
    }),
  removeTask: (id) =>
    set((store) => ({
      tasks: store.tasks.filter((t) => t.id!== id),
    })),
}));
