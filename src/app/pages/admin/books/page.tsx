import { Button } from '@mui/material';
import Link from "next/link"
import { TableRow, TableHead, TableCell, TableBody, Table } from "@mui/material"
import { CheckIcon } from '@radix-ui/react-icons';
import { BookIcon, FileEditIcon, MenuIcon, PlusIcon } from 'lucide-react';

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-14 gap-4 border-b px-6 lg:h-20 bg-gray-100/40 dark:bg-gray-800/40">
        <Button className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <h1 className="text-lg font-semibold">Books</h1>
      </header>
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <div className="hidden border-r bg-gray-100/40 border-gray-200 lg:block dark:border-gray-800">
          <nav className="flex flex-col gap-1.5">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <BookIcon className="h-4 w-4" />
              All Books
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <PlusIcon className="h-4 w-4" />
              Add New
            </Link>
          </nav>
        </div>
        <div className="flex-1 min-h-0 flex flex-col">
          <main className="flex-1 overflow-auto p-4">
            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-4">
                <h1 className="font-semibold text-2xl">All Books</h1>
                <Button className="ml-auto">
                  Add New
                </Button>
              </div>
              <div className="border rounded-lg shadow-sm">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableHead className="w-12" />
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Genre</TableHead>
                      <TableHead className="w-12" />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className="bg-gray-100 rounded-md dark:bg-gray-800">
                      <TableCell className="flex w-12 justify-center items-center">
                        <CheckIcon className="w-4 h-4 fill-white" />
                      </TableCell>
                      <TableCell className="font-medium">The Great Gatsby</TableCell>
                      <TableCell>F. Scott Fitzgerald</TableCell>
                      <TableCell className="hidden md:table-cell">Romance</TableCell>
                      <TableCell className="flex w-12 justify-end">
                      <Button className="mt-6 bg-[#8b5f26] text-white">
                          <FileEditIcon className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="flex w-12 justify-center items-center">
                        <CheckIcon className="w-4 h-4 fill-white" />
                      </TableCell>
                      <TableCell className="font-medium">To Kill a Mockingbird</TableCell>
                      <TableCell>Harper Lee</TableCell>
                      <TableCell className="hidden md:table-cell">Fiction</TableCell>
                      <TableCell className="flex w-12 justify-end">
                      <Button className="mt-6 bg-[#8b5f26] text-white">
                          <FileEditIcon className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="flex w-12 justify-center items-center">
                        <CheckIcon className="w-4 h-4 fill-white" />
                      </TableCell>
                      <TableCell className="font-medium">1984</TableCell>
                      <TableCell>George Orwell</TableCell>
                      <TableCell className="hidden md:table-cell">Dystopian</TableCell>
                      <TableCell className="flex w-12 justify-end">
                      <Button className="mt-6 bg-[#8b5f26] text-white">
                          <FileEditIcon className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="flex w-12 justify-center items-center">
                        <CheckIcon className="w-4 h-4 fill-white" />
                      </TableCell>
                      <TableCell className="font-medium">The Catcher in the Rye</TableCell>
                      <TableCell>J.D. Salinger</TableCell>
                      <TableCell className="hidden md:table-cell">Coming of Age</TableCell>
                      <TableCell className="flex w-12 justify-end">
                      <Button className="mt-6 bg-[#8b5f26] text-white">
                          <FileEditIcon className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
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

