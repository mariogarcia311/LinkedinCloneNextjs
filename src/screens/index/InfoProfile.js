import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../../styles/Index.module.css";
import { BiCalendarEvent } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
const InfoProfile = () => {
  return (
    <div className={`${styles.column} ${styles.infoProfile}`}>
      <div className={styles.cardInfoProfile}>
        <div className={`${styles.itemCard} ${styles.boderBottom}`}>
          <div className={styles.coverPhotoContainer}>
            <Image
              src="/images/coverPhoto.webp"
              alt="Picture of the author"
              layout="responsive"
              width={"100%"}
              height={25}
              className={styles.coverPhoto}
            />
          </div>
          <div className={styles.profilePhotoContainer}>
            <Image
              src="/images/profile.webp"
              alt="Picture of the author"
              width={68}
              height={68}
              className={styles.profilePhoto}
            />
          </div>
          <div>
            <p className={styles.userName}>Mario García Márquez</p>
            <p className={styles.userDescription}>
              Front-end developer | React | Next.js | React Native | Node.js |
              express.js
            </p>
          </div>
        </div>
        <div className={styles.boderBottom}>
          <ul>
            <Link href={"/"}>
              <li className={styles.liProfile}>
                <p style={{ margin: 0 }}>Quién ha visto tu perfil</p>
                <p style={{ color: "#0a66c2", margin: 0 }}>131</p>
              </li>
            </Link>
            <Link href={"/"}>
              <li className={styles.liProfile}>
                <p style={{ margin: 0 }}>Impresiones de tu publicación</p>
                <p style={{ color: "#0a66c2", margin: 0 }}>12</p>
              </li>
            </Link>
          </ul>
        </div>
        <Link href={"/"}>
          <div
            className={`${styles.itemCardLink} ${styles.buyPremium} ${styles.boderBottom}`}
          >
            <p
              style={{
                color: "rgba(0, 0, 0, 0.6)",
                margin: 0,
                fontWeight: 400,
              }}
            >
              Accede a información y herramientas exclusivas
            </p>
            <span className={styles.alignCenter}>
              <Image
                src="/premiumIcon.svg"
                alt="premiumIcon"
                width={18}
                height={18}
              />
              Prueba Premium gratis
            </span>
          </div>
        </Link>
        <div>
          <Link href={"/"}>
            <div className={`${styles.itemCardLink} ${styles.buyPremium}`}>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.9)",
                  margin: 0,
                  fontWeight: 600,
                }}
                className={styles.alignCenter}
              >
                <Image
                  src="/ribbonIcon.svg"
                  alt="ribbon icon"
                  width={18}
                  height={18}
                />
                &nbsp; Marcapáginas
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.cardInfoProfile}>
        <div>
          <div className={styles.titleGroupsAndEvents}>
            <p>Recientes</p>
          </div>
          <ul>
            <Link href={"/"}>
              <li className={styles.liGroupsAndEvents}>
                <HiUserGroup size="15" />
                <p style={{ margin: 0 }}>Front End Developer Group</p>
              </li>
            </Link>
            <Link href={"/"}>
              <li className={styles.liGroupsAndEvents}>
                <BiCalendarEvent size="15" />
                <p style={{ margin: 0 }}>Patrones de diseño</p>
              </li>
            </Link>
            <Link href={"/"}>
              <li className={styles.liGroupsAndEvents}>
                <BiCalendarEvent size="15" />
                <p style={{ margin: 0 }}>CoE: de la teoría a la practica</p>
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <div className={styles.titleGroupsAndEvents}>
            <a>Grupos</a>
          </div>
          <ul>
            <Link href={"/"}>
              <li className={styles.liGroupsAndEvents}>
                <HiUserGroup size="15" />
                <p style={{ margin: 0 }}>Front End Developer Group</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.boderBottom}>
          <div className={styles.titleGroupsAndEvents}>
            <a>Eventos</a>
          </div>
          <ul>
            <Link href={"/"}>
              <li className={styles.liGroupsAndEvents}>
                <BiCalendarEvent size="15" />
                <p style={{ margin: 0 }}>Patrones de diseño</p>
              </li>
            </Link>
            <Link href={"/"}>
              <li className={styles.liGroupsAndEvents}>
                <BiCalendarEvent size="15" />
                <p style={{ margin: 0 }}>CoE: de la teoría a la practica</p>
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <Link href={"/"}>
            <div
              className={styles.liGroupsAndEvents}
              style={{ margin: 0, justifyContent: "center" }}
            >
              <p
                style={{ margin: "3px", textAlign: "center", fontSize: "15px" }}
              >
                Ver más
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoProfile;
