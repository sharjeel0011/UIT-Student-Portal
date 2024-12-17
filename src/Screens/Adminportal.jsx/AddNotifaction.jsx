import React, { useState } from "react";
import CourseSelection from "../../Components/Admincomponents/Textbookadd/CourseSection";
import BatchSelection from "../../Components/Admincomponents/Textbookadd/BatchSection";
import NotificationManagement from "../../Components/Admincomponents/Notifactionadd/NotifactionManagement";
import { CourseNew } from "../../assets/Data";

const NotificationScreen = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState(null);

  // Step 1: Course Selection
  if (!selectedCourse) {
    return <CourseSelection courses={CourseNew} onSelectCourse={setSelectedCourse} />;
  }

  // Step 2: Batch Selection
  if (!selectedBatch) {
    return <BatchSelection course={selectedCourse} onSelectBatch={setSelectedBatch} />;
  }

  // Step 3: Notification Management
  return <NotificationManagement batch={selectedBatch} />;
};

export default NotificationScreen;
