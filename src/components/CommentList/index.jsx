import { Comment } from "@/components/Comment"

export const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li>
          <Comment key={comment.id} comment={comment} />
        </li>
      ))}
    </ul>
  )
}