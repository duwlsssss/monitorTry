import React, { useState } from 'react';

const JobSelector = () => {
  // 직업 목록 및 선택된 직업 상태
  const jobs = [
    '3D 그래픽 디자이너',
    '백엔드 개발자',
    '프론트엔드 개발자',
    'UX/UI 디자이너',
    '2D 그래픽 디자이너',
    '기획자',
    'PM',
    '마케터',
    '인플루언서'
  ];

  const [selectedJob, setSelectedJob] = useState('');

  // 선택된 직업이 변경될 때 실행되는 함수
  const handleJobChange = (e) => {
    setSelectedJob(e.target.value);
  };

  return (
    <div>
   
      <select
        id="job"
        value={selectedJob}
        onChange={handleJobChange}
        aria-label="직업 선택"
      >
        <option value="">--관심 있는 분야--</option>
        {jobs.map((job, index) => (
          <option key={index} value={job}>
            {job}
          </option>
        ))}
      </select>

    
    </div>
  );
};

export default JobSelector;
