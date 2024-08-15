import Link from "next/link";
import styles from "./page.module.css";
import Input from './components/ui/Input';
import Button from './components/ui/Button';

export default function Home() {
  return (
    <main className={styles.main}>
       <Link href="/form">Form</Link>

       <div className="content">
        <Input placeholder="Put your name" type={"text"} id={"name"}/>
        <Input placeholder="Put your email" type={"email"} id={"email"} />
        <Input placeholder="Put your phone" type={"text"} id={"phone"}/>
      </div>
      <Button label="Save" />

    </main>
  );
}
