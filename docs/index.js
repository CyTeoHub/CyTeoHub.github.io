
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const currentTimeElement = document.getElementById('current-time');
    currentTimeElement.innerHTML = timeString;
  }

  // Call the updateClock function every second
  setInterval(updateClock, 1000);

  // const now = new Date(); // Create a new Date object with the current date and time
  // const currentDate = now.toLocaleDateString();
  // 
  // 

  const dateNow = moment().format("MMM Do YY");   
  const day = moment().format('dddd');    
  const currentTimeElement_Date = document.getElementById('current-date');
  currentTimeElement_Date.innerHTML = dateNow +' | '+ day

  function search() {
    // Get the input value
    var searchQuery = document.getElementById("search-query").value;

    // Construct the Google search URL
    var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);

    // Open the search results in a new tab
    window.open(googleSearchUrl, "_blank");
  }

  function searchImage() {
    // Get the input value
    var searchQuery = document.getElementById("search-queryImage").value;

    // Construct the Google Images search URL
    var googleImagesUrl = "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(searchQuery);

    // Open the image search results in a new tab
    window.open(googleImagesUrl, "_blank");
}