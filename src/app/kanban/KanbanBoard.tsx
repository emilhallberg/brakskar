"use client";

import { type DragEvent, useEffect, useMemo, useState } from "react";

type ColumnId = "todo" | "doing" | "done";

type Task = {
  id: string;
  title: string;
  column: ColumnId;
};

const storageKey = "brakskar-kanban";

const columns: { id: ColumnId; title: string }[] = [
  { id: "todo", title: "TODO" },
  { id: "doing", title: "DOING" },
  { id: "done", title: "DONE" },
];

const initialTasks: Task[] = [
  { id: "bygga-munka", title: "Bygga munka", column: "todo" },
  { id: "krita-linje", title: "Krita linje", column: "todo" },
  {
    id: "fylla-badtunna-kolla-ved",
    title: "Fylla badtunna + kolla ved",
    column: "todo",
  },
  { id: "samla-bjorkris", title: "Samla björkris", column: "todo" },
  { id: "kratta-ankbajs", title: "Kratta ankbajs", column: "todo" },
  { id: "vika-snapshaften", title: "Vika snapshäften", column: "todo" },
  {
    id: "gora-midsommarkransar",
    title: "Göra midsommarkransar",
    column: "todo",
  },
  { id: "frys-snapsar", title: "Frys snapsar", column: "done" },
  {
    id: "stall-ordning-lekstationer",
    title: "Ställ ordning lekstationer",
    column: "todo",
  },
  {
    id: "plocka-prastkragar",
    title: "Plocka prästkragar",
    column: "todo",
  },
  {
    id: "midsommarstangen",
    title: "Midsommarstången",
    column: "todo",
  },
  { id: "duka", title: "Duka", column: "todo" },
  { id: "barnsang", title: "Barnsång", column: "todo" },
  {
    id: "preppa-bastu",
    title: "Preppa bastu (städa + fylla ved) (+ fylla vatten)",
    column: "todo",
  },
  { id: "klippa-graset", title: "Klippa gräset", column: "todo" },
  { id: "brak-bar", title: "Brak bar?", column: "todo" },
];

const isColumnId = (value: unknown): value is ColumnId =>
  columns.some((column) => column.id === value);

const isTask = (value: unknown): value is Task => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const task = value as Partial<Task>;

  return (
    typeof task.id === "string" &&
    task.id.trim().length > 0 &&
    typeof task.title === "string" &&
    task.title.trim().length > 0 &&
    isColumnId(task.column)
  );
};

