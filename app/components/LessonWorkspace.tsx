"use client";

import { useMemo, useState } from "react";
import type { LessonContent } from "../lib/lessons";
import CodeEditor from "./CodeEditor";
import Lesson from "./Lesson";

type LessonWorkspaceProps = {
  lesson: LessonContent;
};

export default function LessonWorkspace({ lesson }: LessonWorkspaceProps) {
  const [selectedTopicSlug, setSelectedTopicSlug] = useState(lesson.topics[0]?.slug ?? "");

  const selectedTopic = useMemo(
    () => lesson.topics.find((topic) => topic.slug === selectedTopicSlug) ?? lesson.topics[0],
    [lesson.topics, selectedTopicSlug],
  );

  if (!selectedTopic) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-[220px_1fr]">
      <aside className="rounded-xl border border-zinc-200 bg-white p-4 shadow dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Topics</h2>
        <div className="space-y-2">
          {lesson.topics.map((topic) => {
            const isActive = topic.slug === selectedTopic.slug;
            return (
              <button
                key={topic.slug}
                type="button"
                onClick={() => setSelectedTopicSlug(topic.slug)}
                className={`w-full rounded-md border px-3 py-2 text-left text-sm transition ${
                  isActive
                    ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                    : "border-zinc-300 bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                }`}
              >
                {topic.label}
              </button>
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
        <CodeEditor language={lesson.editorLanguage} starterCode={selectedTopic.starterCode} />
      </div>
    </div>
  );
}
