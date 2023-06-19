import { demos } from '#/lib/demos';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { getBlog } from '#/lib/getBlog';

export default function Page() {
  const blog = JSON.stringify(getBlog());

  return (
    // <div className="space-y-8">
    //   <h1 className="text-xl font-medium text-gray-300">Examples</h1>

    //   <div className="space-y-10 text-white">
    //     <div>
    //       <div>{gray.data.title}</div>
    //       <div>{gray.data.category}</div>
    //       <ReactMarkdown children={gray.content} />
    //     </div>
    //   </div>
    // </div>
    <div>{blog}</div>
  );
}
