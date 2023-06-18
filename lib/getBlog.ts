import 'server-only';
import fs from 'fs';
import { cache } from 'react';
import matter from 'gray-matter';

// export type Contents = {};

const getBlog = cache(() => {
  const blog: { [key: string]: { [key: string]: any } } = {
    menu: {},
    boards: {},
    posts: {},
  };

  const dir = './posts';
  const categories: string[] = fs.readdirSync(dir);

  categories.forEach((category: string) => {
    blog.menu[category] = {};
    const boards: string[] = fs.readdirSync(`${dir}/${category}`);

    boards.forEach((board: string) => {
      const posts: string[] = fs.readdirSync(`${dir}/${category}/${board}`);

      const postData = posts.map((post: string) => {
        const frontmatter: any = matter(
          fs.readFileSync(`${dir}/${category}/${board}/${post}`, 'utf-8'),
        );
        return {
          category,
          board,
          file: post.replace('.md', ''),
          ...frontmatter,
          data: {
            ...frontmatter.data,
            created: frontmatter.data.created.toLocaleDateString('ko-KR'),
          },
        };
      });

      blog.menu[category][board] = posts.length;

      blog.boards[board] = {
        category,
        posts: postData,
        count: posts.length,
      };
    });
  });

  return blog;
});

export const getMenu = () => {
  return getBlog().menu;
};

export const getBoard = (target: string) => {
  let result: any = {};
  const boards: any = getBlog().boards;
  for (const board in boards) {
    if (board === target) {
      result = boards[target];
    }
  }
  return result;
};
