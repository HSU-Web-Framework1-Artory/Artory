import React from 'react'
import styled from 'styled-components'
import Calendar from './Calendar'
import Memo from './Memo'
export default function CalendarAndMemo() {
  return (
    <MainLayout>

        <Memo/>
        
        <Calendar/>
      
    </MainLayout>
  )
}

const MainLayout = styled.div`
width : 100%;
margin-top : 1.19rem;
display : flex;
justify-content : space-between;
`