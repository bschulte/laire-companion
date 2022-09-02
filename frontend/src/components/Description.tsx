import { Table } from '@mantine/core';
import React from 'react'
import { Description as Desc } from '../types'

interface IProps {
  description: Desc
}

export const Description = ({ description }: IProps) => {
  if (typeof description === 'string') {
    return <div>{description}</div>;
  }

  return (<div>{description.map(part => {
    if (typeof part === 'string') {
      return <div style={{ marginTop: 16, marginBottom: 16 }}>{part}</div>
    }

    if (part.type === 'header') {
      return <div><i>{part.content}</i></div>
    }

    if (part.type === 'list' && part.items) {
      return (
        <ul>
          {part.items.map(item => <li>{item}</li>)}
        </ul>
      )
    }

    if (part.type === 'table') {
      return (
        <Table striped>
          <thead>
            <tr>
              {part.headers!.map(header => <th>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {part.rows!.map(row => (
              <tr>
                {row.map(td => <td>{td}</td>)}
              </tr>
            ))}
          </tbody>
        </Table>
      )
    }

    return (
      <div>{JSON.stringify(part)}</div>
    )

  })

  }</div>)
}
