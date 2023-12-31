import style from "./Contact.module.scss";
import Image from "next/image";

export default function Contact() {
  const name = "Murat AKSAN";
  const number = "0532 477 19 67";
  const tel = "+905324771967";
  const email = "mrtaksan06@gmail.com";

  return (
    <div className={style.main} id="contact">
      <div className={style.container}>
        <div className={style.card}>
          <h1>İletişim</h1>
          <h2>{name}</h2>
          <div>
            <Image src="/images/phone.png" alt="phone" width={32} height={32} />
            <a href={`tel:${tel}`}>{number}</a>
          </div>
          <div>
            <Image src="/images/mail.png" alt="email" width={32} height={32} />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
    </div>
  );
};