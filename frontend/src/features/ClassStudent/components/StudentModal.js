import { Modal, ModalOverlay, Image } from '@chakra-ui/react';
import '../scss/StudentModal.scss'
import { useState, useEffect } from 'react';
import Sticker from './Sticker'
import Quiz from './Quiz';
import OxQuiz from './OxQuiz';
import QuizResult from './QuizResult';
import Announce from './Announce';

const StudentModal = ({kind, iconAs, title, setState, quizs, resultQ, isOpen, onOpen, onClose, modalForm, setModalForm, modalOpen }) => {
  const [ox,setOX ] = useState(false)
  return (
    <>
      <button className='state_button' title={title}
        onClick={() => modalOpen(kind)}
      ><Image src={iconAs} height="100" /></button>
      <Modal
        size="full"
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
        closeOnOverlayClick={modalForm!=='quiz' && modalForm !=='OX' && modalForm !== 'oxQuiz'}
      >
        <ModalOverlay />
        {modalForm === 'sticker' && <Sticker onClose={onClose} />}
        {modalForm === 'quiz' && <Quiz quizs = {quizs} onClose={onClose} setModalForm={setModalForm} setOX={setOX}/>}
        {modalForm === 'oxQuiz' && <OxQuiz quizs = {quizs} onClose={onClose} setModalForm={setModalForm} setOX={setOX}/>}
        {modalForm === 'result' && <QuizResult resultQ={resultQ}  ox={ox} onClose={onClose} />}
        {modalForm === 'announce' && <Announce setState={setState} onClose={onClose}/>}
      </Modal>
    </>
  );
};

export default StudentModal;