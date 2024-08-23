import style from './page.module.css'

import Product from "../components/Product/Product";

export default async function WithoutSuspend() {
  return (
    <div>
      <div className={style.container}>
        <Product />
      </div>
      Sou um texto e só apareço quando o component Product for carregado
    </div>
  );
}
