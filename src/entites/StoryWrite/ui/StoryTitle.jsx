import React, { useState } from 'react'
import styled from 'styled-components'
const InputTitle = styled.input`
    font-size : 18px;
    font-family: 'Pretendard';
    padding :0 0 0 2%;
    width : 800px;
    height : 55px;
    border: none;
    box-shadow: 1px 2px 8px #f3f3f3; 
    color : #ababab;
    margin-bottom : 4.81rem;
    margin-top : 2%;
    &:focus {
      outline : none;
    }
`;
export default function StoryTitle() {
  const [isClick, setIsClick] = useState();
  const [title,setTitle] = useState();
  const onFocusInput = () =>
  {
    setIsClick(true) 
  }
  const onBlurInput = () =>
  {
    setIsClick(false) 
  }
  const onChangeTitle = (e) =>
  {
    console.log(e.target.value);
  }
  return (
    <div>
        <InputTitle 
          value={title}
          placeholder={isClick ? "" :  "제목을 직접 작성해주세요"} 
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          onChange={onChangeTitle}
        />
    </div>
  )
}
