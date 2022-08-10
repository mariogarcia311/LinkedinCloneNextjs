import React from "react";
import styles from "../../../styles/Index.module.css";
import InfoProfile from "./InfoProfile";
import Feed from "./Feed";
import AddFriends from "./AddFriends";
import Navbar from "../../components/Navbar/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className={styles.globalContainer}>
        <div className={styles.indexContainer}>
          <InfoProfile />
          <Feed />
          <AddFriends />
        </div>
      </div>
    </>
  );
};

export default Index;
