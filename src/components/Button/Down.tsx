import { VFC, HTMLAttributes } from 'react'
import ClassNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { smoothScroll } from '~/utils/Scroll'

type Props = {
  href: string
} & HTMLAttributes<HTMLDivElement>

const Down: VFC<Props> = ({href, className}) => {
  return(
    <div className={ClassNames(className)}>
      <a href={href} onClick={e => smoothScroll(e)}>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="w-8 hover:opacity-50"
        />
      </a>
    </div>
  )
}

export default Down
