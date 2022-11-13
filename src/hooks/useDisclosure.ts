import { useState } from 'react'

type UseDisclosureReturn = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useDisclosure = (defaultValue?: boolean): UseDisclosureReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultValue ?? false)

  const onOpen = () => setIsOpen(true)

  const onClose = () => setIsOpen(false)

  return { isOpen, onOpen, onClose }
}
