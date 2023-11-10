import Pet from "../Pet.jsx";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.contentWrap}>
      <div className={styles.sidebarWrap}>Sidebar</div>
      <div className={styles.content}>
        Content View
        <Pet name="Patti" animal="Patti" breed="Pattida patti" />
        <Pet name="Thendi Patti" animal="Thendi Patti" breed="Pattida patti" />
        <Pet name="Sori Patti" animal="Sori Patti" breed="Pattida patti" />
        Contents
      </div>
    </div>
  );
};

export default Content;
