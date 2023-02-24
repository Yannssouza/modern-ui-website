import { features } from "../constants/index.js";
import styles, { layout } from "../style.js";
import Button from "./Button.jsx";

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="hidden sm:block" /> we'll handle the
        money.
      </h2>
      <p>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
    </div>
  </section>
);

export default Business;
