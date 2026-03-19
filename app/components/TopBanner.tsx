import Link from "next/link";
import { cookies } from "next/headers";
import { SESSION_COOKIE_NAME } from "../lib/auth";
import { prisma } from "../lib/prisma";

export default async function TopBanner() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  let currentUserName: string | null = null;
  if (sessionToken) {
    const session = await prisma.session.findUnique({
      where: { token: sessionToken },
      include: { user: true },
    });

    if (session && session.expiresAt > new Date()) {
      currentUserName = session.user.name;
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">CS Tutor</div>

        <div className="flex items-center text-sm font-medium">
          {currentUserName ? (
            <>
              <span className="rounded px-2 py-1 text-zinc-700 dark:text-zinc-200">Hi, {currentUserName}</span>
              <span className="px-1 text-zinc-400">|</span>
              <form action="/api/auth/logout" method="post">
                <button
                  type="submit"
                  className="rounded px-2 py-1 text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                >
                  Log out
                </button>
              </form>
              <span className="px-1 text-zinc-400">|</span>
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="rounded px-2 py-1 text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                Register
              </Link>
              <span className="px-1 text-zinc-400">|</span>
              <button
                type="button"
                className="rounded px-2 py-1 text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              >
                Log in
              </button>
              <span className="px-1 text-zinc-400">|</span>
            </>
          )}
          <button
            type="button"
            className="rounded bg-zinc-900 px-2 py-1 text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Premium
          </button>
        </div>
      </div>
    </header>
  );
}
