package com.ssafy.api.service;

import com.ssafy.api.request.*;
import com.ssafy.api.response.QuizAllRes;
import com.ssafy.api.response.QuizLogRes;
import com.ssafy.api.response.QuizRes;
import com.ssafy.db.entity.*;

import java.util.List;

public interface QuizService {
    Quiz createQuiz(QuizRegisterReq quizRegisterReq);
    Quiz updateQuiz(QuizUpdateReq quizUpdateReq);
    QuizRes selectQuiz(Long quizId);

    void deleteQuiz(Long quizId);

    List<Folder> selectFolders(String userId);
    List<Quiz> selectsFolderQuiz(Long folderId);

    List<QuizAllRes> selectQuizAll(String userId);

    Folder createFolder(FolderRegisterReq folderRegisterReq);
    Bookmark createFavor(FavorRegisterReq favorRegisterReq);

    List<Quiz> selectFavor(String userId);

    FolderQuiz insertQuiz(FolderQuizEnterReq folderQuizEnterReq);

    List<QuizLogRes> selectQuizLog(String studentId);
}
