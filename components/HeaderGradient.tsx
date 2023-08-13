import { openCart } from '@/stores'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { ActionIcon } from '@mantine/core'
import React, { FC } from 'react'

type Props = {
  children: any
}

const HeaderGradient: FC<Props> = ({ children }) => {
  return (
    <div className="w-screen min-h-[15rem] bg-gradient-to-tr from-blue-500 via-indigo-600 to-indigo-800 flex items-center flex-col">
      <div className="flex w-11/12 mx-auto justify-end mt-4">
        <ActionIcon onClick={openCart} className="bg-white grid place-items-center hover:bg-gray-100" radius="xl" color="white" variant="filled" size="xl">
          <ShoppingBagIcon width={20} color="black" />
        </ActionIcon>
      </div>
      <div className="mt-10">{children}</div>
    </div>
  )
}

export default HeaderGradient
