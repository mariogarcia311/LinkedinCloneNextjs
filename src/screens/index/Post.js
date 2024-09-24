import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../styles/Post.module.css";
import { types } from "../../context/PostsReducer";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots, FaShare } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { ImEarth } from "react-icons/im";
import { FiDelete } from "react-icons/fi";
import Button from "../../components/Button";
import useDate from "../../hooks/useDate";

const Post = ({ item, dispatch }) => {
  const { description, date, id, image } = item;
  const { fromNow } = useDate();
  const deletePost = () => {
    dispatch({
      type: types.delete,
      payload: id,
    });
  };

  return (
    <div className={`${styles.cardFeed} ${styles.post} `}>
      <div className={`${styles.row} ${styles.w100} ${styles.spaceBetween}`}>
        <div className={`${styles.row} ${styles.w100} `}>
          <Image
            src="/images/profile.webp"
            alt="profile Photo"
            width={48}
            height={48}
            className={styles.profilePhoto}
          />
          <div>
            <p className={styles.nametPostProfile}>Mario García Márquez</p>
            <p className={styles.textPostProfile}>
              Front-end developer | React | Next.js | React
            </p>
            <p className={styles.textPostProfile}>
              {fromNow(date)} <ImEarth />
            </p>
          </div>
        </div>
        <div>
          <Button
            onClick={deletePost}
            text={
              <>
                <FiDelete size={20} />
                <p style={{ marginLeft: "4px" }}>Borrar</p>
              </>
            }
            borderRadius="7px"
            height="72px"
            padding="10px 8px"
          />
        </div>
      </div>
      <div>
        <p className={styles.publishedContent}>{description}</p>
      </div>
      {image && (
        <div className={styles.uploadedPhotoContainer}>
          <img
            src={image}
            alt="image uploaded"
            width="100%"
            className={styles.uploadedPhoto}
          />
        </div>
      )}
      <div className={styles.reactionsContent}></div>
      <div className={`${styles.containerPostButton} ${styles.w100}`}>
        <Button
          text={
            <>
              <AiOutlineLike size={24} />
              <p>Recomendar</p>
            </>
          }
          borderRadius="7px"
          height="72px"
          padding="10px 8px"
        />
        <Button
          text={
            <>
              <FaRegCommentDots size={24} />
              <p>Comentar</p>
            </>
          }
          borderRadius="7px"
          height="72px"
          padding="10px 8px"
        />
        <Button
          text={
            <>
              <FaShare size={24} />
              <p>Compartir</p>
            </>
          }
          borderRadius="7px"
          height="72px"
          padding="10px 8px"
        />
        <Button
          text={
            <>
              <RiSendPlaneFill size={24} />
              <p>Enviar</p>
            </>
          }
          borderRadius="7px"
          height="72px"
          padding="10px 8px"
        />
      </div>
    </div>
  );
};

export default Post;
