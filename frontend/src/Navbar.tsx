import React from 'react'
import { Header, Space, Title } from '@mantine/core'

export const AppNavbar = () => {
  return (
    <Header height={64} sx={{ marginLeft: 8 }} className="center-v">
      <Title>
        Laire Companion
      </Title>
      <Space w={"xl"}></Space>
    </Header>
  )
}
