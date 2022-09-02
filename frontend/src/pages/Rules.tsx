import { Divider, Title } from '@mantine/core';
import React from 'react'
import { RulesSection } from '../components/Rules/RulesSection';
import rules from '../data/rules.json'
import { Rule } from '../types';

export const Rules = () => {

  const sections = new Set<string>();

  rules.forEach(rule => {
    sections.add(rule.section)
  })

  return (
    <div>
      {Array.from(sections).map(section => {
        return (
          <>
            <Title order={1}>
              {section}
            </Title>
            <RulesSection rules={(rules as Rule[]).filter(rule => rule.section === section)} />

            <Divider />
          </>
        )
      })}
    </div>
  )
}
