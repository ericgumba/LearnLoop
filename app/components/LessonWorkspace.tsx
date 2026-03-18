import Link from "next/link";
import type { LessonContent, TopicContent } from "../lib/lessons";
import CodeEditor from "./CodeEditor";
import Lesson from "./Lesson";

type LessonWorkspaceProps = {
  lesson: LessonContent;
  selectedTopic: TopicContent;
};

export default function LessonWorkspace({ lesson, selectedTopic }: LessonWorkspaceProps) {
  const sectionOrder: string[] = [];
  const sections = new Map<string, TopicContent[]>();

  lesson.topics.forEach((topic) => {
    const sectionName = topic.section ?? "Other Topics";
    if (!sections.has(sectionName)) {
      sections.set(sectionName, []);
      sectionOrder.push(sectionName);
    }
    sections.get(sectionName)!.push(topic);
  });

  return (
    <div className="grid gap-4 md:grid-cols-[220px_1fr]">
      <aside className="rounded-xl border border-zinc-200 bg-white p-4 shadow dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Topics</h2>
        <div className="space-y-3">
          {sectionOrder.map((sectionName) => {
            const topicsInSection = sections.get(sectionName) ?? [];
            const isSectionActive = topicsInSection.some((topic) => topic.slug === selectedTopic.slug);
            const regularTopics = topicsInSection.filter((topic) => !topic.isChallenge);
            const challengeTopic = topicsInSection.find((topic) => topic.isChallenge);

            return (
              <details key={sectionName} open={isSectionActive} className="rounded-md border border-zinc-300 dark:border-zinc-700">
                <summary className="cursor-pointer list-none rounded-md bg-zinc-100 px-3 py-2 text-sm font-semibold text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                  {sectionName}
                </summary>

                <div className="space-y-2 p-2">
                  {regularTopics.map((topic, index) => {
                    const isActive = topic.slug === selectedTopic.slug;
                    const topicPrefix = String.fromCharCode(97 + index);
                    return (
                      <Link
                        key={topic.slug}
                        href={`/lessons/${lesson.slug}/${topic.slug}`}
                        className={`block rounded-md border px-3 py-2 text-left text-sm transition ${
                          isActive
                            ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                            : "border-zinc-300 bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                        }`}
                      >
                        {topicPrefix}. {topic.label}
                      </Link>
                    );
                  })}

                  {challengeTopic && (
                    <Link
                      key={challengeTopic.slug}
                      href={`/lessons/${lesson.slug}/${challengeTopic.slug}`}
                      className={`block rounded-md border px-3 py-2 text-left text-sm font-semibold transition ${
                        challengeTopic.slug === selectedTopic.slug
                          ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                          : "border-emerald-300 bg-emerald-100 text-emerald-900 hover:bg-emerald-200 dark:border-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-100 dark:hover:bg-emerald-900/60"
                      }`}
                    >
                      Challenge
                    </Link>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </aside>

      <div className="space-y-4">
        <Lesson
          topic={selectedTopic.topic}
          explanation={selectedTopic.explanation}
          example={selectedTopic.example}
          assignment={selectedTopic.assignment}
        />
        <CodeEditor
          key={`${lesson.slug}/${selectedTopic.slug}`}
          language={lesson.editorLanguage}
          starterCode={selectedTopic.starterCode}
          assignment={selectedTopic.assignment}
          draftKey={`${lesson.slug}/${selectedTopic.slug}`}
        />
      </div>
    </div>
  );
}
