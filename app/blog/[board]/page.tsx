import PostBlock from './PostBlock';
import { getBoard, getStaticParams } from '#/lib/getBlog';
import Link from 'next/link';

export async function generateStaticParams() {
  const staticParams = await fetchStaticParams();
  return staticParams.board;

  // return [
  //   { board: 'github' },
  //   { board: 'pages' },
  //   { board: 'pc' },
  //   { board: 'linux' },
  // ];
}

const fetchBoard = async (board: string) => {
  return await getBoard(board);
};

const fetchStaticParams = async () => {
  return await getStaticParams();
};

export default async function Page({ params }: { params: { board: string } }) {
  const boardData: any = await fetchBoard(params.board);
  const [board] = await Promise.all([boardData]);

  // return (
  //   <div>
  //     {board.posts.map((post: any) => {
  //       return (
  //         <Link key={post.file} href={`/blog/${params.board}/${post.file}`}>
  //           <PostBlock
  //             title={post.data.title}
  //             description={post.data.description}
  //             date={post.data.date}
  //           />
  //         </Link>
  //       );
  //     })}
  //     {/* <div>{board.category}</div>
  //     <div>{board.count}</div> */}
  //   </div>
  // );

  return <div>this is board: {params.board}</div>;
}
