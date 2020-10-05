package com.iiitb.examAdminBackEnd.examineeBatch;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ExamineeBatchController {
	
	@Autowired
	public ExamineeBatchService examineeBatchService;
	
	@RequestMapping(method = RequestMethod.PUT, value="examineeBatch/examinee/{examineeId}/batch/{batchId}")
	public void updateExamineeBatch(@PathVariable int examineeId, @PathVariable int batchId, @RequestBody ExamineeBatch examineeBatch) {
		ExamineeBatchKey key = new ExamineeBatchKey(examineeId, batchId);
		examineeBatchService.updateExamineeBatch(key, examineeBatch);
	}
}