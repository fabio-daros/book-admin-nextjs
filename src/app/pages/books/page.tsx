import React from 'react';
import { CardContent, Card } from "@/components/ui/card"
import Link from 'next/link';

export function Component() {
  return (
    <div className="custom-grid">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-[#8b5f26]">Discover Your Next Great Read</h1>
      </div>
      <Link className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#8b5f26] hover:text-[#bd1e59]  transition-all"
              href="/pages/books/bookId">
      <Card>
        <CardContent className="p-4 md:p-6">
          <div className="grid gap-4 items-start">
            <img
              alt="Book Cover"
              className="aspect-5/8 object-cover rounded-lg border border-gray-200 overflow-hidden dark:border-gray-800 dark:border-gray-800"
              height={400}
              src="/placeholder.svg"
              width={250}
            />
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold text-[#8b5f26]">The Midnight Library</h2>
              <p className="text-gray-500 dark:text-gray-400">By Matt Haig</p>
            </div>
            <div>
              <p className="text-lg leading-loose">
                Somewhere out beyond the edge of the universe there is a library that contains an infinite number of
                books, each one the story of another reality. One tells the story of your life as it is, along with
                another book for the other life you could have lived if you had made a different choice at any point in
                your life. While we all wonder how our lives might have been, what if you had the chance to go to the
                library and see for yourself? Would any of these other lives truly be better?
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      </Link>
    </div>
  )
}

export default Component;