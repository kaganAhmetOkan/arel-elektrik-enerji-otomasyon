import style from "./Navbar.module.scss";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ children }) {
  return (
    <nav className={style.main}>
      <div className={style.logo}>
        <Image src="/images/arel.svg" alt="AREL" fill />
      </div>
      <div className={style.items}>
        {children.map(child => <Link key={child.name} href={child.href} >{child.name}</Link>)}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  children: PropTypes.array.isRequired,
};