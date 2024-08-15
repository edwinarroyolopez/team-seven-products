import Link from "next/link";
import styles from "./page.module.css";
import Input from './components/ui/Input';
import Button from './components/ui/Button';
import { useState } from 'react';
export default function Home() {
  return (
    <main className={styles.main}>
       <Link href="/form">Form</Link>
       <Link href="/table">table</Link>

  

    </main>
  );
}
