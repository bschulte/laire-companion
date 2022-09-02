import { Space, Title } from '@mantine/core';
import React from 'react'
import { Rule } from '../../types'
import { Description } from '../Description';

interface IProps {
  rules: Rule[];
}

export const RulesSection = ({ rules }: IProps) => {

  const subSections = new Set<string>();

  rules.forEach(rule => {
    if (rule.subsection) {
      subSections.add(rule.subsection)
    }
  })

  const rulesWithoutSubSection = rules.filter(rule => !rule.subsection)

  return (
    <div>
      {rulesWithoutSubSection.map(rule => (
        <>
          <div>
            {rule.name.toLowerCase() !== 'introduction' && (
              <Title order={5}>
                {rule.name}
              </Title>
            )}
          </div>
          <div>
            <Description description={rule.content} />
          </div>
          <Space h={"md"} />
        </>
      ))}

      {Array.from(subSections).map(subSection => {
        const rulesInSubSection = rules.filter(rule => rule.subsection === subSection)

        return (
          <>
            <Title order={3}>{subSection}</Title>
            {
              rulesInSubSection.map(rule => (
                <>
                  <div>
                    {rule.name.toLowerCase() !== 'introduction' && (
                      <Title order={5}>
                        {rule.name}
                      </Title>
                    )
                    }
                  </div>
                  <div>
                    <Description description={rule.content} />
                  </div>
                  <Space h={"md"} />
                </>
              ))
            }
          </>
        )
      })}
    </div>
  )
}
