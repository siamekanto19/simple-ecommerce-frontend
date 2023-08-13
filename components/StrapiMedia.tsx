import { UploadFileEntity, UploadFileEntityResponse } from '@/gql/generated/graphql'
import React, { FC } from 'react'
import { Image } from '@mantine/core'

type Props = {
  media: UploadFileEntityResponse | undefined
  className?: string
}

const StrapiMedia: FC<Props> = ({ media, className }) => {
  return <Image classNames={{ image: className ?? undefined }} src={`http://localhost:1337${media?.data?.attributes?.url}`} />
}

export default StrapiMedia
