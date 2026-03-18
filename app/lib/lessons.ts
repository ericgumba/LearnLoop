export type TopicContent = {
  slug: string;
  section?: string;
  label: string;
  isChallenge?: boolean;
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
        slug: "basic-data-types",
        section: "Variables & Types",
        label: "basic data types",
        topic: "Lesson: Basic Data Types in C++",
        explanation:
          "C++ has built-in primitive types like int, float, double, char, and bool to represent core values.",
        example: `#include <iostream>

int main() {
  int age = 21;
  float temperature = 72.5f;
  double pi = 3.14159;
  char grade = 'A';
  bool isPassing = true;

  std::cout << age << ", " << temperature << ", " << pi
            << ", " << grade << ", " << isPassing << std::endl;
  return 0;
}`,
        assignment: "Declare int, float, double, char, and bool variables, then print them.",
        starterCode: `#include <iostream>

int main() {
  int age = 0;
  float temperature = 0.0f;
  double pi = 0.0;
  char grade = ' ';
  bool isPassing = false;

  // Print the values here

  return 0;
}`,
      },
      {
        slug: "auto",
        section: "Variables & Types",
        label: "auto",
        topic: "Lesson: auto in C++",
        explanation:
          "The auto keyword lets the compiler infer the variable type from the initializer expression.",
        example: `#include <iostream>

int main() {
  auto count = 10;       // int
  auto price = 19.99;    // double
  auto letter = 'x';     // char

  std::cout << count << ", " << price << ", " << letter << std::endl;
  return 0;
}`,
        assignment: "Use auto for three variables with different inferred types and print them.",
        starterCode: `#include <iostream>

int main() {
  auto a = 1;
  auto b = 2.0;
  auto c = 'z';

  // Print a, b, and c

  return 0;
}`,
      },
      {
        slug: "type-conversions",
        section: "Variables & Types",
        label: "type conversions",
        topic: "Lesson: Type Conversions in C++",
        explanation:
          "Type conversion changes a value from one type to another. You can do implicit or explicit conversion using static_cast.",
        example: `#include <iostream>

int main() {
  double value = 9.8;
  int whole = static_cast<int>(value);
  double precise = whole;

  std::cout << whole << ", " << precise << std::endl;
  return 0;
}`,
        assignment: "Convert a double to int using static_cast and print both original and converted values.",
        starterCode: `#include <iostream>

int main() {
  double value = 15.75;

  // Convert value to int and print both values

  return 0;
}`,
      },
      {
        slug: "variables-types-challenge",
        section: "Variables & Types",
        label: "Challenge",
        isChallenge: true,
        topic: "Challenge: Variables & Types in C++",
        explanation:
          "This challenge combines primitive data types, auto type inference, and explicit type conversions.",
        example: `#include <iostream>

int main() {
  int apples = 7;
  double pricePerApple = 1.25;
  auto total = apples * pricePerApple;
  int roundedTotal = static_cast<int>(total);

  std::cout << "Total: " << total << std::endl;
  std::cout << "Rounded: " << roundedTotal << std::endl;
  return 0;
}`,
        assignment:
          "Use int, double, char, and bool variables. Use auto for a computed value, convert one value with static_cast, and print the results.",
        starterCode: `#include <iostream>

int main() {
  int count = 5;
  double unitPrice = 2.5;
  char grade = 'B';
  bool passed = true;

  // 1) Use auto to compute total cost.
  // 2) Convert total to int with static_cast.
  // 3) Print all values clearly.

  return 0;
}`,
      },
      {
        slug: "if-else",
        section: "Control Flow",
        label: "if / else",
        topic: "Lesson: if / else in C++",
        explanation: "Use if / else to run different code paths based on a boolean condition.",
        example: `#include <iostream>

int main() {
  int score = 78;

  if (score >= 70) {
    std::cout << "Pass" << std::endl;
  } else {
    std::cout << "Fail" << std::endl;
  }

  return 0;
}`,
        assignment: "Write an if / else that prints whether a number is even or odd.",
        starterCode: `#include <iostream>

int main() {
  int n = 11;

  // Print "Even" or "Odd"

  return 0;
}`,
      },
      {
        slug: "switch",
        section: "Control Flow",
        label: "switch",
        topic: "Lesson: switch in C++",
        explanation:
          "Use switch when you need to compare one value against multiple constant cases.",
        example: `#include <iostream>

int main() {
  int day = 3;

  switch (day) {
    case 1:
      std::cout << "Monday" << std::endl;
      break;
    case 2:
      std::cout << "Tuesday" << std::endl;
      break;
    case 3:
      std::cout << "Wednesday" << std::endl;
      break;
    default:
      std::cout << "Unknown" << std::endl;
  }

  return 0;
}`,
        assignment: "Use switch to print a menu action for choices 1, 2, or 3.",
        starterCode: `#include <iostream>

int main() {
  int choice = 2;

  // Use switch on choice

  return 0;
}`,
      },
      {
        slug: "loops",
        section: "Control Flow",
        label: "loops",
        topic: "Lesson: Loops in C++",
        explanation: "Loops repeat code. Common loops are for, while, and do-while.",
        example: `#include <iostream>

int main() {
  for (int i = 1; i <= 5; i++) {
    std::cout << i << std::endl;
  }
  return 0;
}`,
        assignment: "Use a loop to print numbers 1 through 10.",
        starterCode: `#include <iostream>

int main() {
  // Print 1 to 10 using a loop

  return 0;
}`,
      },
      {
        slug: "control-flow-challenge",
        section: "Control Flow",
        label: "Challenge",
        isChallenge: true,
        topic: "Challenge: Control Flow in C++",
        explanation:
          "Combine conditional logic, switch branching, and loops in one program to demonstrate control flow mastery.",
        example: `#include <iostream>

int main() {
  int mode = 2;

  for (int i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
      std::cout << "even ";
    } else {
      std::cout << "odd ";
    }
  }
  std::cout << std::endl;

  switch (mode) {
    case 1:
      std::cout << "Mode one" << std::endl;
      break;
    case 2:
      std::cout << "Mode two" << std::endl;
      break;
    default:
      std::cout << "Unknown mode" << std::endl;
  }

  return 0;
}`,
        assignment:
          "Write a program that loops through numbers 1-10, uses if/else to classify each value, and uses switch to print a summary mode at the end.",
        starterCode: `#include <iostream>

int main() {
  int mode = 1;

  // 1) Loop from 1 to 10
  // 2) Use if / else inside the loop
  // 3) Use switch on mode and print a summary

  return 0;
}`,
      },
      {
        slug: "pass-by-value-vs-reference",
        section: "Functions",
        label: "pass by value vs reference",
        topic: "Lesson: Pass by Value vs Reference in C++",
        explanation:
          "Pass by value copies data into a function parameter, while pass by reference lets the function work with the original variable.",
        example: `#include <iostream>

void incrementValue(int x) {
  x++;
}

void incrementReference(int& x) {
  x++;
}

int main() {
  int a = 5;
  incrementValue(a);
  std::cout << "After value: " << a << std::endl;

  incrementReference(a);
  std::cout << "After reference: " << a << std::endl;
  return 0;
}`,
        assignment:
          "Write one function that takes an int by value and one by reference, then show how each affects the original variable.",
        starterCode: `#include <iostream>

void updateByValue(int x) {
  // modify x
}

void updateByReference(int& x) {
  // modify x
}

int main() {
  int n = 10;
  // Call both functions and print n after each
  return 0;
}`,
      },
      {
        slug: "const-correctness",
        section: "Functions",
        label: "const correctness",
        topic: "Lesson: Const Correctness in C++",
        explanation:
          "const prevents accidental modification and communicates intent. Use const references for read-only function parameters.",
        example: `#include <iostream>
#include <string>

void printName(const std::string& name) {
  std::cout << name << std::endl;
}

int main() {
  const int limit = 100;
  std::string user = "Ada";
  printName(user);
  std::cout << limit << std::endl;
  return 0;
}`,
        assignment:
          "Create a function that takes a const reference parameter and verify that it cannot modify the input.",
        starterCode: `#include <iostream>
#include <string>

void display(const std::string& text) {
  // Print text without modifying it
}

int main() {
  std::string message = "Hello";
  display(message);
  return 0;
}`,
      },
      {
        slug: "inline",
        section: "Functions",
        label: "inline",
        topic: "Lesson: Inline Functions in C++",
        explanation:
          "inline suggests to the compiler that a small function may be expanded at call sites to reduce function call overhead.",
        example: `#include <iostream>

inline int square(int x) {
  return x * x;
}

int main() {
  std::cout << square(6) << std::endl;
  return 0;
}`,
        assignment: "Define an inline function for a small math operation and call it from main.",
        starterCode: `#include <iostream>

// Define an inline function here

int main() {
  // Call your inline function and print the result
  return 0;
}`,
      },
      {
        slug: "functions-challenge",
        section: "Functions",
        label: "Challenge",
        isChallenge: true,
        topic: "Challenge: Functions in C++",
        explanation:
          "Combine pass-by-value/reference behavior, const correctness, and an inline helper function in one program.",
        example: `#include <iostream>
#include <string>

inline int triple(int n) {
  return n * 3;
}

void modifyValue(int x) {
  x = triple(x);
}

void modifyReference(int& x) {
  x = triple(x);
}

void printLabel(const std::string& label) {
  std::cout << label << std::endl;
}

int main() {
  int value = 4;
  modifyValue(value);
  std::cout << "After value: " << value << std::endl;
  modifyReference(value);
  std::cout << "After ref: " << value << std::endl;
  printLabel("done");
  return 0;
}`,
        assignment:
          "Write a program with: (1) an inline helper, (2) one function that takes by value, (3) one function that takes by reference, and (4) one const-correct function for display.",
        starterCode: `#include <iostream>
#include <string>

// 1) Add an inline helper function
// 2) Add a pass-by-value function
// 3) Add a pass-by-reference function
// 4) Add a const-correct display function

int main() {
  int x = 5;
  std::string label = "Functions challenge";
  // Call your functions and print results
  return 0;
}`,
      },
      {
        slug: "stack-vs-heap",
        section: "Arrays & Basic Memory",
        label: "stack vs heap",
        topic: "Lesson: Stack vs Heap in C++",
        explanation:
          "Stack memory is automatic and fast for local variables. Heap memory is dynamic and managed manually with allocation/deallocation.",
        example: `#include <iostream>

int main() {
  int stackValue = 10;            // stack
  int* heapValue = new int(20);   // heap

  std::cout << stackValue << std::endl;
  std::cout << *heapValue << std::endl;

  delete heapValue;
  return 0;
}`,
        assignment:
          "Create one stack variable and one heap variable, print both, then free heap memory correctly.",
        starterCode: `#include <iostream>

int main() {
  // Add one stack variable
  // Add one heap variable using new
  // Print both values
  // Free the heap variable
  return 0;
}`,
      },
      {
        slug: "new-delete",
        section: "Arrays & Basic Memory",
        label: "new / delete",
        topic: "Lesson: new / delete in C++",
        explanation:
          "Use new to allocate memory on the heap and delete to release it. For arrays, pair new[] with delete[].",
        example: `#include <iostream>

int main() {
  int* value = new int(5);
  int* arr = new int[3]{1, 2, 3};

  std::cout << *value << std::endl;
  std::cout << arr[0] << ", " << arr[1] << ", " << arr[2] << std::endl;

  delete value;
  delete[] arr;
  return 0;
}`,
        assignment:
          "Allocate a dynamic int and a dynamic int array, print them, then deallocate using delete and delete[].",
        starterCode: `#include <iostream>

int main() {
  // Allocate one int on heap
  // Allocate array of 5 ints on heap
  // Print a few values
  // Free memory correctly
  return 0;
}`,
      },
      {
        slug: "pointer-basics",
        section: "Arrays & Basic Memory",
        label: "pointer basics",
        topic: "Lesson: Pointer Basics in C++",
        explanation:
          "Pointers store addresses. Use & to get an address and * to dereference a pointer and access the pointed value.",
        example: `#include <iostream>

int main() {
  int number = 42;
  int* ptr = &number;

  std::cout << "Address: " << ptr << std::endl;
  std::cout << "Value: " << *ptr << std::endl;
  return 0;
}`,
        assignment: "Create a pointer to an int and print both its address and dereferenced value.",
        starterCode: `#include <iostream>

int main() {
  int value = 100;
  // Create a pointer to value
  // Print address and dereferenced value
  return 0;
}`,
      },
      {
        slug: "arrays-memory-challenge",
        section: "Arrays & Basic Memory",
        label: "Challenge",
        isChallenge: true,
        topic: "Challenge: Arrays & Basic Memory in C++",
        explanation:
          "Use stack and heap memory, dynamic allocation with new/delete, and pointer operations together in one program.",
        example: `#include <iostream>

int main() {
  int stackNumber = 7;
  int* heapNumber = new int(14);
  int* heapArray = new int[3]{2, 4, 6};

  int* ptr = &stackNumber;
  std::cout << "stack via ptr: " << *ptr << std::endl;
  std::cout << "heap value: " << *heapNumber << std::endl;
  std::cout << "heap array first: " << heapArray[0] << std::endl;

  delete heapNumber;
  delete[] heapArray;
  return 0;
}`,
        assignment:
          "Write a program that uses stack and heap values, allocates and frees dynamic memory, and accesses values through pointers.",
        starterCode: `#include <iostream>

int main() {
  // 1) Add one stack variable
  // 2) Allocate one heap variable and one heap array
  // 3) Use a pointer with & and *
  // 4) Print outputs
  // 5) Free all heap memory
  return 0;
}`,
      },
      {
        slug: "encapsulation",
        section: "Structs and Classes",
        label: "encapsulation",
        topic: "Lesson: Encapsulation in C++",
        explanation:
          "Encapsulation means bundling data and behavior together, while controlling access to internal state through methods.",
        example: `#include <iostream>

class Counter {
private:
  int value;

public:
  Counter() : value(0) {}

  void increment() {
    value++;
  }

  int getValue() const {
    return value;
  }
};

int main() {
  Counter c;
  c.increment();
  std::cout << c.getValue() << std::endl;
  return 0;
}`,
        assignment:
          "Create a class with a private field and public methods to update and read the value.",
        starterCode: `#include <iostream>

class Box {
private:
  int width;

public:
  // Add setter/getter methods
};

int main() {
  Box b;
  // Use methods to set and print width
  return 0;
}`,
      },
      {
        slug: "public-private",
        section: "Structs and Classes",
        label: "public / private",
        topic: "Lesson: public / private in C++",
        explanation:
          "public members are accessible outside the class, while private members are only accessible inside class methods.",
        example: `#include <iostream>
#include <string>

class User {
private:
  std::string password;

public:
  std::string name;

  void setPassword(const std::string& p) {
    password = p;
  }
};

int main() {
  User u;
  u.name = "alice";
  u.setPassword("secret");
  std::cout << u.name << std::endl;
  return 0;
}`,
        assignment:
          "Define one public member and one private member in a class. Access the public one directly and update the private one through a method.",
        starterCode: `#include <iostream>
#include <string>

class Profile {
public:
  std::string username;

private:
  int pin;

public:
  // Add method to set pin
};

int main() {
  Profile p;
  // Use username and set pin
  return 0;
}`,
      },
      {
        slug: "constructors",
        section: "Structs and Classes",
        label: "constructors",
        topic: "Lesson: Constructors in C++",
        explanation:
          "A constructor runs when an object is created and is commonly used to initialize member variables.",
        example: `#include <iostream>
#include <string>

class Person {
public:
  std::string name;
  int age;

  Person(const std::string& n, int a) : name(n), age(a) {}
};

int main() {
  Person p("Sam", 20);
  std::cout << p.name << " " << p.age << std::endl;
  return 0;
}`,
        assignment:
          "Create a class with a constructor that initializes at least two fields, then instantiate and print them.",
        starterCode: `#include <iostream>
#include <string>

class Student {
public:
  std::string name;
  int grade;

  // Add constructor
};

int main() {
  // Create Student object and print fields
  return 0;
}`,
      },
      {
        slug: "structs-classes-challenge",
        section: "Structs and Classes",
        label: "Challenge",
        isChallenge: true,
        topic: "Challenge: Structs and Classes in C++",
        explanation:
          "Combine encapsulation, access modifiers, and constructors by building a class with private data, public methods, and proper initialization.",
        example: `#include <iostream>
#include <string>

class BankAccount {
private:
  double balance;

public:
  std::string owner;

  BankAccount(const std::string& name, double initialBalance)
      : balance(initialBalance), owner(name) {}

  void deposit(double amount) {
    balance += amount;
  }

  double getBalance() const {
    return balance;
  }
};

int main() {
  BankAccount acct("Maya", 100.0);
  acct.deposit(50.0);
  std::cout << acct.owner << ": " << acct.getBalance() << std::endl;
  return 0;
}`,
        assignment:
          "Create a class with private state, a constructor, and public methods. Use public/private correctly and print results from main.",
        starterCode: `#include <iostream>
#include <string>

class Account {
private:
  double balance;

public:
  std::string owner;

  // Add constructor
  // Add deposit method
  // Add const getter for balance
};

int main() {
  // Create Account, call methods, print output
  return 0;
}`,
      },
      {
        slug: "raii-basics",
        section: "RAII",
        label: "RAII",
        topic: "Lesson: RAII in C++",
        explanation:
          "RAII (Resource Acquisition Is Initialization) ties resource lifetime to object lifetime, so resources are released automatically when objects go out of scope.",
        example: `#include <fstream>
#include <string>

int main() {
  std::ofstream file("log.txt");
  file << "Hello from RAII\\n";
  // file closes automatically when it goes out of scope
  return 0;
}`,
        assignment:
          "Use an object (like std::ofstream) to acquire a resource and let scope-based cleanup release it automatically.",
        starterCode: `#include <fstream>
#include <string>

int main() {
  // Open a file and write one line.
  // Do not call close() manually; rely on scope cleanup.
  return 0;
}`,
      },
      {
        slug: "raii-challenge",
        section: "RAII",
        label: "Challenge",
        isChallenge: true,
        topic: "Challenge: RAII in C++",
        explanation:
          "Build a small class that acquires a resource in the constructor and releases it in the destructor, demonstrating deterministic cleanup.",
        example: `#include <iostream>

class LoggerScope {
public:
  LoggerScope() { std::cout << "Acquire resource\\n"; }
  ~LoggerScope() { std::cout << "Release resource\\n"; }
};

int main() {
  LoggerScope scope;
  std::cout << "Working...\\n";
  return 0;
}`,
        assignment:
          "Create a class with constructor/destructor messages to show RAII cleanup when scope ends.",
        starterCode: `#include <iostream>

class ResourceGuard {
public:
  // constructor: print acquire message
  // destructor: print release message
};

int main() {
  // Create ResourceGuard object in local scope
  // Print an in-between message
  return 0;
}`,
      },
      {
        slug: "copy-constructor",
        section: "Copy / Move Semantics",
        label: "copy constructor",
        topic: "Lesson: Copy Constructor in C++",
        explanation:
          "A copy constructor creates a new object as a copy of an existing object. It is commonly used when passing/returning objects by value.",
        example: `#include <iostream>

class Box {
public:
  int value;

  Box(int v) : value(v) {}
  Box(const Box& other) : value(other.value) {
    std::cout << "Copy constructor\\n";
  }
};

int main() {
  Box a(5);
  Box b = a;
  std::cout << b.value << std::endl;
  return 0;
}`,
        assignment:
          "Define a class with a copy constructor and show it being called when creating a copy.",
        starterCode: `#include <iostream>

class Item {
public:
  int data;

  Item(int d) : data(d) {}
  // Add copy constructor
};

int main() {
  Item a(10);
  // Create copy b from a
  return 0;
}`,
      },
      {
        slug: "move-constructor",
        section: "Copy / Move Semantics",
        label: "move constructor",
        topic: "Lesson: Move Constructor in C++",
        explanation:
          "A move constructor transfers resources from a temporary object to a new object, avoiding expensive deep copies.",
        example: `#include <iostream>
#include <utility>

class Buffer {
public:
  int* data;

  Buffer(int v) : data(new int(v)) {}

  Buffer(Buffer&& other) noexcept : data(other.data) {
    other.data = nullptr;
    std::cout << "Move constructor\\n";
  }

  ~Buffer() { delete data; }
};

int main() {
  Buffer a(42);
  Buffer b = std::move(a);
  return 0;
}`,
        assignment:
          "Implement a move constructor that transfers ownership and nulls the source pointer.",
        starterCode: `#include <iostream>
#include <utility>

class Holder {
public:
  int* ptr;

  Holder(int v) : ptr(new int(v)) {}
  // Add move constructor
  ~Holder() { delete ptr; }
};

int main() {
  Holder a(7);
  Holder b = std::move(a);
  return 0;
}`,
      },
      {
        slug: "copy-assignment",
        section: "Copy / Move Semantics",
        label: "copy assignment",
        topic: "Lesson: Copy Assignment Operator in C++",
        explanation:
          "Copy assignment defines behavior when assigning one existing object to another with =.",
        example: `#include <iostream>

class Number {
public:
  int value;

  Number(int v = 0) : value(v) {}

  Number& operator=(const Number& other) {
    if (this != &other) {
      value = other.value;
    }
    std::cout << "Copy assignment\\n";
    return *this;
  }
};

int main() {
  Number a(1), b(2);
  b = a;
  std::cout << b.value << std::endl;
  return 0;
}`,
        assignment:
          "Implement copy assignment with self-assignment check and copy all required fields.",
        starterCode: `#include <iostream>

class Counter {
public:
  int value;

  Counter(int v = 0) : value(v) {}
  // Add copy assignment operator
};

int main() {
  Counter a(3), b(9);
  b = a;
  return 0;
}`,
      },
      {
        slug: "move-assignment",
        section: "Copy / Move Semantics",
        label: "move assignment",
        topic: "Lesson: Move Assignment Operator in C++",
        explanation:
          "Move assignment transfers resources from one existing object to another and leaves the source in a safe state.",
        example: `#include <iostream>
#include <utility>

class Buffer {
public:
  int* data;

  Buffer(int v = 0) : data(new int(v)) {}

  Buffer& operator=(Buffer&& other) noexcept {
    if (this != &other) {
      delete data;
      data = other.data;
      other.data = nullptr;
    }
    std::cout << "Move assignment\\n";
    return *this;
  }

  ~Buffer() { delete data; }
};

int main() {
  Buffer a(10), b(20);
  b = std::move(a);
  return 0;
}`,
        assignment:
          "Implement move assignment that releases current resource, takes ownership, and nulls source.",
        starterCode: `#include <iostream>
#include <utility>

class Resource {
public:
  int* ptr;

  Resource(int v = 0) : ptr(new int(v)) {}
  // Add move assignment operator
  ~Resource() { delete ptr; }
};

int main() {
  Resource a(1), b(2);
  b = std::move(a);
  return 0;
}`,
      },
      {
        slug: "copy-move-semantics-challenge",
        section: "Copy / Move Semantics",
        label: "Challenge",
        isChallenge: true,
        topic: "Challenge: Copy / Move Semantics in C++",
        explanation:
          "Implement all four operations (copy/move constructor and copy/move assignment) for a resource-owning class.",
        example: `#include <iostream>
#include <utility>

class Data {
public:
  int* ptr;

  Data(int v = 0) : ptr(new int(v)) {}

  Data(const Data& other) : ptr(new int(*other.ptr)) {}

  Data(Data&& other) noexcept : ptr(other.ptr) {
    other.ptr = nullptr;
  }

  Data& operator=(const Data& other) {
    if (this != &other) {
      *ptr = *other.ptr;
    }
    return *this;
  }

  Data& operator=(Data&& other) noexcept {
    if (this != &other) {
      delete ptr;
      ptr = other.ptr;
      other.ptr = nullptr;
    }
    return *this;
  }

  ~Data() { delete ptr; }
};

int main() {
  Data a(5);
  Data b = a;
  Data c = std::move(a);
  b = c;
  c = Data(9);
  return 0;
}`,
        assignment:
          "Create a resource-owning class and correctly implement copy constructor, move constructor, copy assignment, and move assignment.",
        starterCode: `#include <iostream>
#include <utility>

class Data {
public:
  int* ptr;

  Data(int v = 0) : ptr(new int(v)) {}

  // Add copy constructor
  // Add move constructor
  // Add copy assignment
  // Add move assignment

  ~Data() { delete ptr; }
};

int main() {
  Data a(1);
  Data b = a;
  Data c = std::move(a);
  b = c;
  c = Data(5);
  return 0;
}`,
      },
      {
        slug: "arithmetic-operators",
        section: "Operator Overloading",
        label: "arithmetic operators",
        topic: "Lesson: Arithmetic Operator Overloading in C++",
        explanation:
          "You can overload arithmetic operators (like +, -, *) for your custom types so they behave naturally.",
        example: `#include <iostream>

struct Vec2 {
  int x, y;

  Vec2 operator+(const Vec2& other) const {
    return {x + other.x, y + other.y};
  }
};

int main() {
  Vec2 a{1, 2}, b{3, 4};
  Vec2 c = a + b;
  std::cout << c.x << ", " << c.y << std::endl;
  return 0;
}`,
        assignment:
          "Create a small class/struct and overload + so two objects can be added together.",
        starterCode: `#include <iostream>

struct Point {
  int x, y;

  // Overload +
};

int main() {
  Point a{2, 3}, b{4, 5};
  // Add points and print result
  return 0;
}`,
      },
      {
        slug: "comparison-operators",
        section: "Operator Overloading",
        label: "comparison operators",
        topic: "Lesson: Comparison Operator Overloading in C++",
        explanation:
          "Comparison operators (==, !=, <, >, etc.) can be overloaded to define how objects are compared.",
        example: `#include <iostream>

struct Student {
  int id;

  bool operator==(const Student& other) const {
    return id == other.id;
  }
};

int main() {
  Student a{1}, b{1};
  std::cout << (a == b) << std::endl;
  return 0;
}`,
        assignment:
          "Overload == for a custom type and compare two instances based on one field.",
        starterCode: `#include <iostream>

struct Item {
  int code;

  // Overload ==
};

int main() {
  Item a{10}, b{20};
  // Compare a and b, print result
  return 0;
}`,
      },
      {
        slug: "stream-operators",
        section: "Operator Overloading",
        label: "stream operators",
        topic: "Lesson: Stream Operator Overloading in C++",
        explanation:
          "Overloading stream operators (<< and >>) lets you print/read objects with iostream in a natural way.",
        example: `#include <iostream>

struct Book {
  int pages;
};

std::ostream& operator<<(std::ostream& os, const Book& b) {
  return os << "Book(pages=" << b.pages << ")";
}

int main() {
  Book b{250};
  std::cout << b << std::endl;
  return 0;
}`,
        assignment:
          "Overload << for a custom struct so it prints in a readable format.",
        starterCode: `#include <iostream>

struct Vector2 {
  int x, y;
};

// Overload << here

int main() {
  Vector2 v{5, 8};
  // Print v using cout
  return 0;
}`,
      },
      {
        slug: "operator-overloading-challenge",
        section: "Operator Overloading",
        label: "Challenge",
        isChallenge: true,
        topic: "Challenge: Operator Overloading in C++",
        explanation:
          "Build a custom type that overloads arithmetic, comparison, and stream operators together.",
        example: `#include <iostream>

struct Score {
  int value;

  Score operator+(const Score& other) const {
    return {value + other.value};
  }

  bool operator==(const Score& other) const {
    return value == other.value;
  }
};

std::ostream& operator<<(std::ostream& os, const Score& s) {
  return os << "Score(" << s.value << ")";
}

int main() {
  Score a{10}, b{15};
  Score c = a + b;
  std::cout << c << std::endl;
  std::cout << (a == b) << std::endl;
  return 0;
}`,
        assignment:
          "Create a custom type and overload +, ==, and <<. Demonstrate all three in main.",
        starterCode: `#include <iostream>

struct Score {
  int value;

  // Overload +
  // Overload ==
};

// Overload <<

int main() {
  Score a{3}, b{7};
  // Demonstrate +, ==, and <<
  return 0;
}`,
      },
      {
        slug: "function-templates",
        section: "Templates",
        label: "function templates",
        topic: "Lesson: Function Templates in C++",
        explanation:
          "Function templates let you write one generic function that works with multiple types.",
        example: `#include <iostream>

template <typename T>
T maxValue(T a, T b) {
  return (a > b) ? a : b;
}

int main() {
  std::cout << maxValue(3, 7) << std::endl;
  std::cout << maxValue(2.5, 1.9) << std::endl;
  return 0;
}`,
        assignment:
          "Create a function template that returns the smaller of two values.",
        starterCode: `#include <iostream>

template <typename T>
T minValue(T a, T b) {
  // Return smaller value
}

int main() {
  // Call minValue with int and double
  return 0;
}`,
      },
      {
        slug: "class-templates",
        section: "Templates",
        label: "class templates",
        topic: "Lesson: Class Templates in C++",
        explanation:
          "Class templates allow classes to be parameterized by type so one class can store different data types.",
        example: `#include <iostream>

template <typename T>
class Box {
public:
  T value;
  Box(T v) : value(v) {}
};

int main() {
  Box<int> a(5);
  Box<double> b(3.14);
  std::cout << a.value << ", " << b.value << std::endl;
  return 0;
}`,
        assignment:
          "Create a class template that stores one value and has a method to print it.",
        starterCode: `#include <iostream>

template <typename T>
class Holder {
public:
  T data;

  Holder(T d) : data(d) {}
  // Add print method
};

int main() {
  // Create Holder<int> and Holder<std::string>
  return 0;
}`,
      },
      {
        slug: "template-specialization",
        section: "Templates",
        label: "specialization",
        topic: "Lesson: Template Specialization in C++",
        explanation:
          "Template specialization lets you provide custom behavior for a specific type while keeping a generic template for others.",
        example: `#include <iostream>
#include <string>

template <typename T>
struct Printer {
  static void print(const T& value) {
    std::cout << value << std::endl;
  }
};

template <>
struct Printer<std::string> {
  static void print(const std::string& value) {
    std::cout << "[string] " << value << std::endl;
  }
};

int main() {
  Printer<int>::print(42);
  Printer<std::string>::print("hello");
  return 0;
}`,
        assignment:
          "Write a generic template and specialize it for one specific type.",
        starterCode: `#include <iostream>
#include <string>

template <typename T>
struct Show {
  static void print(const T& value) {
    // Generic print
  }
};

// Add specialization for std::string

int main() {
  // Call generic and specialized versions
  return 0;
}`,
      },
      {
        slug: "templates-challenge",
        section: "Templates",
        label: "Challenge",
        isChallenge: true,
        topic: "Challenge: Templates in C++",
        explanation:
          "Combine function templates, class templates, and specialization in one cohesive program.",
        example: `#include <iostream>
#include <string>

template <typename T>
T add(T a, T b) { return a + b; }

template <typename T>
class Pair {
public:
  T first, second;
  Pair(T a, T b) : first(a), second(b) {}
};

template <typename T>
struct Tag {
  static void print(const T& v) { std::cout << v << std::endl; }
};

template <>
struct Tag<std::string> {
  static void print(const std::string& v) { std::cout << "[s] " << v << std::endl; }
};

int main() {
  std::cout << add(2, 3) << std::endl;
  Pair<int> p(1, 2);
  Tag<int>::print(p.first + p.second);
  Tag<std::string>::print("templates");
  return 0;
}`,
        assignment:
          "Build one function template, one class template, and one specialization, then demonstrate all three in main.",
        starterCode: `#include <iostream>
#include <string>

// 1) Add function template
// 2) Add class template
// 3) Add template specialization

int main() {
  // Demonstrate all three
  return 0;
}`,
      },
      {
        slug: "std-thread",
        section: "Threads",
        label: "std::thread",
        topic: "Lesson: std::thread in C++",
        explanation:
          "std::thread runs a function concurrently in a separate thread of execution.",
        example: `#include <iostream>
#include <thread>

void worker() {
  std::cout << "Worker thread running\\n";
}

int main() {
  std::thread t(worker);
  t.join();
  std::cout << "Main done\\n";
  return 0;
}`,
        assignment:
          "Create a thread that runs a small function and print messages from both thread and main.",
        starterCode: `#include <iostream>
#include <thread>

void task() {
  // Print from worker thread
}

int main() {
  // Start thread with task
  // Join thread
  return 0;
}`,
      },
      {
        slug: "join-vs-detach",
        section: "Threads",
        label: "join vs detach",
        topic: "Lesson: join vs detach in C++",
        explanation:
          "join waits for a thread to finish before continuing. detach lets it run independently in the background.",
        example: `#include <iostream>
#include <thread>
#include <chrono>

void task() {
  std::this_thread::sleep_for(std::chrono::milliseconds(50));
  std::cout << "Task complete\\n";
}

int main() {
  std::thread t(task);
  t.join(); // wait for completion

  std::thread d(task);
  d.detach(); // run independently

  std::this_thread::sleep_for(std::chrono::milliseconds(100));
  return 0;
}`,
        assignment:
          "Write one example using join and one using detach, then describe behavior difference.",
        starterCode: `#include <iostream>
#include <thread>
#include <chrono>

void task() {
  // Simulate work and print a message
}

int main() {
  // Start thread and join
  // Start another thread and detach
  return 0;
}`,
      },
      {
        slug: "data-races",
        section: "Threads",
        label: "data races",
        topic: "Lesson: Data Races in C++",
        explanation:
          "A data race happens when multiple threads access shared data concurrently and at least one write is unsynchronized.",
        example: `#include <iostream>
#include <thread>
#include <mutex>

int counter = 0;
std::mutex m;

void increment() {
  for (int i = 0; i < 10000; ++i) {
    std::lock_guard<std::mutex> lock(m);
    counter++;
  }
}

int main() {
  std::thread t1(increment);
  std::thread t2(increment);
  t1.join();
  t2.join();
  std::cout << counter << std::endl;
  return 0;
}`,
        assignment:
          "Demonstrate shared counter updates from two threads and prevent data races using std::mutex.",
        starterCode: `#include <iostream>
#include <thread>
#include <mutex>

int counter = 0;
std::mutex m;

void work() {
  // Increment counter safely in a loop
}

int main() {
  // Start two threads, join, print counter
  return 0;
}`,
      },
      {
        slug: "threads-challenge",
        section: "Threads",
        label: "Challenge",
        isChallenge: true,
        topic: "Challenge: Threads in C++",
        explanation:
          "Use std::thread, choose proper thread lifetime handling, and avoid data races while updating shared state.",
        example: `#include <iostream>
#include <thread>
#include <vector>
#include <mutex>

int total = 0;
std::mutex m;

void addRange(int start, int end) {
  int local = 0;
  for (int i = start; i <= end; ++i) local += i;
  std::lock_guard<std::mutex> lock(m);
  total += local;
}

int main() {
  std::thread t1(addRange, 1, 50);
  std::thread t2(addRange, 51, 100);
  t1.join();
  t2.join();
  std::cout << total << std::endl;
  return 0;
}`,
        assignment:
          "Spawn multiple threads, synchronize shared updates to avoid races, and join all threads before printing final result.",
        starterCode: `#include <iostream>
#include <thread>
#include <mutex>

int total = 0;
std::mutex m;

void worker(int from, int to) {
  // Compute partial result and add to total safely
}

int main() {
  // Launch at least two threads and join them
  // Print total
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
      {
        slug: "everything-is-an-expression",
        section: "Expressions & Evaluation",
        label: "Everything is an expression",
        topic: "Lesson: Everything is an Expression in Haskell",
        explanation:
          "In Haskell, most constructs (including if-then-else) are expressions that evaluate to values.",
        example: `describe :: Int -> String
describe n =
  if n > 0 then "positive"
  else if n < 0 then "negative"
  else "zero"

main :: IO ()
main = print (describe 5)`,
        assignment:
          "Write a function that returns \"small\" or \"big\" using if-then-else as an expression.",
        starterCode: `sizeTag :: Int -> String
sizeTag n =
  -- Return "small" if n < 10, otherwise "big"
  ""

main :: IO ()
main = print (sizeTag 12)`,
      },
      {
        slug: "lazy-evaluation",
        section: "Expressions & Evaluation",
        label: "Lazy evaluation",
        topic: "Lesson: Lazy Evaluation in Haskell",
        explanation:
          "Haskell evaluates expressions only when needed, allowing infinite structures and deferred computation.",
        example: `numbers :: [Int]
numbers = [1..]

main :: IO ()
main = print (take 5 numbers)`,
        assignment:
          "Create an infinite list and print only the first 10 values using take.",
        starterCode: `nums :: [Int]
nums = [1..]

main :: IO ()
main =
  -- Print first 10 numbers from nums
  print []`,
      },
      {
        slug: "immutability",
        section: "Expressions & Evaluation",
        label: "Immutability",
        topic: "Lesson: Immutability in Haskell",
        explanation:
          "Values in Haskell are immutable. Instead of changing a value, you define new values from existing ones.",
        example: `main :: IO ()
main = do
  let x = 10
  let y = x + 5
  print x
  print y`,
        assignment:
          "Define a value and derive two new values from it without mutation, then print all three.",
        starterCode: `main :: IO ()
main = do
  let base = 3
  -- Define derived values without modifying base
  -- Print base and derived values
  pure ()`,
      },
    ],
  },
};

export const lessonList: LessonContent[] = Object.values(lessons);

export function isLessonKey(value: string): value is LessonKey {
  return value in lessons;
}

export function getTopicBySlug(lesson: LessonContent, topicSlug: string) {
  return lesson.topics.find((topic) => topic.slug === topicSlug);
}
