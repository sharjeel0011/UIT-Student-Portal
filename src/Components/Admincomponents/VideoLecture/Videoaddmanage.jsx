import React, { useState } from "react";

const VideoLectureManagement = ({ batch }) => {
  const [lectures, setLectures] = useState(batch.videoLectures || []);

  const addLecture = () => {
    setLectures([
      ...lectures,
      { id: Date.now(), title: "", description: "", video: null },
    ]);
  };

  const updateLecture = (index, field, value) => {
    const updated = [...lectures];
    updated[index][field] = value;
    setLectures(updated);
  };

  const updateVideo = (index, file) => {
    const updated = [...lectures];
    updated[index].video = file;
    setLectures(updated);
  };

  const removeLecture = (index) => {
    setLectures(lectures.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log("Submitted Lectures:", lectures);
    alert("Video lectures saved successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Manage Video Lectures for Batch {batch.batchId}
      </h1>
      {lectures.map((lecture, index) => (
        <div key={lecture.id} className="mb-6 p-4 border rounded-lg">
          <input
            type="text"
            placeholder="Lecture Title"
            value={lecture.title}
            onChange={(e) => updateLecture(index, "title", e.target.value)}
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <textarea
            placeholder="Lecture Description"
            value={lecture.description}
            onChange={(e) => updateLecture(index, "description", e.target.value)}
            className="w-full mb-4 p-2 border rounded-lg"
          />
          <input
            type="file"
            accept="video/*"
            onChange={(e) => updateVideo(index, e.target.files[0])}
            className="w-full mb-4 p-2 border rounded-lg"
          />
          {lecture.video && (
            <p className="text-sm text-gray-600">Selected File: {lecture.video.name}</p>
          )}
          <button
            type="button"
            onClick={() => removeLecture(index)}
            className="text-red-500 underline"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addLecture}
        className="mt-2 text-blue-500 underline"
      >
        + Add Video Lecture
      </button>
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Video Lectures
      </button>
    </div>
  );
};

export default VideoLectureManagement;
