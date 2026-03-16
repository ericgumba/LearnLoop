"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

type CodeEditorProps = {
  language: string;
  starterCode: string;
  assignment: string;
};

export default function CodeEditor({ language, starterCode, assignment }: CodeEditorProps) {
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState("");

  console.log("CodeEditor rendered with language:", language);

  const runCode = async () => {
    const response = await fetch(`/api/run/${language}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const data = await response.json();
    setOutput(data.output ?? "No output returned.");
  };
  const getFeedback = async () => {
    console.log("Getting feedback...");
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, assignment, language }),
    });

    const data = await response.json();
    console.log("Feedback received:", data);
    setFeedback(data.feedback ?? "No feedback returned.");
  };

  return (
    <div className="space-y-4">
      <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow dark:border-zinc-700 dark:bg-zinc-900">
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
      </section>
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={() => runCode()}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Run Code
        </button>

        <button
          type="button"
          onClick={() => getFeedback()}
          className="rounded-md border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
        >
          Get Assignment Feedback
        </button>
      </div>

      <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow dark:border-zinc-700 dark:bg-zinc-900">
        <h3 className="border-b border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-800 dark:border-zinc-700 dark:text-zinc-100">
          Output
        </h3>
        <pre className="min-h-[220px] whitespace-pre-wrap break-words p-4 text-sm text-zinc-800 dark:text-zinc-200">
          {output || "Run your code to see output here."}
        </pre>
      </section>

      <section className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow dark:border-zinc-700 dark:bg-zinc-900">
        <h3 className="border-b border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-800 dark:border-zinc-700 dark:text-zinc-100">
          LLM feedback
        </h3>
        <pre className="min-h-[220px] whitespace-pre-wrap break-words p-4 text-sm text-zinc-800 dark:text-zinc-200">
          {feedback || "Get feedback to see suggestions here."}
        </pre>
      </section>
    </div>
  );
}
