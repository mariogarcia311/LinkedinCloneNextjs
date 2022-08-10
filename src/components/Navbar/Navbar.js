import Link from "next/link";
import React from "react";
import styles from "../../../styles/Navbar.module.css";
import { FaLinkedin } from "react-icons/fa";
import { ImSearch, ImHome3 } from "react-icons/im";
import { BsPeopleFill, BsBriefcaseFill } from "react-icons/bs";
import { MdSms } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { useRouter } from "next/router";
import { colors } from "../../config/colors";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <div>
            <FaLinkedin size="40" color="#0a66c2" />
          </div>
        </Link>
        <div className={styles.containerIconSearch}>
          <ImSearch size="22" color={colors.gray600} />
          <p className={styles.text_icon}>Buscar</p>
        </div>
        <div className={styles.searchBox}>
          <ImSearch
            size="14"
            color={colors.gray600}
            className={styles.searchIcon}
          />
          <input
            type="text"
            name="search"
            className={styles.inputText}
            placeholder="Buscar"
          />
        </div>

        <Link href="/">
          <div className={styles.containerIcon}>
            <ImHome3
              size="22"
              color={pathname !== "/" ? colors.gray600 : undefined}
            />
            <p
              className={
                pathname !== "/" ? styles.text_icon : styles.text_iconSelect
              }
            >
              inicio
            </p>
          </div>
        </Link>
        <Link href="/mynetwork">
          <div className={styles.containerIcon}>
            <BsPeopleFill
              size="22"
              className={styles.reflectIcon}
              color={pathname !== "/mynetwork" ? colors.gray600 : undefined}
            />
            <p
              className={
                pathname !== "/mynetwork"
                  ? styles.text_icon
                  : styles.text_iconSelect
              }
            >
              Mi red
            </p>
          </div>
        </Link>
        <Link href="/jobs">
          <div className={styles.containerIcon}>
            <BsBriefcaseFill
              size="22"
              color={pathname !== "/jobs" ? colors.gray600 : undefined}
            />
            <p
              className={
                pathname !== "/jobs" ? styles.text_icon : styles.text_iconSelect
              }
            >
              Empleos
            </p>
          </div>
        </Link>
        <Link href="/messaging">
          <div className={styles.containerIcon}>
            <MdSms
              size="22"
              className={styles.reflectIcon}
              color={pathname !== "/messaging" ? colors.gray600 : undefined}
            />
            <p
              className={
                pathname !== "/messaging"
                  ? styles.text_icon
                  : styles.text_iconSelect
              }
            >
              Mensajes
            </p>
          </div>
        </Link>
        <Link href="/notifications">
          <div className={styles.containerIcon}>
            <IoMdNotifications
              size="25"
              color={pathname !== "/notifications" ? colors.gray600 : undefined}
            />
            <p
              className={
                pathname !== "/notifications"
                  ? styles.text_icon
                  : styles.text_iconSelect
              }
            >
              Notificaciones
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
