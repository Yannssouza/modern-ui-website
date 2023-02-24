import styles from "../style.js";
import { discount, robot } from "../assets";

const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
    >
      <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] py-[6px] px-4">
        <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20% </span>
          Discount For <span className="text-white">1 Month </span>
          Account
        </p>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <h1 className="flex-1 font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[72px] ss:leading-[100px]">
          The Next <br className="hidden sm:block" />{" "}
          <span className="text-gradient">Generation</span> Payment Method.
        </h1>
      </div>
    </div>
  </section>
);

export default Hero;
