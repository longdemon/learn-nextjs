import { GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";

export interface PostPageProps {
  posts: any[];
}

export default function PostPage({ posts }: PostPageProps) {
  return (
    <div>
      <h1> List Post</h1>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  content: GetStaticPropsContext
) => {
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const datas = await response.json();
  return {
    props: {
      posts: datas.data.map((x: any) => ({id: x.id, title: x.title})),
    },
  };
};
