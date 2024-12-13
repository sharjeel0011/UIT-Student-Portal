import React, { useState } from "react";
import axios from "axios";
import AdminNav from "../../Components/AdminNav";

const UploadYouTubeVideos = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      url: "https://youtu.be/r6Nd2Yqldjw?si=A7ARmFpkm_WQHLbg",
      title: "Artificial Intelligence",
      duration: "10:15",
      date: "Dec 2024",
    },
    {
      id: 2,
      url: "https://youtu.be/r6Nd2Yqldjw?si=A7ARmFpkm_WQHLbg",
      title: "Blockchain",
      duration: "12:30",
      date: "Nov 2024",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=example3",
      title: "Internet of Things",
      duration: "8:45",
      date: "Oct 2024",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=example4",
      title: "Cloud Native Computing",
      duration: "14:00",
      date: "Sept 2024",
    },
  ]);

  const [newVideo, setNewVideo] = useState({ url: "", title: "", duration: "", date: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVideo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your backend endpoint
    const databaseEndpoint = "https://your-backend-endpoint/videos";

    try {
      const response = await axios.post(databaseEndpoint, newVideo);
      setVideos((prev) => [...prev, response.data]);
      setNewVideo({ url: "", title: "", duration: "", date: "" });
      alert("Video added successfully!");
    } catch (error) {
      console.error("Error adding video:", error);
      alert("Failed to add video. Please try again.");
    }
  };

  return (
    <>
    <AdminNav/>
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold mb-4">Upload YouTube Video</h1>

      {/* Video Upload Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Video URL</label>
          <input
            type="text"
            name="url"
            value={newVideo.url}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={newVideo.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Duration</label>
          <input
            type="text"
            name="duration"
            value={newVideo.duration}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Date</label>
          <input
            type="text"
            name="date"
            value={newVideo.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Video
        </button>
      </form>

      {/* Display Video List */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Uploaded Videos</h2>
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">URL</th>
              <th className="px-4 py-2 border">Duration</th>
              <th className="px-4 py-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video) => (
              <tr key={video.id}>
                <td className="px-4 py-2 border">{video.title}</td>
                <td className="px-4 py-2 border">
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {video.url}
                  </a>
                </td>
                <td className="px-4 py-2 border">{video.duration}</td>
                <td className="px-4 py-2 border">{video.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default UploadYouTubeVideos;
