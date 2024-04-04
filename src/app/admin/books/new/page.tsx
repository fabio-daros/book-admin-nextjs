"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import Link from 'next/link';
import { BookIcon, PlusIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

interface BookFormData {
  _id: number;
  title: string;
  author: string;
  genre: string;
  published: string;
  description: string;
  image: string;
}

export default function NewBook() {
  const [formData, setFormData] = useState<BookFormData>({
    _id: 0,
    title: '',
    author: '',
    genre: '',
    published: '',
    description: '',
    image: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageUrl = e.target.value;
    setFormData((prevData) => ({ ...prevData, image: imageUrl }));
  };

  const API_ENDPOINT = 'https://crudcrud.com/api/e465c620a1194d69b40e89674de007d1/books';
  const handleSaveClick = async () => {
    console.log
    try {
      await axios.post(API_ENDPOINT, formData);
      setFormData({
        _id: 0,
        title: '',
        author: '',
        genre: '',
        published: '',
        description: '',
        image: '',
      });
      alert('Book saved successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while saving the book.');
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSaveClick();
  };

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
              href="/admin/books"
            >
              <BookIcon className="text-base font-medium text-[#8b5f26] text-center mx-auto" />
              All Books
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#8b5f26] hover:text-[#bd1e59] transition-all"
              href="/admin/books/new"
            >
              <PlusIcon className="bg-[#8b5f26] text-white" />
              Add New
            </Link>
          </nav>
        </div>
        <div className="flex-1 min-h-0 flex flex-col">
          <main className="flex-1 overflow-auto p-4">
            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-[#8b5f26]">Add New</h1>
              </div>
              <div>
                <Card className="w-full max-w-3xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#8b5f26]">Adding...</CardTitle>
                    <CardDescription>Enter the book's information below.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={onSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="title">Title</Label>
                          <Input id="title" name="title" value={formData.title} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="author">Author</Label>
                          <Input id="author" name="author" value={formData.author} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="genre">Genre</Label>
                          <Input id="genre" name="genre" value={formData.genre} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="published">Published</Label>
                          <Input id="published" name="published" value={formData.published} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea className="min-h-[200px]" id="description" name="description" value={formData.description} onChange={handleInputChange} />
                        </div>
                        <div className="space-y-2">
                          <Label>Image</Label>
                          <div className="flex items-center space-x-4">
                            <img
                              alt="Cover"
                              className="rounded"
                              height="225"
                              src={formData.image || "/placeholder.svg"}
                              style={{
                                aspectRatio: "150/225",
                                objectFit: "cover",
                              }}
                              width="150"
                            />
                            <div className="flex flex-col space-y-2">
                              <input type="file" onChange={handleImageChange} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardFooter className="flex">
                        <Button className="mt-6 bg-[#8b5f26] text-white" variant="outline" type="submit">
                          Save
                        </Button>
                      </CardFooter>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}