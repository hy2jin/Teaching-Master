import { Heading, Img,Button, Text } from "@chakra-ui/react";
import {useEffect, useState} from 'react'
import './scss/Main3.scss'
import AOS from 'aos'
import "aos/dist/aos.css"

const Main3 = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className='Main3'>
      <div className="scroll-down"/>
      <div className="empty_box"/>
      <div  className="tiger"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="2000"
            id="animal_box" >

        <Img className="icon"  src="https://cdn.discordapp.com/attachments/885744368399560725/940788467040927744/1ebc39a1c15ce4e0.png"/>
        <div className="content">
          <div className="ment">
            <Text>나는 퀴즈를 좋아하는 티랑이야 </Text>
            <p>나랑 문제 풀지 않을래?</p>
          </div>
          <Img src="https://cdn.discordapp.com/attachments/885744368399560725/941674737967464498/32b2d81cb2be8692.gif"/>
        </div>
      </div>
      <div className="rabbit"
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-duration="1000"
            id="animal_box">
        <div className="content">
          <div className="ment">
            <p>친구들이 쓰기 좋게</p>
            <p>토토가 쉽게 바꿔놨어요.</p>
          </div>
          <div className="img_box">
            <Img src="https://cdn.discordapp.com/attachments/885744368399560725/940838592413057084/unknown.png"/>
            <Img src="https://cdn.discordapp.com/attachments/885744368399560725/940843036705959966/90b3c558d3543a12.png"/>
          </div>
        </div>
        <Img className="icon" src="https://cdn.discordapp.com/attachments/885744368399560725/940788475651833876/7703323da0dec32a.png"/>
      </div>
      <div 
        className="penguin"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="linear"
        data-aos-duration="1000"
        id="animal_box">
        <Img className="icon" src="https://cdn.discordapp.com/attachments/885744368399560725/940789117434875924/b8cf8311fbac34fb.png"/>
        <div className="content">
          <p>입장은 이몸 펭키가 담당하지!</p>
          <p>자기 반과 학번만 입력하면 쉽게 들어올 수 있어 </p>
        </div>
      </div>
      <div data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1000"
             className="dino"
             id="animal_box">
        <div className="content">
          <Img src="https://cdn.discordapp.com/attachments/885744368399560725/941676784351600660/f7cbd3db5297dccd.gif"/>
          <div className="ment">
            <p>디노의 친구들을 찾아줘 </p>
            <p>수업을 열심히 들으면 친구들이</p>
            <p>놀러 올거야</p>
          </div>
        </div>
        <Img className="icon" src="https://cdn.discordapp.com/attachments/885744368399560725/940789109855748126/d58eac80c7e49975.png"/>
      </div>
      <div  className="bear"
            data-aos="fade-right"      
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1000"
            id="animal_box">
        <Img className="icon" src="https://cdn.discordapp.com/attachments/885744368399560725/940788485227421716/6bc81f0a2e2b6c56.png"/>
        <div className="content">
        <div className="ment">
            <p>선생님, 안녕하세요. </p>
            <p>마곰이 티칭 마스터를 소개할게요 </p>
            <br></br>
            <p>1. 별점,메모를 이용한 학생 관리 기능 </p>
            <p>2. 학생들의 참여도를 쉽게 확인 할 수 있는 하이라이팅 효과</p>
            <div style={{display:"flex" }}>
              <Img src="https://cdn.discordapp.com/attachments/885744368399560725/941676784351600660/f7cbd3db5297dccd.gif"/>
              <Img src="https://cdn.discordapp.com/attachments/885744368399560725/941676784351600660/f7cbd3db5297dccd.gif"/>
            </div>
            <br></br>
            <p>3. 선생님들끼리 공유 가능한 퀴즈 페이지 </p>
            <p>4. 수업 중 출제 가능한 OX 퀴즈 </p>
            <div style={{display:"flex" }}>
              <Img src="https://cdn.discordapp.com/attachments/885744368399560725/941676784351600660/f7cbd3db5297dccd.gif"/>
              <Img src="https://cdn.discordapp.com/attachments/885744368399560725/941676784351600660/f7cbd3db5297dccd.gif"/>
            </div>

          </div>
        </div>
      </div>      
      <Button onClick={()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}} className="movetoTop">꼭대기로</Button>
    </div>
  )
};

export default Main3;
