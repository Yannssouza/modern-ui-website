import { card } from "../assets";
import styles, { layout } from "../style.js";
import Button from "../components/Button.jsx";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better <br className="hidden sm:block" /> car deal in few ease
        steps.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor Aliquet ultrices ac, ametau
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="" className="h-[100%] w-[100%]" />
    </div>
  </section>
);

export default CardDeal;
