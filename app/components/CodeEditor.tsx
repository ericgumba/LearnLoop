"use client";

import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

type CodeEditorProps = {
  language: string;
  starterCode: string;
};

export default function CodeEditor({ language, starterCode }: CodeEditorProps) {
  const [code, setCode] = useState(starterCode);

  useEffect(() => {
    setCode(starterCode);
  }, [starterCode]);

  const runCode = () => {
    console.log("Running code:");
    console.log(code);

  };

  return (
    <section className="flex-1 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow dark:border-zinc-700 dark:bg-zinc-900">
      <Editor
        height="70vh"
        defaultLanguage={language}
        language={language}
        value={code}
        onChange={(value) => setCode(value || "")}
        theme="vs-dark"
        options={{
          fontSize: 16,
          minimap: { enabled: false },
          automaticLayout: true,
        }}
      />

      <button
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
    </section>
  );
}
