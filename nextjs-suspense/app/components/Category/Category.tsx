import style from './Category.module.css'

export default async function Category() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return (
    <div className={style.container}>
      Categoria mais demorada....
    </div>
  );
}
