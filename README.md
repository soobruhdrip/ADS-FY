# To-Do List

A simple To-Do List web application built with Next.js, React, TypeScript, and Tailwind CSS.

The project lets users add tasks, edit existing tasks, and delete tasks from a simple interface.

## Features

* Add new tasks
* Edit existing tasks
* Delete tasks
* Simple and responsive interface
* Client-side task management using React state

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Lucide React
* pnpm

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── todo-list.tsx
│   └── ui/
├── lib/
│   └── utils.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Available Commands

```bash
pnpm dev
```

Starts the development server.

```bash
pnpm build
```

Creates a production build.

```bash
pnpm start
```

Starts the production server.

## How It Works

Tasks are stored in the `TodoList` component using React's `useState`.

Each task contains:

* `id` — unique task number
* `description` — task text

The application provides functions for adding, updating, and deleting tasks.

## Current Limitations

Tasks are currently stored only in memory. Refreshing the page will clear the task list.

There is no database or user authentication.

## Future Improvements

* Save tasks using local storage
* Add task completion status
* Add task priorities
* Add due dates
* Add filtering and sorting
* Add database support

## License

This project is available under the MIT License.
