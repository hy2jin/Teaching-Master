package com.ssafy.api.controller;

import com.ssafy.api.request.StudentRegisterPostReq;
import com.ssafy.api.request.StudentInfoUpdateReq;
import com.ssafy.api.response.StudentListRes;
import com.ssafy.api.response.StudentRes;
import com.ssafy.api.service.StudentService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Student;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 인증 관련 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "학생 API", tags = {"Student"})
@RestController
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    StudentService studentService;


    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @GetMapping("/studentAll")
    @ApiOperation(value = "모든 학생 조회", notes = "모든 학생들 정보 조회")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })ResponseEntity<? extends  BaseResponseBody> searchAll() {
        List<Student> students = studentService.searchAll();
        return ResponseEntity.status(200).body(StudentListRes.of(students,200,"Success"));
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @GetMapping("/{student_id}")
    @ApiOperation(value = "학생 조회", notes = "아이디를 통해 회원가입 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    ResponseEntity<? extends BaseResponseBody> search(
            @PathVariable("student_id") String studentId) {
        Student student = studentService.getStudentByUserId(studentId);
        return student != null ? ResponseEntity.status(200).body(StudentRes.of(student,200, "Success"))
                : ResponseEntity.status(200).body(BaseResponseBody.of(200, "존재하지 않는 학생 코드입니다."));
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @PostMapping()
    @ApiOperation(value = "학생 등록", notes = "<strong>아이디와 패스워드</strong>를 통해 회원가입 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    ResponseEntity<? extends BaseResponseBody> register(
            @RequestBody @ApiParam(value="회원가입 정보", required = true) StudentRegisterPostReq registerInfo) {

        //현재 코드는 회원 가입 성공 여부만 판단하기 때문에 굳이 Insert 된 유저 정보를 응답하지 않음.
        Student student = studentService.createStudent(registerInfo);
        return student != null ? ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"))
                : ResponseEntity.status(200).body(BaseResponseBody.of(200, "이미 존재하는 학생코드 입니다."));
    }


    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @DeleteMapping("/{student_id}")
    @ApiOperation(value = "학생 삭제", notes = "학생 코드를 통해 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })public ResponseEntity<? extends BaseResponseBody> delete(@PathVariable("student_id") String studentId){
        studentService.deleteStudent(studentId);
        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }


    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @PutMapping()
    @ApiOperation(value = "학생 수정", notes = "학생 수정을 통해 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })public ResponseEntity<? extends BaseResponseBody> update(
            @RequestBody @ApiParam(value="회원가입 정보", required = true) StudentInfoUpdateReq updateInfo){
        Student student = studentService.updateStudent(updateInfo);
        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }

}
