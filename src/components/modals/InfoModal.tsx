import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-300">
        Guess <b>KANYE'S FAVORITE THING</b> in 6 tries. After each guess, the
        tiles will change color to show how close your guess was. Hint: Kanye
        only has 1 favorite thing.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" status="absent" />
        <Cell value="O" status="absent" />
        <Cell value="U" status="absent" />
        <Cell value="I" status="absent" />
        <Cell value="E" status="correct" />
      </div>
      <p className="text-sm text-gray-300">
        The letter E is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" status="absent" />
        <Cell value="O" status="absent" />
        <Cell value="N" status="correct" />
        <Cell value="D" status="absent" />
        <Cell value="A" status="present" />
      </div>
      <p className="text-sm text-gray-300">
        The letter A is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" status="absent" />
        <Cell value="E" status="present" />
        <Cell value="V" status="absent" />
        <Cell value="I" status="absent" />
        <Cell value="L" status="absent" />
      </div>
      <p className="text-sm text-gray-300">
        The letters D, V, I, and L are not in the word in any spot.
      </p>
    </BaseModal>
  )
}
