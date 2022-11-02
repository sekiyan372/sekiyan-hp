import {
  faBuilding,
  faGuitar,
  faSchool,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef } from 'react'

import { DownButton } from '~/components/Button'
import { Circle, VerticalLine } from '~/components/Figure'
import { Section } from '~/components/Layout'
import { Heading } from '~/components/Text'

const careers = [
  {
    year: '2015',
    icon: (
      <Circle>
        <FontAwesomeIcon icon={faGuitar} className="text-black w-3/4" />
      </Circle>
    ),
    desc: '中部楽器技術専門学校 弦楽器制作科ギタークラフトコース',
  },
  {
    year: '',
    line: <VerticalLine />,
    desc: 'エレキギター、エレキベース、アコースティックギターなどの制作、リペアなどを学ぶ',
  },
  {
    year: '2017',
    icon: (
      <Circle>
        <FontAwesomeIcon icon={faBuilding} className="text-black w-3/5" />
      </Circle>
    ),
    desc: '楽器卸売会社',
  },
  {
    year: '',
    line: <VerticalLine />,
    desc: '社内で電話対応、梱包、発送、楽器修理の管理などを担当',
  },
  {
    year: '2019',
    icon: (
      <Circle>
        <FontAwesomeIcon icon={faSchool} className="text-black w-3/4" />
      </Circle>
    ),
    desc: '金沢工業大学 工学部情報工学科',
  },
  {
    year: '',
    line: <></>,
    desc: 'CirKit、Tourismなどのプロジェクト活動やインターンに参加し、Web開発を行う',
  },
]

export const Career = forwardRef<HTMLElement>((_, ref) => {
  return (
    <Section
      ref={ref}
      id="career"
      className="w-full h-screen snap-start flex justify-center items-center flex-col bg-gray-800"
    >
      <Heading className="text-white">Career</Heading>
      <table className="m-5 text-white">
        <tbody>
          {careers.map((career, index) => (
            <tr key={index}>
              <td className="p-0">{career.year}</td>
              {career.icon && <td className="px-3 py-0">{career.icon}</td>}
              {career.line && (
                <td className="text-center h-24">{career.line}</td>
              )}
              <td className="p-0 md:text-base text-sm">{career.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <DownButton href="#product" className="text-white" />
    </Section>
  )
})

// export default forwardRef(Career)
