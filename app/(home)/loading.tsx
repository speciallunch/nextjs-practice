export default function Loading() {
  return <h2>Loading...</h2>;
}

// 이런 로딩페이지 구현이 가능한이유는, next.js가 컴포넌트를 "streaming" 하기 떄문이다!
// http를 streaming하기 떄문
