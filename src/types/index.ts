export type ITodo = {
  id: string;
  text: string;
  completed: boolean;
};

export type IFilter = "all" | "active" | "completed";
