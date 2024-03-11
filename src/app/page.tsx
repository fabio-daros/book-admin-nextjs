import React from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <section>
        <main className="flex justify-between items-center mt-20">
          <div className="max-w-lg">
            <h2 className="text-5xl font-bold leading-tight text-[#8b5f26]">Find your next favorite book here</h2>
            <p className="mt-4 text-base text-[#8b5f26]">
            Explore a world of captivating stories and discover new adventures. 
            Our curated collection of books is sure to delight readers of all tastes and preferences.
            </p>
            <Link href="/pages/books">
                <Button className="mt-6 bg-[#8b5f26] text-white">See More</Button>
            </Link>
          </div>
          <div className="flex space-x-4">
            <img
              alt="Book cover"
              className="rounded-lg shadow-lg"
              height="240"
              src="/placeholder.svg"
              style={{
                aspectRatio: "160/240",
                objectFit: "cover",
              }}
              width="160"
            />
            <img
              alt="Book cover"
              className="rounded-lg shadow-lg"
              height="240"
              src="/placeholder.svg"
              style={{
                aspectRatio: "160/240",
                objectFit: "cover",
              }}
              width="160"
            />
            <img
              alt="Book cover"
              className="rounded-lg shadow-lg"
              height="240"
              src="/placeholder.svg"
              style={{
                aspectRatio: "160/240",
                objectFit: "cover",
              }}
              width="160"
            />
          </div>
        </main>
      </section>
    </div>
  );
};

export default Home;