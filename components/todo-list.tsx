"use client"

import { useState } from "react"

type Task = {
  id: number
  description: string
}

export function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [nextId, setNextId] = useState(1)
  const [newTask, setNewTask] = useState("")

  // which task is currently being edited, and the draft text for it
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editText, setEditText] = useState("")

  function addTask(e: React.FormEvent) {
    e.preventDefault()
    const desc = newTask.trim()
    if (!desc) return
    setTasks((prev) => [...prev, { id: nextId, description: desc }])
    setNextId((n) => n + 1)
    setNewTask("")
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
    if (editingId === id) setEditingId(null)
  }

  function startEdit(task: Task) {
    setEditingId(task.id)
    setEditText(task.description)
  }

  function saveEdit(e: React.FormEvent, id: number) {
    e.preventDefault()
    const desc = editText.trim()
    if (!desc) return
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, description: desc } : t)))
    setEditingId(null)
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-foreground">===== To-Do List =====</h1>

      <form onSubmit={addTask} className="mt-6 flex gap-2">
        <input
          type="text"
          name="description"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
          required
          className="flex-1 border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-ring"
        />
        <button
          type="submit"
          className="border border-border bg-primary px-4 py-2 text-primary-foreground"
        >
          Add Task
        </button>
      </form>

      <hr className="my-6 border-border" />

      <h2 className="text-lg font-medium text-foreground">Your Tasks</h2>

      {tasks.length > 0 ? (
        <ul className="mt-4 flex flex-col gap-3">
          {tasks.map((task) => (
            <li key={task.id} className="border border-border p-3">
              {editingId === task.id ? (
                <form onSubmit={(e) => saveEdit(e, task.id)} className="flex gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    placeholder="New description"
                    required
                    className="flex-1 border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-ring"
                  />
                  <button type="submit" className="border border-border px-3 py-2 text-foreground">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="border border-border px-3 py-2 text-muted-foreground"
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="font-mono text-muted-foreground">{"[" + task.id + "]"}</span>
                  <span className="flex-1 text-foreground">{task.description}</span>
                  <button
                    type="button"
                    onClick={() => startEdit(task)}
                    className="border border-border px-3 py-1 text-foreground"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteTask(task.id)}
                    className="border border-border px-3 py-1 text-destructive"
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-muted-foreground">The task list is currently empty.</p>
      )}
    </main>
  )
}
