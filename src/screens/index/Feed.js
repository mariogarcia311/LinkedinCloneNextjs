import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import styles from "../../../styles/Index.module.css";
import { MdInsertPhoto } from "react-icons/md";
import { BsYoutube, BsCalendarDate, BsNewspaper } from "react-icons/bs";
import ButtonIcon from "../../components/ButtonIcon";
import { PostsContext } from "../../context/PostsContext";
import Modal from "../../components/Modal";
import Post from "./Post";
import Button from "../../components/Button";

const Feed = () => {
  const [store, dispatch] = useContext(PostsContext);
  const [openModal, setOpenModal] = useState(false);
  const [isDescendingOrder, setIsDescendingOrder] = useState(true);
  const [postsRender, setPostsRender] = useState({
    ascendant: [],
    descendant: [],
    descripcion: [],
  });
  useEffect(() => {
    setPostsRender({
      ascendant: [...store?.posts],
      descendant: [...store?.posts].reverse(),
    });
  }, [store]);
  console.log(postsRender);
  return (
    <div className={`${styles.columnFeed}`}>
      <div className={`${styles.cardFeed} ${styles.createPost} `}>
        <div className={`${styles.row} ${styles.w100}`}>
          <Image
            src="/images/profile.webp"
            alt="profile Photo"
            width={48}
            height={48}
            className={styles.profilePhoto}
          />
          <button
            className={`${styles.createPostButton}`}
            onClick={() => setOpenModal(true)}
          >
            Crear publicación
          </button>
        </div>
        <div
          className={`${styles.containerTypePostButton} ${styles.row} ${styles.w100}`}
        >
          <ButtonIcon
            value={<MdInsertPhoto size={24} color="#0a66c2" />}
            text="Foto"
          />{" "}
          <ButtonIcon
            value={<BsYoutube size={24} color="#5f9b41" />}
            text="Video"
          />
          <ButtonIcon
            value={<BsCalendarDate size={24} color="#c37d16" />}
            text="Evento"
          />
          <ButtonIcon
            value={<BsNewspaper size={24} color="#e16745" />}
            text="Escribir artículo"
          />
        </div>
      </div>
      <div className={styles.orderContainer}>
        <div className={styles.borderOrder}></div>
        <Button
          onClick={() => setIsDescendingOrder((value) => !value)}
          text={`${
            isDescendingOrder ? `orden descendente` : "orden ascendente"
          }`}
          color="#f3f2ef"
          textColor="rgba(0, 0, 0, 0.6)"
          hoverColor="#f3f2ef"
          fontSize="16px"
          height="15px"
          width="90px"
          style={{ marginTop: "4px", width: "200px" }}
        />
      </div>
      {isDescendingOrder
        ? postsRender.descendant.map((item) => (
            <Post key={item.id} item={item} dispatch={dispatch} />
          ))
        : postsRender.ascendant.map((item) => (
            <Post key={item.id} item={item} dispatch={dispatch} />
          ))}
      {openModal && <Modal setIsOpen={setOpenModal} dispatch={dispatch} />}
    </div>
  );
};

export default Feed;
