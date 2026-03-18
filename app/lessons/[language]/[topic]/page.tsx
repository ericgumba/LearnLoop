import Link from "next/link";
import { notFound } from "next/navigation";
import LessonWorkspace from "../../../components/LessonWorkspace";
import { getTopicBySlug, isLessonKey, lessonList, lessons } from "../../../lib/lessons";

type LessonTopicPageProps = {
  params: Promise<{ language: string; topic: string }>;
};

export function generateStaticParams() {
  return lessonList.flatMap((lesson) =>
    lesson.topics.map((topic) => ({ language: lesson.slug, topic: topic.slug })),
  );
}

export default async function LessonTopicPage({ params }: LessonTopicPageProps) {
  const { language, topic } = await params;

  if (!isLessonKey(language)) {
    notFound();
  }

  const lesson = lessons[language];
  const selectedTopic = getTopicBySlug(lesson, topic);
  if (!selectedTopic) {
    notFound();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-5xl space-y-4 p-6">
        <Link
          href="/"
          className="inline-flex rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Back to lessons
        </Link>

        <LessonWorkspace lesson={lesson} selectedTopic={selectedTopic} />
      </main>
    </div>
  );
}
