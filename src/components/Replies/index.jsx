'use client'

import { useState } from 'react'
import { ModalReply } from '../ModalReply'
import { Comment } from '../Comment'
import styles from './replies.module.css'

export const Replies = ({ coment }) => {

    const [showReplies, setShowReplies] = useState(false)

    return (<div className={styles.container}>

        <div className={styles.replies}>
            <button 
                className={styles.btn} 
                onClick={() => setShowReplies(!showReplies)}
            >
                {showReplies ? 'Ocultar' : 'Ver'} respostas
            </button>
            {showReplies && <ul>
                {coment.comments.map(reply => <li key={reply.id}>
                    <Comment comment={reply} />
                    <ModalReply comment={reply} />
                </li>)}
            </ul>}
        </div>
    </div>)
}