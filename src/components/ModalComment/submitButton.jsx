import { useFormStatus } from 'react-dom'
import { Button } from '../Button'
import { ArrowFoward } from '../icons/ArrowFoward'
import { Spinner } from '../Spinner'

export const SubmitButton = ({ text }) => {
  const { pending } = useFormStatus()
  return (
    <div>
      <Button disabled={pending} >
        { pending ? <Spinner /> : text }
        {' '}
        <ArrowFoward />
      </Button>
    </div>
  )
}