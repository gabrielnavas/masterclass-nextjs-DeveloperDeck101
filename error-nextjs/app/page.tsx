import styles from "./page.module.css";
import Content from "./components/content/Content";

export default function Home() {
  return (
    <div className={styles.page}>
      <Content
        phrase="Seja bem vindo a HOME"
        button={{
          title: "Ir para o BLOG",
          url: "/blog"
        }}
      />
    </div>
  );
}
