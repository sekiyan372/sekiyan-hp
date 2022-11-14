import { send } from 'emailjs-com'
import type { ChangeEvent } from 'react'
import { forwardRef, useState } from 'react'

import { SubmitButton } from '~/components/Button'
import { Input, Label, Textarea } from '~/components/Input'
import { Footer, Section } from '~/components/Layout'
import { Heading } from '~/components/Text/Heading'
import { emailjsConfig } from '~/utils/Emailjs'

export const Contact = forwardRef<HTMLElement>((_, ref) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const disableSend = name === '' || email === '' || message === ''

  const sendMail = () => {
    if (
      emailjsConfig.serviceId !== undefined &&
      emailjsConfig.templateId !== undefined
    ) {
      const template_param = {
        to_name: name,
        from_email: email,
        message: message,
      }

      send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        template_param
      ).then(() => {
        window.alert('お問い合わせを送信致しました。')
        setName('')
        setEmail('')
        setMessage('')
      })
    }
  }

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    sendMail()
  }

  return (
    <Section
      ref={ref}
      id="contact"
      className="flex flex-col justify-between bg-gray-200"
    >
      <div className="h-full flex justify-center items-center flex-col">
        <Heading className="mt-12 text-gray-800">Contact</Heading>
        <p className="mx-5 text-xs sm:text-base">
          お問い合わせは以下のフォームまたはSNSのダイレクトメッセージから受け付けております。
        </p>
        <div className="md:w-3/4 w-11/12">
          <form onSubmit={onSubmit}>
            <div className="m-2">
              <Label htmlFor="name">name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="m-2">
              <Label htmlFor="email">email</Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="m-2">
              <Label htmlFor="message">message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="text-center">
              <SubmitButton
                disabled={disableSend}
                confirm="お問い合わせを送信してもよろしいですか？"
              >
                送信
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </Section>
  )
})
