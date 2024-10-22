"use client"; // 이게 있든없든 일단 컴포넌트와 페이지들은 전부 backend에서 render된다
// console.log 찍어보면 backend terminal에서 찍히는게 그걸 증명
// rendering? 브라우저가 이해할 수 있는 HTML로 변환하는 작업
// 브라우저에서 javascript 비활성화해도 next.js 컴포넌트는 화면을 볼 수 있는 것이 그걸 증명

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname(); // client component에서만 사용할 수 있음
  const [count, setCount] = useState(0);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">HOME</Link>
          {path === "/" ? "✅" : ""}
        </li>
        <li>
          <Link href="/about-us">About-us</Link>
          {path === "/about-us" ? "✅" : ""}
        </li>
        <li>
          <button
            onClick={() => {
              setCount((c) => c + 1);
            }}
          >
            {count}
          </button>
        </li>
      </ul>
    </nav>
  );
}
