import Pet from "../Pet.jsx";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      <Pet name="Patti" animal="Patti" breed="Pattida patti" />
      <Pet name="Thendi Patti" animal="Thendi Patti" breed="Pattida patti" />
      <Pet name="Sori Patti" animal="Sori Patti" breed="Pattida patti" />
      Contents
    </div>
  );
};

export default Content;