const getSavedTasks = () => {
  if (typeof window === "undefined") {
    return initialTasks;
  }

  try {
    const savedTasks = window.localStorage.getItem(storageKey);
    if (!savedTasks) {
      return initialTasks;
    }

    const parsedTasks = JSON.parse(savedTasks) as unknown;

    if (!Array.isArray(parsedTasks) || parsedTasks.some((task) => !isTask(task))) {
      return initialTasks;
    }

    const initialIds = new Set(initialTasks.map(({ id }) => id));
    const savedById = new Map(parsedTasks.map((task) => [task.id, task]));
    const syncedInitialTasks = initialTasks.map((task) => ({
      ...task,
      title: savedById.get(task.id)?.title ?? task.title,
      column: savedById.get(task.id)?.column ?? task.column,
    }));
    const customTasks = parsedTasks.filter((task) => !initialIds.has(task.id));

    return [...syncedInitialTasks, ...customTasks];
  } catch {
    return initialTasks;
  }
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTasks(getSavedTasks());
      setHasLoaded(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      window.localStorage.setItem(storageKey, JSON.stringify(tasks));
    }
  }, [hasLoaded, tasks]);

  const taskCounts = useMemo(
    () =>
      columns.reduce(
        (counts, column) => ({
          ...counts,
          [column.id]: tasks.filter((task) => task.column === column.id).length,
        }),
        {} as Record<ColumnId, number>,
      ),
    [tasks],
  );

  const moveTask = (taskId: string, column: ColumnId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, column } : task,
      ),
    );
  };

  const updateTaskTitle = (taskId: string, title: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, title } : task,
      ),
    );
  };

  const addTask = () => {
    const trimmedTitle = newTaskTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: `custom-${Date.now().toString(36)}-${Math.random()
          .toString(36)
          .slice(2, 8)}`,
        title: trimmedTitle,
        column: "todo",
      },
    ]);
    setNewTaskTitle("");
  };

  const handleDrop = (event: DragEvent<HTMLElement>, column: ColumnId) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain") || draggedTaskId;

    if (taskId) {
      moveTask(taskId, column);
    }

    setDraggedTaskId(null);
  };

  return (
    <section className="grid gap-5">
      <form
        className="grid gap-2 rounded-md border border-black/15 bg-white/45 p-3 shadow-sm sm:grid-cols-[1fr_auto]"
        onSubmit={(event) => {
          event.preventDefault();
          addTask();
        }}
      >
        <label className="sr-only" htmlFor="new-task">
          Ny uppgift
        </label>
        <input
          id="new-task"
          className="min-h-11 border border-black/25 bg-[#f7efe7] px-3 font-medium outline-none transition placeholder:text-black/40 focus:border-[#6d7745] focus:ring-2 focus:ring-[#6d7745]/25"
          placeholder="Lägg till ny uppgift"
          type="text"
          value={newTaskTitle}
          onChange={(event) => setNewTaskTitle(event.target.value)}
        />
        <button
          className="min-h-11 border border-black px-4 text-sm font-bold uppercase tracking-[0.12em] transition hover:border-[#6d7745] hover:bg-[#6d7745] hover:text-white disabled:cursor-not-allowed disabled:border-black/15 disabled:text-black/35"
          disabled={!newTaskTitle.trim()}
          type="submit"
        >
          Lägg till
        </button>
      </form>
      <div className="grid gap-5 lg:grid-cols-3">
        {columns.map((column) => {
          const columnTasks = tasks.filter((task) => task.column === column.id);

          return (
            <section
              key={column.id}
              className="grid min-h-[18rem] content-start gap-3 rounded-md border border-black/15 bg-white/45 p-3 shadow-sm"
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => handleDrop(event, column.id)}
            >
              <header className="flex items-center justify-between border-b border-black/15 pb-2">
                <h2 className="text-sm font-bold tracking-[0.18em]">
                  {column.title}
                </h2>
                <span className="grid h-7 min-w-7 place-items-center rounded-full bg-[#6d7745] px-2 text-sm font-bold text-white">
                  {taskCounts[column.id]}
                </span>
              </header>
              <div className="grid gap-2">
                {columnTasks.map((task) => (
                  <article
                    key={task.id}
                    className="grid gap-3 rounded-md border border-black/20 bg-[#f7efe7] p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    draggable
                    onDragStart={(event) => {
                      event.dataTransfer.setData("text/plain", task.id);
                      setDraggedTaskId(task.id);
                    }}
                    onDragEnd={() => setDraggedTaskId(null)}
                  >
                    <label className="sr-only" htmlFor={`task-${task.id}`}>
                      Redigera uppgift
                    </label>
                    <input
                      id={`task-${task.id}`}
                      className="w-full border-b border-black/20 bg-transparent py-1 font-medium leading-snug outline-none transition focus:border-[#6d7745]"
                      type="text"
                      value={task.title}
                      onChange={(event) =>
                        updateTaskTitle(task.id, event.target.value)
                      }
                    />
                    <div className="flex flex-wrap gap-1.5">
                      {columns.map((targetColumn) => (
                        <button
                          key={targetColumn.id}
                          className="border border-black/30 px-2 py-1 text-[0.68rem] font-bold tracking-[0.12em] transition hover:border-[#6d7745] hover:bg-[#6d7745] hover:text-white disabled:cursor-default disabled:border-black/10 disabled:bg-black/5 disabled:text-black/35"
                          disabled={targetColumn.id === task.column}
                          type="button"
                          onClick={() => moveTask(task.id, targetColumn.id)}
                        >
                          {targetColumn.title}
                        </button>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default KanbanBoard;
