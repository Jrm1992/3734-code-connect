'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Chat } from "../icons/Chat"
import { Modal } from "../Modal"
import { SubmitButton } from "../ModalComment/submitButton"
import styles from './modalComment.module.css'

export const ModalComment = () => {
  const modalRef = useRef(null)
  return (
    <>
      <Modal ref={modalRef}>
        <form className={styles.form} action="">
          <h2 className={styles.title}>Deixe seu comentário sobre o post:</h2>
          <textarea
            name="comment"
            placeholder="Escreva um comentário..."
            className={styles.text_area}
          />
          <SubmitButton text="Comentar" type="submit" />
        </form>
      </Modal>
      <IconButton
        onClick={() => modalRef.current?.openModal()}
      >
        <Chat />
      </IconButton>
    </>
  )
}