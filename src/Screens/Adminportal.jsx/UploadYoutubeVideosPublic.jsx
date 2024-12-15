// import React, { useState } from "react";
// import axios from "axios";
// import AdminNav from "../../Components/AdminNav";

// const UploadYouTubeVideos = () => {
//   const [videos, setVideos] = useState([
//     {
//       id: 1,
//       url: "https://youtu.be/r6Nd2Yqldjw?si=A7ARmFpkm_WQHLbg",
//       title: "Artificial Intelligence",
//       duration: "10:15",
//       date: "Dec 2024",
//     },
//     {
//       id: 2,
//       url: "https://youtu.be/r6Nd2Yqldjw?si=A7ARmFpkm_WQHLbg",
//       title: "Blockchain",
//       duration: "12:30",
//       date: "Nov 2024",
//     },
//     {
//       id: 3,
//       url: "https://www.youtube.com/watch?v=example3",
//       title: "Internet of Things",
//       duration: "8:45",
//       date: "Oct 2024",
//     },
//     {
//       id: 4,
//       url: "https://www.youtube.com/watch?v=example4",
//       title: "Cloud Native Computing",
//       duration: "14:00",
//       date: "Sept 2024",
//     },
//   ]);

//   const [newVideo, setNewVideo] = useState({ url: "", title: "", duration: "", date: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewVideo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Replace with your backend endpoint
//     const databaseEndpoint = "https://your-backend-endpoint/videos";

//     try {
//       const response = await axios.post(databaseEndpoint, newVideo);
//       setVideos((prev) => [...prev, response.data]);
//       setNewVideo({ url: "", title: "", duration: "", date: "" });
//       alert("Video added successfully!");
//     } catch (error) {
//       console.error("Error adding video:", error);
//       alert("Failed to add video. Please try again.");
//     }
//   };

//   return (
//     <>
    
//     <div className="p-6 bg-gray-100 min-h-screen">

//       <h1 className="text-2xl font-bold mb-4">Upload YouTube Video</h1>

//       {/* Video Upload Form */}
//       <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Video URL</label>
//           <input
//             type="text"
//             name="url"
//             value={newVideo.url}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={newVideo.title}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Duration</label>
//           <input
//             type="text"
//             name="duration"
//             value={newVideo.duration}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Date</label>
//           <input
//             type="text"
//             name="date"
//             value={newVideo.date}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Add Video
//         </button>
//       </form>

//       {/* Display Video List */}
//       <div className="bg-white p-4 rounded shadow">
//         <h2 className="text-xl font-semibold mb-4">Uploaded Videos</h2>
//         <table className="w-full text-left border">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border">Title</th>
//               <th className="px-4 py-2 border">URL</th>
//               <th className="px-4 py-2 border">Duration</th>
//               <th className="px-4 py-2 border">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {videos.map((video) => (
//               <tr key={video.id}>
//                 <td className="px-4 py-2 border">{video.title}</td>
//                 <td className="px-4 py-2 border">
//                   <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
//                     {video.url}
//                   </a>
//                 </td>
//                 <td className="px-4 py-2 border">{video.duration}</td>
//                 <td className="px-4 py-2 border">{video.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </>
//   );
// };

// export default UploadYouTubeVideos;











import React, { useState } from "react";
import axios from "axios";

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
  ]);

  const [newVideo, setNewVideo] = useState({
    url: "",
    title: "",
    duration: "",
    date: "",
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState(null);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [videoToUpdate, setVideoToUpdate] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVideo((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setVideoToUpdate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://your-backend-endpoint/videos", newVideo);
      setVideos((prev) => [...prev, response.data]);
      setNewVideo({ url: "", title: "", duration: "", date: "" });
      alert("Video added successfully!");
    } catch (error) {
      console.error("Error adding video:", error);
      alert("Failed to add video. Please try again.");
    }
  };

  const openDeleteModal = (video) => {
    setVideoToDelete(video);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://your-backend-endpoint/videos/${videoToDelete.id}`);
      setVideos((prev) => prev.filter((video) => video.id !== videoToDelete.id));
      alert("Video deleted successfully!");
    } catch (error) {
      console.error("Error deleting video:", error);
      alert("Failed to delete video. Please try again.");
    }
    setShowDeleteModal(false);
  };

  const openUpdateModal = (video) => {
    setVideoToUpdate(video);
    setShowUpdateModal(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://your-backend-endpoint/videos/${videoToUpdate.id}`, videoToUpdate);
      setVideos((prev) =>
        prev.map((video) => (video.id === videoToUpdate.id ? videoToUpdate : video))
      );
      alert("Video updated successfully!");
    } catch (error) {
      console.error("Error updating video:", error);
      alert("Failed to update video. Please try again.");
    }
    setShowUpdateModal(false);
  };

  return (
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
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Video
        </button>
      </form>

      {/* Video List */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Uploaded Videos</h2>
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">URL</th>
              <th className="px-4 py-2 border">Duration</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video) => (
              <tr key={video.id}>
                <td className="px-4 py-2 border">{video.title}</td>
                <td className="px-4 py-2 border">{video.url}</td>
                <td className="px-4 py-2 border">{video.duration}</td>
                <td className="px-4 py-2 border">{video.date}</td>
                <td className="px-4 py-2 border">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() => openDeleteModal(video)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded ml-2"
                    onClick={() => openUpdateModal(video)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && videoToDelete && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Are you sure?</h2>
            <p>Do you want to delete the video "{videoToDelete.title}"?</p>
            <div className="mt-4 flex justify-end gap-2">
              <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Modal */}
      {showUpdateModal && videoToUpdate && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Update Video</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Video URL</label>
                <input
                  type="text"
                  name="url"
                  value={videoToUpdate.url}
                  onChange={handleUpdateChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={videoToUpdate.title}
                  onChange={handleUpdateChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={videoToUpdate.duration}
                  onChange={handleUpdateChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="text"
                  name="date"
                  value={videoToUpdate.date}
                  onChange={handleUpdateChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded"
                  onClick={() => setShowUpdateModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={handleUpdate}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadYouTubeVideos;
