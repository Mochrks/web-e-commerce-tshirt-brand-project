import styles from "./style";
import {
  Navbar,
  Hero,
  Footer,
  Tshirt,
  Men,
  Favourite,
  Women,
  Gallery,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} sm:pb-[130px] p-[10px]`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Tshirt />

        <Favourite />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Men />
        <Women />
        <Gallery />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexCenter} pt-[200px]`}
    >
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
