"use client";

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TableRow, TableHead, TableCell, TableBody, Table } from "@mui/material"
import { BookIcon, FileEditIcon, PlusIcon } from 'lucide-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Book {
  _id: number;
  title: string;
  author: string;
  genre: string;
}

export default function AdminBooks() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<Book[]>('https://crudcrud.com/api/e465c620a1194d69b40e89674de007d1/books');
       
        setBooks(response.data);
      } catch (error) {
        console.error(error);
        alert('An error occurred while fetching the books.');
      }
    };

    fetchBooks();
  }, []);

  return (

    <div className="flex justify-between items-center mt-20">
      <div>
        <h3 className="text-4xl font-bold text-[#8b5f26]">Registered Books</h3>
      </div>
      <div className="flex flex-1 min-h-0 bg-[#f5f0e1] px-20 py-20">
        <div className="hidden border-r bg-black-100/40 border-black-200 lg:block dark:border-gray-800">
          <nav className="flex flex-col gap-1.5">

            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#8b5f26] hover:text-[#bd1e59]  transition-all"
              href="/admin/books">
              <BookIcon className="text-base font-medium text-[#8b5f26] text-center mx-auto" />
              All Books
            </Link>

            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#8b5f26] hover:text-[#bd1e59] transition-all"
              href="/admin/books/new">
              <PlusIcon className="bg-[#8b5f26] text-white" />
              Add New
            </Link>

          </nav>
        </div>

        <div className="flex-1 min-h-0 flex flex-col">
          <main className="flex-1 overflow-auto p-4">
            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-[#8b5f26]">All Books</h1>
              </div>

              <div className="border rounded-lg text-[#8b5f26] shadow-sm">
                <Table>
                  <TableHead>
                    <TableRow className="bg-gray-100 rounded-md">
                      <TableCell custom-w-3-12>Cod.</TableCell>
                      <TableCell custom-w-3-12>Title</TableCell>
                      <TableCell custom-w-3-12>Author</TableCell>
                      <TableCell custom-w-3-12>Genre</TableCell>
                      <TableCell custom-w-1-12>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>

                    {books.map((book, index) => (
                      <TableRow key={index} className="bg-gray-100 rounded-md">
                        <TableCell className="font-medium">{book._id}</TableCell>
                        <TableCell className="font-medium">{book.title}</TableCell>
                        <TableCell className="font-medium">{book.author}</TableCell>
                        <TableCell className="hidden md:table-cell">{book.genre}</TableCell>

                        <TableCell custom-w-1-12>
                          <Link href={`/pages/admin/books/${book._id}`}>
                            <Button className="bg-[#8b5f26] text-white">
                              <FileEditIcon className="w-4 h-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

