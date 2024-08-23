import style from './User.module.css'

export default async function User() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <div className={style.container}>
      User, sou o mais rápido, mas o resto depende de mim!
    </div>
  );
}
