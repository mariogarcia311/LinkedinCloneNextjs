import React, { useRef, useState } from "react";
import styles from "../../styles/Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import { ImEarth } from "react-icons/im";
import { AiFillCaretDown } from "react-icons/ai";
import ButtonIcon from "./ButtonIcon";
import { MdInsertPhoto } from "react-icons/md";
import { TbMessageDots } from "react-icons/tb";
import { BsYoutube, BsFillBriefcaseFill } from "react-icons/bs";
import { HiDocumentText, HiDotsHorizontal } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import Button from "./Button";
import { types } from "../context/PostsReducer";
import generateId from "../helpers/generateId";
import moment from "moment";

const Modal = ({ setIsOpen = () => {}, dispatch }) => {
  const [values, setValues] = useState({
    description: "",
    image: "",
  });
  const [addImage, setAddImage] = useState(false);
  const fileInputRef = useRef(null);
  const onChange = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };
  const addFile = () => {
    fileInputRef.current.click();
  };
  const encodeImage = (files) => {
    const reader = new FileReader();
    Array.from(files).forEach((file) => {
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageBase64 = reader.result;
        setValues({
          ...values,
          image: imageBase64,
        });
      };
    });
  };
  const addpost = (date, description, image = "") => {
    dispatch({
      type: types.add,
      payload: {
        id: generateId(),
        date,
        description,
        image,
      },
    });
  };
  const savePost = () => {
    if (values.description) {
      const today = moment();
      addpost(today, values.description, values.image);
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={`${styles.modalHeader} ${styles.boderBottom}`}>
              <h5 className={styles.heading}>Crear una publicación</h5>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.body}>
              <div className={`${styles.row} ${styles.profilePhotoContainer} `}>
                <Image
                  src="/images/profile.webp"
                  alt="profile Photo"
                  width={48}
                  height={48}
                  className={styles.profilePhoto}
                />
                <div className={styles.bodyText}>
                  <p>Mario García Márquez</p>
                  <button
                    className={`${styles.createPostButton}`}
                    onClick={() => setOpenModal(true)}
                  >
                    <ImEarth />
                    <p>Cualquiera</p>
                    <AiFillCaretDown />
                  </button>
                </div>
              </div>
              <div className={styles.inputTextContainer}>
                {!addImage ? (
                  <textarea
                    name="description"
                    value={values.description}
                    className={styles.inputText}
                    placeholder="¿Sobre qué quieres hablar?"
                    onChange={onChange}
                  />
                ) : (
                  <div>
                    <div className={styles.inputFile} onClick={addFile}>
                      <input
                        type="file"
                        // value={values.image}
                        name="image"
                        style={{ visibility: "hidden", display: "none" }}
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={(e) => encodeImage(e.target.files)}
                      />
                      {addImage && values?.image ? (
                        <Image
                          src={values?.image}
                          alt="image uploaded"
                          width={600}
                          height={300}
                          className={styles.profilePhoto}
                        />
                      ) : (
                        <p>Seleccionar imágenes que compartir</p>
                      )}
                    </div>
                    <div className={styles.backButtonContainer}>
                      <Button
                        onClick={() => setAddImage(false)}
                        text="Volver"
                        color="white"
                        textColor="#0a66c2"
                        hoverColor="rgba(112, 181, 249, 0.2)"
                        fontSize="16px"
                        height="34px"
                        className={styles.backButton}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.row}>
                <div className={styles.containerTypePostButton}>
                  <ButtonIcon
                    onClick={() => setAddImage(true)}
                    circleType
                    value={<MdInsertPhoto size={24} />}
                  />
                  <ButtonIcon circleType value={<BsYoutube size={24} />} />
                  <ButtonIcon circleType value={<HiDocumentText size={24} />} />
                  <ButtonIcon
                    circleType
                    value={<BsFillBriefcaseFill size={24} />}
                  />
                  <ButtonIcon circleType value={<GoGraph size={24} />} />
                  <ButtonIcon
                    circleType
                    value={<HiDotsHorizontal size={24} />}
                  />
                  <div></div>
                </div>
                <div
                  className={styles.containerTypePostButton}
                  style={{
                    alignItems: "center",
                    paddingLeft: "0px",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <ButtonIcon
                    value={
                      <TbMessageDots size={20} style={{ marginRight: "6px" }} />
                    }
                    text="cualquiera"
                    style={{ borderRadius: "29px", height: "30px" }}
                  />
                  <Button
                    disabled={!values.description}
                    onClick={savePost}
                    text="Publicar"
                    color="#0a66c2"
                    textColor="white"
                    hoverColor="#004182"
                    fontSize="16px"
                    height="34px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
