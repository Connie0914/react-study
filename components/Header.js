import Link from "next/Link";
import classes from './Header.module.css'

export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a className={classes.anchor}>Index</a>
      </Link>
      <Link href="/about">
        <a className={classes.anchor}>About</a>
      </Link>
    </header>
  )
}
