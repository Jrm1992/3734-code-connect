'use client'

import { useEffect, useState } from 'react'
import { ModalReply } from '../ModalReply'
import { Comment } from '../Comment'
import styles from './replies.module.css'

export const Replies = ({ coment }) => {

    const [showReplies, setShowReplies] = useState(false)
    const [replies, setReplies] = useState([])

    async function fetchReplies() {
        const response = await fetch(`/api/comment/${coment.id}/replies`)
        const data = await response.json()
        setReplies(data)
    }

    useEffect(() => {
        if(showReplies) {
            fetchReplies()
        }
    }, [showReplies])

    return (<div className={styles.container}>

        <div className={styles.replies}>
            <button 
                className={styles.btn} 
                onClick={() => setShowReplies(!showReplies)}
            >
                {showReplies ? 'Ocultar' : 'Ver'} respostas
            </button>
            {showReplies && <ul>
                {replies.map(reply => <li key={reply.id}>
                    <Comment comment={reply} />
                    <ModalReply comment={reply} />
                </li>)}
            </ul>}
        </div>
    </div>)
}