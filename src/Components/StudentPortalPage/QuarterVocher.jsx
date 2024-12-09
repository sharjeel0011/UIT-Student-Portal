import React from "react";

const QuaterFormPage = () => {
  const formData = {
    header: {
      title: "Quarter 1",
      subtitle: "Batch 66",
    },
    userDetails: [
      { label: "Full Name", value: " Ali", readOnly: true },
      { label: "Roll NO", value: "UIT 182271", readOnly: true },
      { label: "Course", value: "CAE", readOnly: true },
    ],
    learningOptions: [
      { id: "onsite", label: "Onsite", value: "onsite", checked: true },
      { id: "online", label: "Online", value: "online", checked: false },
    ],
    center: {
      label: "Center",
      options: ["Sindh Ahemad Association | Main Campus"],
      description: "Sindh Boy Ahemad Association | Main Campus",
      locationLink: "#",
    },
    days: {
      label: "Days",
      options: ["Saturday"],
    },
    schedule: {
      day: "Saturday",
      time: "02:00 PM To 06:00 PM",
      remainingSeats: "0 seats remaining out of 480",
    },
    submitButton: {
      label: "CREATE",
      bgColor: "bg-red-600",
      textColor: "text-white",
    },
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        {/* Header */}
        <div className="bg-blue-900 text-white rounded-t-lg px-6 py-4">
          <h1 className="text-lg font-semibold">{formData.header.title}</h1>
          <p className="text-sm">{formData.header.subtitle}</p>
        </div>

        {/* Form */}
        <form className="space-y-6 mt-6">
          {/* User Details */}
          {formData.userDetails.map((detail, index) => (
            <div key={index}>
              <label className="block text-gray-700">{detail.label}</label>
              <input
                type="text"
                value={detail.value}
                readOnly={detail.readOnly}
                className="w-full mt-1 p-2 border rounded-md bg-gray-100"
              />
            </div>
          ))}

          {/* Learning Options */}
          <div>
            <label className="block text-gray-700">Learning</label>
            <div className="flex items-center mt-1">
              {formData.learningOptions.map((option) => (
                <div key={option.id} className="flex items-center mr-4">
                  <input
                    type="radio"
                    id={option.id}
                    name="learning"
                    value={option.value}
                    defaultChecked={option.checked}
                    className="mr-2"
                  />
                  <label htmlFor={option.id}>{option.label}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Center */}
          <div>
            <label className="block text-gray-700">{formData.center.label}</label>
            <select className="w-full mt-1 p-2 border rounded-md bg-gray-100">
              {formData.center.options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
            <p className="text-blue-600 mt-1">
              {formData.center.description} –{" "}
              <a href={formData.center.locationLink} className="underline">
                View Location
              </a>
            </p>
          </div>

          {/* Days */}
          <div>
            <label className="block text-gray-700">{formData.days.label}</label>
            <select className="w-full mt-1 p-2 border rounded-md bg-gray-100">
              {formData.days.options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>

          {/* Schedule */}
          <div>
            <label className="block text-gray-700">{formData.schedule.day}</label>
            <div className="mt-1">
              <p className="text-gray-700">{formData.schedule.time}</p>
              <p className="text-red-600">{formData.schedule.remainingSeats}</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`${formData.submitButton.bgColor} ${formData.submitButton.textColor} px-6 py-2 rounded-md`}
            >
              {formData.submitButton.label}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuaterFormPage;
