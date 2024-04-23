import { Comment } from "@/components/Comment"
import { ModalReply } from "../ModalReply"
import styles from './commentList.module.css'

export const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li className={styles.comment}>
          <Comment key={comment.id} comment={comment} />
          <ModalReply comment={comment} />
        </li>
      ))}
    </ul>
  )
}