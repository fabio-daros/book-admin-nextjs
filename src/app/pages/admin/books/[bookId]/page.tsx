import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookIcon, PlusIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <div className="flex justify-between items-center mt-20">
      <div>
      <h3 className="text-4xl font-bold text-[#8b5f26]">Managing Books</h3>
      </div>
      <div className="flex flex-1 min-h-0 bg-[#f5f0e1] px-20 py-20">
        <div className="hidden border-r bg-black-100/40 border-black-200 lg:block dark:border-gray-800">
          <nav className="flex flex-col gap-1.5">

            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#8b5f26] hover:text-[#bd1e59]  transition-all"
              href="/pages/admin/books">
              <BookIcon className="text-base font-medium text-[#8b5f26] text-center mx-auto" />
              All Books
            </Link>

            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#8b5f26] hover:text-[#bd1e59] transition-all"
              href="/pages/admin/books/new">
              <PlusIcon className="bg-[#8b5f26] text-white" />
              Add New
            </Link>

          </nav>
        </div>

        <div className="flex-1 min-h-0 flex flex-col">
          <main className="flex-1 overflow-auto p-4">
            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-[#8b5f26]">Edit Book</h1>
              </div>

              <div className="border rounded text-[#8b5f26] shadow-sm">

                <Card className="w-full max-w-3xl">
                  <CardHeader>
                    <div className="grid gap-1">
                      <CardTitle className="text-2xl font-bold text-[#8b5f26]">Editing...</CardTitle>
                      <CardDescription>Make changes to the book details.</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title"/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="author">Author</Label>
                        <Input id="author"/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="genre">Genre</Label>
                        <Input id="genre"/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="published">Published</Label>
                        <Input id="published"/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea className="min-h-[200px]" id="description"/>
                      </div>
                      <div className="space-y-2">
                        <Label>Image</Label>
                        <div className="flex items-center space-x-4">
                          <img
                            alt="Cover"
                            className="rounded"
                            height="225"
                            src="/placeholder.svg"
                            style={{
                              aspectRatio: "150/225",
                              objectFit: "cover",
                            }}
                            width="150"
                          />
                          <div className="flex flex-col space-y-2">
                            <Input className="max-w-sm" id="image" placeholder="Enter the image URL" />
                            <Button className="mt-6 bg-[#8b5f26] text-white">Upload new image</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex">
                    <Button className="mt-6 bg-[#8b5f26] text-white" variant="outline">
                      Save
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

