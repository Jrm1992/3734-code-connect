'use client'

import { forwardRef, useImperativeHandle, useRef } from 'react'

const Modal = forwardRef(({ children }, ref) => {

  const dialogRef = useRef(null)

  const closeModal = () => dialogRef.current.close()

  const openModal = () => dialogRef.current.showModal()

  useImperativeHandle(ref, () => ({ openModal, closeModal }))

  return (
    <dialog ref={dialogRef} className={styles.modal}>
      <header>
        <button>X</button>
      </header>
      {children}
    </dialog>
  )
})