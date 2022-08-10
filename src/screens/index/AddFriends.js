import Image from "next/image";
import React from "react";
import styles from "../../../styles/Index.module.css";
import Button from "../../components/Button";

const AddFriends = () => {
  return (
    <div className={`${styles.w100} ${styles.AddFriends}`}>
      <div className={`${styles.card} ${styles.createPost} `}>
        <div className={`${styles.addFeed}`}>
          <p>Añadir a tu feed</p>
          <Image src="/iMatch.svg" alt="iMatch" width={16} height={16} />
        </div>
        <AddFriend
          src="/images/familia.jpeg"
          name="Familia"
          description="Manufactura Medellin, Antioquia"
        />
        <AddFriend
          src="/images/nequi.jpeg"
          name="Nequi"
          description="Servicios financieros Medellín, Antioquia"
        />
        <AddFriend
          src="/images/espectador.jpeg"
          name="Espectador"
          description="Servicios de información Bogotá, Bogotá"
        />
      </div>
    </div>
  );
};

export const AddFriend = ({ src, name, description }) => {
  return (
    <div style={{ marginTop: "7px" }}>
      <div className={`${styles.row} ${styles.alignCenter}`}>
        <Image
          src={src}
          alt="profile Photo"
          width={48}
          height={48}
          className={styles.profilePhoto}
        />
        <div>
          <p className={styles.nameAddContacts}>{name}</p>
          <p className={styles.textAddContacts}>{description}</p>
        </div>
      </div>
      <Button
        text="+ Seguir"
        color="white"
        textColor="rgba(0, 0, 0, 0.6)"
        hoverColor="rgba(0, 0, 0, 0.1)"
        fontSize="16px"
        height="34px"
        className={styles.followButton}
        style={{ marginLeft: "55.68px", marginTop: "4px" }}
      />
    </div>
  );
};

export default AddFriends;
