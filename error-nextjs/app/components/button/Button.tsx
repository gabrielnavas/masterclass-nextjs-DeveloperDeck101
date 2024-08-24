import styles from './Button.module.css'

type Props = {
  content: string
}

export default function Button({ content }: Props) {
  return (
    <button className={styles.container}>
      {content}
    </button>
  )
}
