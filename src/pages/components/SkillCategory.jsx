import React from 'react'
import styled from 'styled-components'

const SkillCategory = ({category}) => {
  return (
    <SkillWrapper className='skill-category'>
      <h4>{category.heading}</h4>
      <div className="skills">
      {
        category.skills?.map((Skill,index) => <Skill key={index}/>)
      }
      </div>
    </SkillWrapper>
  )
}

const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  /* border: 2px solid green; */
  padding: 12px;
  flex-direction: column;
  gap: 24px;
  .skills{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    >svg{
      width: 4vmax;
      height: 4vmax;
    }
  }
`

export default SkillCategory