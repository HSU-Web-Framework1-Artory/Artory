import React,{useState} from 'react'
import styled from 'styled-components'
import moment from 'moment'
import ProfileSection from '../entites/MyStory/ui/ProfileSection'
import CalendarAndMemo from '../entites/MyStory/ui/CalendarAndMemo'
import SavedExhibitionList from '../entites/MyStory/ui/SavedExhibitionList'

export default function MyStory() {
  const [currentYear, setCurrentYear] = useState(moment().year());
  return (
    <MainLayout>

        {/* 프로필과 버튼 섹션 */}
        <ProfileSection currentYear={currentYear}/>

        {/* 메모와 캘린더 섹션 */}
        <CalendarAndMemo currentYear={currentYear} setCurrentYear={setCurrentYear}/>

        {/* 저장한 전시 리스트 */}
        <SavedExhibitionList/>

    </MainLayout>
  )
}

const MainLayout = styled.div`
display : flex;
flex-direction : column;
align-items : center;
`