import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { URL } from "../constants";

export const metadata: Metadata = {
  title: "Home",
};

async function getMovies() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }); // 이 로딩은 백엔드에서 일어나게 됨

  console.log("im fetching in Backend");
  const res = await fetch(URL);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies(); // Next.js가 fetch된 data를 캐싱해준다.
  // 브라우저에서 api를 통해 데이터를 가져오지도 않는다! 백엔드에서 data fetching!
  // (네트워크 탭으로 확인가능)
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
