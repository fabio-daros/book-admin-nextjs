import Link from "next/link"

export default function Component() {
  return (
    
    <div className="custom-container">
      <div className="flex justify-start">
        <Link className="text-[#8b5f26]" href="/books/">
        ← Back
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-[#8b5f26]">The Midnight Library</h1>
          <p className="text-sm leading-none text-muted text-[#8b5f26]">By</p>
          <p className="text-xl font-semibold text-[#8b5f26]">Matt Haig</p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-6 items-start text-[#8b5f26]">
        <div className="grid md:col-span-2 md:gap-4 lg:gap-8">
          <img
            alt="The Midnight Library"
            className="aspect-[2/3] object-cover rounded-lg border border-gray-200 overflow-hidden dark:border-gray-800"
            height={900}
            src="/placeholder.svg"
            width={600}
          />
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-[#8b5f26]">The Midnight Library</h2>
            <p className="text-sm leading-none text-muted text-[#8b5f26]">By</p>
            <p className="text-xl font-semibold text-[#8b5f26]">Matt Haig</p>
          </div>
          <div className="grid gap-2">
            <p className="text-sm leading-none text-muted text-[#8b5f26]">Publication Date</p>
            <p>August 13, 2020</p>
          </div>
          <div className="grid gap-2">
            <p className="text-sm leading-none text-muted text-[#8b5f26]">Genre</p>
            <p>Fiction, Fantasy, Philosophy</p>
          </div>
          <div className="grid gap-2">
            <p className="text-sm leading-none text-muted text-[#8b5f26]">Description</p>
            <p>
              Between life and death there is a library, and within that library, the shelves go on forever. Every book
              provides a chance to try another life you could have lived. To see how things would be if you had made
              other choices... Would you have done anything differently if you had the chance to undo your regrets?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface PlusIconProps {
  [key: string]: any;
}

function PlusIcon(props: PlusIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


interface StarIconProps {
  [key: string]: any;
}

function StarIcon(props: StarIconProps): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
