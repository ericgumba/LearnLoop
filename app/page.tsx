import Link from "next/link";
import { lessonList } from "./lib/lessons";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-5xl p-6">
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow dark:border-zinc-700 dark:bg-zinc-900">
          <h1 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">Choose a Lesson</h1>
          <div className="grid gap-4 sm:grid-cols-2">
            {lessonList.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/lessons/${lesson.slug}`}
                className="rounded-lg border border-zinc-300 bg-zinc-100 p-5 text-left text-lg font-semibold text-zinc-900 transition hover:border-zinc-500 hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-700"
              >
                {lesson.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
