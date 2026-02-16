// src/utils/tracker.js
export const createFetchTracker = () => {
  let count = 0;
  return () => {
    count++;
    console.log(`API Fetch Attempt #${count} at ${new Date().toLocaleTimeString()}`);
    return count;
  };
};

const trackFetch = createFetchTracker();
export default trackFetch;