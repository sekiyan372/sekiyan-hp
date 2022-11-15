import type { FC } from 'react'

type Props = {
  videoIds: string[]
}

export const YouTubeSideScroll: FC<Props> = ({ videoIds }) => {
  return (
    <ul className="ml-6 overflow-x-auto whitespace-nowrap scroll-bar">
      {videoIds.map((id) => (
        <li key={id} className="inline-block">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            width="384"
            height="216"
            allowFullScreen
            className="m-1 w-64 sm:w-96 h-36 sm:h-54"
          />
        </li>
      ))}
    </ul>
  )
}
