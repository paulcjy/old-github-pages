import PostBlock from './PostBlock';
import { getBoard, getStaticParams } from '#/lib/getBlog';
import Link from 'next/link';

export function generateStaticParams() {
  const staticParams = getStaticParams();
  return staticParams.board;
}

const fetchBoard = async (board: string) => {
  return await getBoard(board);
};

export default async function Page({ params }: { params: { board: string } }) {
  const boardData: any = await fetchBoard(params.board);
  const [board] = await Promise.all([boardData]);

  return (
    <div>
      {board.posts.map((post: any) => {
        return (
          <Link key={post.file} href={`/blog/${params.board}/${post.file}`}>
            <PostBlock
              title={post.data.title}
              description={post.data.description}
              date={post.data.date}
            />
          </Link>
        );
      })}
      {/* <div>{board.category}</div>
      <div>{board.count}</div> */}
    </div>
  );
}
