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
        example: `#include <iostream>

int main() {
  std::cout << "Hello, world!" << std::endl;
  return 0;
}`,
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
        example: `#include <iostream>

int main() {
    int x = 42;
    int* ptr = &x;

    std::cout << "Value: " << *ptr << std::endl;
    std::cout << "Address: " << ptr << std::endl;

    return 0;
}`,
        assignment: "Create a pointer to an int, then print both the value and its address.",
        starterCode: `#include <iostream>

int main() {
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
        example: `main :: IO ()
main = putStrLn "Hello, world!"`,
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
