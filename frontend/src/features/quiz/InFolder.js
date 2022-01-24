import {Image, Select, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, 
        Box, Text, Radio, RadioGroup, Stack, Button, Popover, PopoverTrigger, PopoverContent, 
        PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverBody } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import onetwo from './plusicon.gif'
import qicon from './qicon.png'
import EachQuiz from './EachQuiz'
import { folders } from './quizzes'
import { quizzes } from './quizzes'
import { qz } from './qzz.js'
import './InFolder.scss'

const InFolder = () => {
  let {id} = useParams()
  const [folder,setfolder] = useState({})
  const [quizlist,setQuizlist]  = useState([])


  

  useEffect(()=>{
    setfolder(folders.filter(folder=>folder.id===Number(id))[0])
    setQuizlist(quizzes.filter(quiz =>quiz.folder_id===Number(id)))
  },[id])
  return (
    <div className='infolder'>

      <div className='infolder-nav menu'>
        <li className='infolder-navmenu-li'>
          <Link to="#" className='infolder-li-a'>전체보기</Link>
        </li>
        <li>
          <Link className='infolder-li-a' to="#">즐겨찾기</Link>
        </li>
        <li>
          <Link className='infolder-li-a' to="#">내가 만든 문제</Link>
        </li>
        <li>
          {/* 누르면 팝업이든 뭐든 띄워서 누르게하기 -> select하니까 모양이 망가짐 */}
          <Popover placement='top-start'>
            <PopoverTrigger>
              <span className='infolder-li-a'>내 폴더</span>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody>
                <li><Link to="#">어려워</Link></li>
                <li><Link to="#">쉬워</Link></li>
                <li><Link to="#">국</Link></li>
                <li><Link to="#">영</Link></li>
                <li><Link to="#">수</Link></li>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </li>
      </div>

      <div>
        <Image src={onetwo} boxSize='30%' alt='띵동' />
      </div>

      <div className='infolder-sub'>
        <div className='infolder-each-sub'>전체</div>
        <div className='infolder-each-sub'>국어</div>
        <div className='infolder-each-sub'>영어</div>
        <div className='infolder-each-sub'>수학</div>
        <div className='infolder-each-sub'>사회</div>
        <div className='infolder-each-sub'>과학</div>
        <div className='infolder-each-sub'>기타</div>
      </div>

      <div className='infolder-grade'>
        <Select>
          <option value='all'>전체</option>
          <option value='1'>1학년</option>
          <option value='2'>2학년</option>
          <option value='3'>3학년</option>
          <option value='4'>4학년</option>
          <option value='5'>5학년</option>
          <option value='6'>6학년</option>
        </Select>
      </div>

      <div>
        <Accordion allowToggle>
          {qz.map(
            (quiz) => {
            const url = `/quiz/${quiz.id}/update`
            return (
              <AccordionItem key={quiz.id}>
                <h2>
                  <AccordionButton>
                    <Box className='infolder-quiz' flex='1'>
                      <Image src={qicon} boxSize='4%' alt='Q?' />
                      <Text>{quiz.subject}</Text>
                      <Text>{quiz.title}</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className='infolder-quiz-open'>
                  <div className='infolder-quiz'>
                    <Image src={qicon} boxSize='4%' alt='A!' />
                    <Text>내용</Text>
                    <Text className='infolder-quiz-last'>{quiz.content}</Text>
                  </div>
                  <div className='infolder-quiz'>
                    <Box boxSize='4%'></Box>
                    <Text>보기</Text>
                    <div className='infolder-quiz-last'>
                      {quiz.choices.map((choice, index) => (
                        <div key={index} className={(index+1) === quiz.answer ? 'infolder-correct' : ''}>{index+1}) {choice}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Popover placement='top-start'>
                      <PopoverTrigger>
                        <Button>폴더</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverHeader fontWeight='semibold'>담을 폴더를 선택하세요</PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody>
                          <li>어려워</li>
                          <li>쉬워</li>
                          <li>국</li>
                          <li>영</li>
                          <li>수</li>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                    <Link to={url}><Button>수정</Button></Link>
                  </div>
                </AccordionPanel>
              </AccordionItem>      
            )})
          }
        </Accordion>
      </div>


      {/* {quizlist.map(quiz=>{ 
        return(<EachQuiz key={quiz.id} quiz={quiz}/>)
      })} */}
    </div>
  )
}

export default InFolder
