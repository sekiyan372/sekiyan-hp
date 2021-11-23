import { VFC, HTMLAttributes } from 'react'
import ClassNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type DivProps = HTMLAttributes<HTMLDivElement>

type Props = {
  href: string
} & DivProps

const Down: VFC<Props> = ({href, className}) => {
  return(
    <div className={ClassNames(className)}>
      <a href={href}>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="w-8"
        />
      </a>
    </div>
  )
}

export default Down
