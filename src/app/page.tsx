// pages/index.tsx
import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Book App!</h1>
      
      <section>
        <h2>Admin Section</h2>
        <nav>
          <ul>
            <li>
              <Link href="/admin/books">
                <div>Admin Books List</div>
              </Link>
            </li>
            <li>
              <Link href="/admin/books/new">
                <div>Create New Book</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2>End User Section</h2>
        <nav>
          <ul>
            <li>
              <Link href="/books">
                <div>Books List</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Home;