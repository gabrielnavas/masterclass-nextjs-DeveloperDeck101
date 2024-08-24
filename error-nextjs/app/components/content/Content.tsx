import Link from 'next/link'

import styles from './Content.module.css'

import Button from '../button/Button'

type Props = {
  phrase: string
  button: {
    title: string
    url: string
  }
}

export default function Content(props: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {props.phrase}
      </p>
      <Link href={props.button.url}>
        <Button content={props.button.title} />
      </Link>
    </div>
  )
}
