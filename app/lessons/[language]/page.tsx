import { notFound, redirect } from "next/navigation";
import { isLessonKey, lessonList, lessons } from "../../lib/lessons";

type LessonPageProps = {
  params: Promise<{ language: string }>;
};

export function generateStaticParams() {
  return lessonList.map((lesson) => ({ language: lesson.slug }));
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { language } = await params;

  if (!isLessonKey(language)) {
    notFound();
  }

  const lesson = lessons[language];
  const firstTopic = lesson.topics[0];
  if (!firstTopic) {
    notFound();
  }

  redirect(`/lessons/${lesson.slug}/${firstTopic.slug}`);
}
