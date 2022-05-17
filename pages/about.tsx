import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react"; //tsdrpfc

const Header = dynamic(() => import("../component/header"), { ssr: false });
export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([]);
  const router = useRouter();

  const page = Number(router.query?.page)

  useEffect(() => {
    if(!page) return

    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const datas = await response.json();

      setPostList(datas.data);
    })();
  }, [page]);

  function handleNextClick() {
    router.push(
      {
        pathname: "/about",
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    ); 
  }

  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next page</button>
    </div>
  );
}
