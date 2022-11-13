import {
  BsFillPenFill,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs'

export const links = (className: string) => [
  {
    name: 'Twitter',
    url: 'https://twitter.com/sekiyan372',
    icon: <BsTwitter className={className} />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/sekiyan372',
    icon: <BsInstagram className={className} />,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCil3qVY03emphZE4V5UQtXA',
    icon: <BsYoutube className={className} />,
  },
  {
    name: 'Blog',
    url: 'https://sekiyan372.hatenablog.jp',
    icon: <BsFillPenFill className={className} />,
  },
  {
    name: 'Github',
    url: 'https://github.com/sekiyan372',
    icon: <BsGithub className={className} />,
  },
]
