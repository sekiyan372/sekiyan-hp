import { VFC, HTMLAttributes } from 'react'
import ClassNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type Props = HTMLAttributes<HTMLDivElement>

const Down: VFC<Props> = ({className}) => {
  return(
    <div className={ClassNames(className)}>
      <FontAwesomeIcon
        icon={faChevronDown}
        className="w-8"
      />
    </div>
  )
}

export default Down
