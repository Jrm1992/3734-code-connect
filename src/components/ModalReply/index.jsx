'use client'

import { postReply } from "@/actions"
import { useRef } from "react"
import { Modal } from "../Modal"
import { Comment } from "../Comment"
import { SubmitButton } from "../ModalComment/submitButton"
import styles from './modalReply.module.css'

export const ModalReply = ({ comment, post }) => {
  const modalref = useRef(null)

  const openModal = () => {
    modalref.current?.openModal()
  }

  const action = postReply.bind(null, comment)

  return (
    <>
      <Modal ref={modalref}>
        <form action={action}>
          <div className={styles.body}>
            <Comment comment={comment} />
          </div>
          <div className={styles.divider}></div>
          <textarea required rows={8} name="text" placeholder="Digite aqui..." />
          <div className={styles.footer}>
            <SubmitButton>
              Responder
            </SubmitButton>
          </div>
        </form>
      </Modal>
      <button onClick={openModal} className={styles.btn}>
        Responder
      </button>
    </>
  )
}