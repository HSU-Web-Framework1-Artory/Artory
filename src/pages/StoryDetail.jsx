import React, { useEffect, useState } from 'react'
import { useParams, useNavigation, useLocation } from 'react-router-dom';
import { Stories } from '../shared/dummy/StoryDummy';
import Comment from '../entites/StoryDetail/Comment';
import DeleteModal from '../entites/StoryDetail/DeleteModal';
import Banner from '../entites/StoryDetail/Banner';
import AuthorInfo from '../entites/StoryDetail/AuthorInfo';
import TodaysInfoTable from '../entites/StoryDetail/TodaysInfoTable';

import styled from 'styled-components'

export default function StroyDetail() {
    const { id } = useParams(); // url 주소에서 파라미터로 지정된 포스터 아이디값 가져오기
    const location = useLocation();
    const story = location.state?.newStoryData || Stories[id];
    const [isShowModal, setIsShowModal] = useState(false);
    const [isClickDelete, setIsClickDelete] = useState(false);

    console.log(story);
    const RenderContent = ({ data }) => {
        if (data.type === 'text') {
            return <p>{data.content}</p>;
        } else if (data.type === 'image') {
            return <img src={data.src} alt="Story content" />;
        }
        return null;
    };

    return (
        <StoryDetailLayout>
            <Banner image={story.포스터} title={story.전시이름} />
            <StoryDetailContents>
                {/* 작성자 정보 */}
                <AuthorInfo profileImage={story.작성자프로필} authorName={story.작성자} />
                {/* 스토리 제목 */}
                <CommonBox>{story.글제목}</CommonBox>
                {/* 오늘의 전시 */}
                <CommonBox>
                    <CommonTitleText>오늘의 전시</CommonTitleText>
                    <TodaysInfoTable
                        visitDate={story.방문일}
                        totalTime={story.관람소요시간}
                        emotionImg={story.만족도}
                        weatherImg={story.날씨}
                        companion={story.동행인}
                        categories={story.카테고리}
                    />
                </CommonBox>
                {/* 글 내용 (전시 키워드, 전시 스토리) */}
                <CommonBox>
                    <CommonTitleText>오늘의 전시 키워드</CommonTitleText>
                    <KeywordContainer>
                        {
                            story.키워드
                        }
                    </KeywordContainer>
                    <CommonTitleText>오늘의 전시 스토리</CommonTitleText>
                    <StoryContent>
                        {Array.isArray(story.글내용) ? (
                            // 글내용이 배열인 경우 map으로 렌더링
                            story.글내용.map((data, i) => <RenderContent key={i} data={data} />)
                        ) : (
                            // 글내용이 배열이 아닌 경우 그대로 출력
                            // <RenderContent data={story.글내용} />
                            <>
                                <ExhbnContent
                                    className="ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred"
                                    dangerouslySetInnerHTML={{ __html: story.글내용 }} // 결과 확인
                                />

                            </>
                        )}
                    </StoryContent>
                </CommonBox>
                {/* 댓글 작성 및 댓글 리스트*/}
                <Comment
                    storyId={id}
                    setIsShowModal={setIsShowModal}
                    isClickDelete={isClickDelete}
                    setIsClickDelete={setIsClickDelete}
                />
            </StoryDetailContents>
            {isShowModal &&
                <DeleteModal
                    isShowModal={isShowModal}
                    setIsShowModal={setIsShowModal}
                    setIsClickDelete={setIsClickDelete}
                />
            }
        </StoryDetailLayout>
    )
}


const StoryDetailLayout = styled.div`
width: 100%;
display:flex;
flex-direction:column;
align-items: center;
`;

const StoryDetailContents = styled.div`
width: 70%;

`;

const CommonBox = styled.div`
box-shadow: 1px 2px 8px #f3f3f3;
border: none;
font-size: small;
font-weight: 600;
padding: 14px;
height: fit-content;
margin-bottom: 16px;

`;

const CommonTitleText = styled.h3`
font-weight: 700;
`;

const KeywordContainer = styled.div`
display: flex;
gap: 15px;
color: #737373;
font-size: 0.75rem;
`;

const StoryContent = styled.div`

`;

const ExhbnContent = styled.div`
  color: #505154;
  font-size: 0.95rem;
  line-height: 1.3rem;
  font-weight: 500;
`;