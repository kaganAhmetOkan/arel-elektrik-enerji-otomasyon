import style from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={style.main}>
      <div>
        <p>
          Made by <a href="https://www.upwork.com/freelancers/~013128e1c954c7dc29?viewMode=1" target="_blank">Kağan Ahmet Okan</a>
        </p>
        <p>
          Photograph by <a href="https://unsplash.com/@christopher__burns" target="_blank">Christopher Burns</a> on <a href="https://unsplash.com/photos/man-using-welding-machine-Wiu3w-99tNg" target="_blank">Unsplash</a>
        </p>
        <p>
          <a target="_blank" href="https://icons8.com/icon/85059/phone">Phone</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>
        <p>
          <a target="_blank" href="https://icons8.com/icon/86875/mail">Mail</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>
      </div>
      <div>
        <h1>AREL Elektrik & Enerji Otomasyon</h1>
      </div>
      <div>
        <Image src="/images/arel.svg" alt="AREL" width={200} height={100} />
      </div>
    </footer>
  );
};