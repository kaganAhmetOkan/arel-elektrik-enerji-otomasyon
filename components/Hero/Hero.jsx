import style from "./Hero.module.scss";
import PropTypes from "prop-types";
import Image from "next/image";

export default function Hero({ children }) {
  return (
    <div className={style.main}>
      <h1>{children.map((child, index) => (
        <span key={child} style={{ "--animation-delay": `${index * 100}ms`}} className={style.child}>{child}</span>
      ))}</h1>
      <div className={style.image}>
        <Image src="/images/engineer.jpg" alt="engineer" fill />
      </div>
    </div>
  );
};

Hero.propTypes = {
  children: PropTypes.any.isRequired,
};