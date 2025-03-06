import { useState } from "react";
import toast from "react-hot-toast";

const useLetterGeneration = () => {
  const [loading, setLoading] = useState(false);
  const [letterData, setLetterData] = useState(null);

  const generateLetter = async (
    fullName,
    rollNumber,
    department,
    semester,
    recipient,
    letterType,
    reason,
    description,
    fromDate,
    endDate
  ) => {
    console.log(
      "Srkjgberhgehrg:",
      fullName,
      rollNumber,
      department,
      semester,
      recipient,
      letterType,
      reason,
      description,
      fromDate,
      endDate
    );

    // if (!validateFormData(formData)) return;

    setLoading(true);

    // Set a timeout for the fetch request (e.g., 10 seconds)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000000);
    try {
      const res = await fetch("http://localhost:5000/api/user/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          fullName,
          rollNumber,
          department,
          semester,
          recipient,
          letterType,
          reason,
          description,
          fromDate,
          endDate
        ),
        signal: controller.signal, // Attach abort signal
      });

      clearTimeout(timeout); // Clear timeout if response comes in time

      console.log("API Response status:", res.status);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.error || `Error: ${res.status} - ${res.statusText}`
        );
      }

      const data = await res.json();
      console.log("API Response Data:", data);

      setLetterData(data);
      toast.success("Letter generated successfully!");
    } catch (error) {
      console.error("Fetch Error:", error);

      if (error.name === "AbortError") {
        toast.error("Request timed out. Please try again.");
      } else {
        toast.error(error.message || "Failed to generate letter.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, letterData, generateLetter };
};

export default useLetterGeneration;

// ✅ Improved Form Validation Function
function validateFormData({
  fullName,
  department,
  semester,
  roll,
  purpose,
  to,
  fromDate,
  toDate,
}) {
  if (!fullName || !department || !semester || !purpose || !to || !roll) {
    toast.error("Fill all the required fields");
    return false;
  }

  if (purpose === "duty-leave" && (!fromDate || !toDate)) {
    toast.error("Please provide both From and To dates for duty leave");
    return false;
  }

  return true;
}
