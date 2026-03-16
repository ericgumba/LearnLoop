import Link from "next/link";
import { notFound } from "next/navigation";
import LessonWorkspace from "../../components/LessonWorkspace";
import { isLessonKey, lessonList, lessons } from "../../lib/lessons";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lessonList.map((lesson) => ({ slug: lesson.slug }));
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;

  if (!isLessonKey(slug)) {
    notFound();
  }

  const lesson = lessons[slug];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-5xl space-y-4 p-6">
        <Link
          href="/"
          className="inline-flex rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Back to lessons
        </Link>

        <LessonWorkspace lesson={lesson} />
      </main>
    </div>
  );
}
