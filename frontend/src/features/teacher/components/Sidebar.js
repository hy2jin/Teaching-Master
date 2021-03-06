import '../scss/Sidebar.scss'
import {HamburgerIcon} from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import {useDisclosure} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const teacher = {teacher_profile:'https://blog.kakaocdn.net/dn/bAyJve/btqNr8wMiXi/rV0XKPT78iMnmkXlViEmk0/img.jpg'}
function Sidebar({user,setUser}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <HamburgerIcon className='sidebar-button' boxSize={12} onClick={onOpen} />
      <Drawer size="xs" placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent >
          <DrawerHeader className='DrawerHeader' borderBottomWidth='1px'>
            <div className='teacher_name'></div>
          </DrawerHeader>
          <DrawerBody className="DrawerBody">
            <div className='contents'>
              <Link onClick={onClose} to="/home">홈</Link>
              <Link onClick={onClose} to="/students">학생</Link>
              <Link onClick={onClose} to="/quiz/folder">퀴즈</Link>
              <Link onClick={onClose} to="/onair">수업중</Link>
              <Link onClick={onClose} to="/settings">내 정보</Link>
            </div>
            <img className='icon' src="https://i.ibb.co/L8gSsGD/image-27.png" alt="마곰"/>
          </DrawerBody>
        </DrawerContent>
      </Drawer> 
    </>
  )
}
export default Sidebar
