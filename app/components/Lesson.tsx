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
      <h1 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">{topic}</h1>
      <p className="mb-2 text-zinc-700 dark:text-zinc-300">{explanation}</p>
      <p className="mb-2 text-zinc-700 dark:text-zinc-300">{example}</p>
      <p className="text-zinc-700 dark:text-zinc-300">{assignment}</p>
    </section>
  );
}
