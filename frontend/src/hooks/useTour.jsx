import { useEffect, useState } from "react";

const useTour = (tourName) => {
  // Step state and initialization
  const [enabled, setEnabled] = useState(false);
  const [isTourCompleted, setIsTourCompleted] = useState(false);

  useEffect(() => {
    const tourCompleted = localStorage.getItem(tourName);

    if (!tourCompleted) {
      setEnabled(true);
    } else {
      setIsTourCompleted(true);
    }
  }, []);

  // Handle the completion of the tour
  const handleExit = () => {
    localStorage.setItem(tourName, "true"); // Set the flag in localStorage
    setEnabled(false); // Disable the steps after completion
    setIsTourCompleted(true); // Update state to show the tour has been completed
  };

  return [enabled, setEnabled, handleExit];
};

export default useTour;
