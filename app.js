const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Menu toggle functionality
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open'); // Add/remove 'open' class to toggle menu visibility
});

// Note title and content input fields
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');

// Function to save note data in browser cache
function saveNoteToCache() {
  const title = noteTitleInput.value;
  const content = noteContentInput.value;

  // Convert note data to JSON string
  const noteData = JSON.stringify({ title, content });

  // Store note data in browser cache under a specific key
  localStorage.setItem('ruledPageNote', noteData);
}

// Function to load note data from browser cache
function loadNoteFromCache() {
  const noteData = localStorage.getItem('ruledPageNote');

  if (noteData) {
    // Parse JSON string back to object
    const parsedNote = JSON.parse(noteData);

    // Update input fields with cached note data
    noteTitleInput.value = parsedNote.title;
    noteContentInput.value = parsedNote.content;
  }
}

// Save note data to cache when form is submitted
const form = document.querySelector('.new-note form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  saveNoteToCache();

  // Clear input fields after saving
  noteTitleInput.value = '';
  noteContentInput.value = '';

  // You can also display a success message or redirect to another page here
});

// Load note data from cache when the page loads
window.onload = loadNoteFromCache;

// Clear note data from cache if desired (uncomment to enable)
// localStorage.removeItem('ruledPageNote');

// Dark mode toggle functionality (add logic or CSS classes to implement dark mode)
darkModeToggle.addEventListener('click', () => {
  // Your dark mode logic goes here
});

// Note that this code example doesn't integrate with the HTML structure or implement dynamic note list functionalities. 
// These aspects require further development based on your specific design and desired features.

// Remember, you can extend this code with additional functionalities and connect it to your HTML and CSS to create a fully functional note-taking app.

I hope this clarifies the code and provides a good starting point for your development process. Feel free to ask any further questions as you progress!
