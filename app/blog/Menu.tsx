import Link from 'next/link';
import clsx from 'clsx';
import { getMenu } from '#/lib/getBlog';

export default (async function Menu() {
  const menu = await getMenu();

  return (
    <div className="space-y-5">
      {Object.entries(menu).map(([category, boards]: [string, any]) => {
        return (
          <div key={category}>
            <div className="text-small mb-1 px-3 font-semibold tracking-wider text-zinc-400">
              <div>{category}</div>
            </div>

            {Object.entries(boards).map(([board, count]: [string, any]) => {
              return (
                <Link
                  href={`/blog/${board}`}
                  key={board}
                  className={clsx(
                    'block rounded-md px-3 py-1 text-sm font-medium text-white hover:bg-zinc-800 hover:text-zinc-100',
                  )}
                >
                  <span className="pr-1.5">{board}</span>
                  <span className="text-gray-400">({count})</span>
                  {/* {`${board} (${count})`} */}
                </Link>
              );
            })}
            <div className="mb-6"></div>
            {/* {Object.entries(boards).map((board) => {
              console.log(board);

              // const isActive = board.slug === selectedLayoutSegments;

              // return (
              //   <div key={board}>
              //     
              //   </div>
              // );
            }} */}
          </div>
        );
      })}
    </div>
  );
} as unknown as () => JSX.Element);
