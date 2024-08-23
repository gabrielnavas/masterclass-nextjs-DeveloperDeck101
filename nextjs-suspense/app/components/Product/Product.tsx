import style from './Product.module.css'

export default async function Product() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return (
    <div className={style.container}>
      Produto...
    </div>
  );
}
