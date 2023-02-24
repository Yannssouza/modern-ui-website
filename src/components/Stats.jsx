import { stats } from "../constants";
import styles from "../style.js";

const Stats = () => (
  <section className={`${styles.flexCenter} flex´wrap mb-6 flex-row sm:mb-20`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`m-3 flex flex-1 flex-row items-center justify-start`}
      >
        <h4 className="xs:text=[40px] font-poppins text-[30px] font-semibold leading-[43px] text-white xs:leading-[53px]">
          {stat.value}
        </h4>
        <p className="xs:text=[20px] text-gradient ml-3 font-poppins text-[15px] font-normal uppercase leading-[21px] xs:leading-[26px]">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
