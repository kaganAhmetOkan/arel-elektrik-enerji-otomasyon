import style from "./About.module.scss";

export default function About() {
  return (
    <div className={style.main} id="about">
      <div className={style.container}>
        <h1>Hakkımızda</h1>
        <p>
          Elektrik ve enerji dağıtımı alanlarında mühendislik, entegrasyon ve saha destek hizmetleri vermekteyiz.
        </p>
        <p>
          Uzmanlığımız, önceden tasarlanmış, test edilmiş ve kurulum için hazır olan her yerde gerçekleştirilebilecek ve kurulabilecek özel yapım tak ve çalıştır çözümlerinin tasarım ve entegrasyonuna odaklıdır.
        </p>
        <p>
          Yönetimimiz, tüm teslimatlarımıza güvenli kalite sağlamakla kalmayıp, müşterilerimizin programlarının yerine getirilmesini ve bütçe dahilinde olmasını sağlamayı taahhüt ve temin eder.
        </p>
        <p>
          Birincil hizmetimiz, müşterilerimize sunduğumuz deneyimdir.
        </p>
        <p>
          Güvenilir, esnek, yetenekliyiz ve işinizi halletmek, zamandan ve kaynaklardan tasarruf etmek için uzmanlığımıza ve bağlılığımıza güvenebilirsiniz.
        </p>
      </div>
    </div>
  );
};