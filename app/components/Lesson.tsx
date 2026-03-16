type LessonProps = {
  topic: string;
  explanation: string;
  example: string;
  assignment: string;
};

export default function Lesson({
  topic,
  explanation,
  example,
  assignment,
}: LessonProps) {
  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow dark:border-zinc-700 dark:bg-zinc-900">
      <h1 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">{topic}</h1>

      <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
        Explanation
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-300">{explanation}</p>

      <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
        Example
      </h2>
      <pre className="mb-4 overflow-x-auto rounded-md bg-zinc-100 p-3 text-sm text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
        <code>{example}</code>
      </pre>

      <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
        Assignment
      </h2>
      <p className="text-zinc-700 dark:text-zinc-300">{assignment}</p>
    </section>
  );
}
