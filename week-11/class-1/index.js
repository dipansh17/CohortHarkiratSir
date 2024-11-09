let currentClock;
function searchBackend() {
  console.log("request sent to backend");
}
function debouncedSearchBackend() {
  //start a clock for 30ms
  console.log("current clock cleared");
  clearTimeout(currentClock);
  // if called dobara will clear the clock and then vapis start the clock
  currentClock = setTimeout(searchBackend, 30);
  console.log("current clock setted");
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
