import React, { useState } from 'react'
import styled from 'styled-components'
import StoryTitle from './StoryTitle'
import TodaysExhibition from './TodaysExhibition'
import TextEditor from './TextEditor'

export default function WritingSection({setDate}) {
  return (
    <div>
      <Title>스토리 기록</Title>

      <StoryTitle />

      <TodaysExhibition setDate={setDate} />

      <TextEditor />
    </div>
  )
}

const Title = styled.div`
color: #000;
font-family: Pretendard;
font-size: 1.8rem;
font-style: normal;
font-weight: 700;
line-height: 133.072%; /* 2.49513rem */
letter-spacing: 0.06563rem;
margin-top : 5rem;
`