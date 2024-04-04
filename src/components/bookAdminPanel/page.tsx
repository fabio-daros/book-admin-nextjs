import { BookIcon, PlusIcon } from 'lucide-react';
import React, { createContext } from 'react';
import { Link } from 'react-router-dom';

const PanelContext = createContext(null);

const BookAdminPanel: React.FC = () => {
  return (
    <PanelContext.Provider value={null}>
      <div className="flex justify-between items-center mt-20">
        <div className="flex flex-1 min-h-0 bg-[#f5f0e1] px-20 py-20">
          <div className="hidden border-r bg-black-100/40 border-black-200 lg:block dark:border-gray-800">
            <nav className="flex flex-col gap-1.5">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#8b5f26] hover:text-[#bd1e59]  transition-all"
                to="/admin/books"
              >
                <BookIcon className="text-base font-medium text-[#8b5f26] text-center mx-auto" />
                All Books
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#8b5f26] hover:text-[#bd1e59] transition-all"
                to="/admin/books/new"
              >
                <PlusIcon className="bg-[#8b5f26] text-white" />
                Add New
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </PanelContext.Provider>
  );
};

export default BookAdminPanel; PanelContext;
