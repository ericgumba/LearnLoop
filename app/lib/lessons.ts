export type TopicContent = {
  slug: string;
  label: string;
  topic: string;
  explanation: string;
  example: string;
  assignment: string;
  starterCode: string;
};

export type LessonContent = {
  slug: LessonKey;
  label: string;
  editorLanguage: string;
  topics: TopicContent[];
};

export type LessonKey = "cpp" | "haskell";

export const lessons: Record<LessonKey, LessonContent> = {
  cpp: {
    slug: "cpp",
    label: "C++",
    editorLanguage: "cpp",
    topics: [
      {
        slug: "hello-world",
        label: "hello world",
        topic: "Lesson: Hello World in C++",
        explanation: "In C++, main() is the entry point of the program.",
        example: "std::cout prints text to the console.",
        assignment: "Try changing the message and then run the code.",
        starterCode: `#include <iostream>

int main() {
  std::cout << "Hello, world!" << std::endl;
  return 0;
}`,
      },
      {
        slug: "pointers",
        label: "pointers",
        topic: "Lesson: Pointers in C++",
        explanation: "A pointer stores the memory address of another variable.",
        example:
          "Use * to dereference a pointer and & to get an address, e.g. int* p = &value;.",
        assignment: "Create a pointer to an int, then print both the value and its address.",
        starterCode: `#include <iostream>

int main() {
  int value = 42;
  int* ptr = &value;

  std::cout << "value: " << value << std::endl;
  std::cout << "address: " << ptr << std::endl;
  std::cout << "dereference: " << *ptr << std::endl;
  return 0;
}`,
      },
    ],
  },
  haskell: {
    slug: "haskell",
    label: "Haskell",
    editorLanguage: "haskell",
    topics: [
      {
        slug: "hello-world",
        label: "hello world",
        topic: "Lesson: Hello World in Haskell",
        explanation: "In Haskell, execution starts in the main function.",
        example: "putStrLn prints text followed by a newline.",
        assignment: "Change the message and evaluate the expression.",
        starterCode: `main :: IO ()
main = putStrLn "Hello, world!"`,
      },
    ],
  },
};

export const lessonList: LessonContent[] = Object.values(lessons);

export function isLessonKey(value: string): value is LessonKey {
  return value in lessons;
}
