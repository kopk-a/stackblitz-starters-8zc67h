// Sample video data
const videos = [
  {
    id: 1,
    title: 'Building a YouTube Clone with HTML, CSS & JavaScript',
    thumbnail: 'https://picsum.photos/seed/1/300/200',
    channel: 'Web Dev Tutorials',
    views: '120K views',
    timestamp: '2 days ago'
  },
  {
    id: 2,
    title: 'Learn JavaScript in 30 Minutes',
    thumbnail: 'https://picsum.photos/seed/2/300/200',
    channel: 'Code Master',
    views: '1.2M views',
    timestamp: '1 week ago'
  },
  {
    id: 3,
    title: 'CSS Grid Layout Crash Course',
    thumbnail: 'https://picsum.photos/seed/3/300/200',
    channel: 'CSS Ninja',
    views: '500K views',
    timestamp: '3 days ago'
  },
  {
    id: 4,
    title: 'Responsive Web Design Tips',
    thumbnail: 'https://picsum.photos/seed/4/300/200',
    channel: 'Design Pro',
    views: '750K views',
    timestamp: '5 days ago'
  },
  {
    id: 5,
    title: 'HTML5 Features You Should Know',
    thumbnail: 'https://picsum.photos/seed/5/300/200',
    channel: 'Web Essentials',
    views: '250K views',
    timestamp: '1 day ago'
  },
  {
    id: 6,
    title: 'Modern JavaScript Features',
    thumbnail: 'https://picsum.photos/seed/6/300/200',
    channel: 'JS Master',
    views: '300K views',
    timestamp: '4 days ago'
  }
];

// Function to create video cards
function createVideoCard(video) {
  return `
    <div class="video-card">
      <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail">
      <div class="video-info">
        <h3 class="video-title">${video.title}</h3>
        <p class="channel-name">${video.channel}</p>
        <p class="video-stats">${video.views} • ${video.timestamp}</p>
      </div>
    </div>
  `;
}

// Render videos
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('videos-container');
  container.innerHTML = videos.map(video => createVideoCard(video)).join('');

  // Add search functionality
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');

  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredVideos = videos.filter(video => 
      video.title.toLowerCase().includes(searchTerm) || 
      video.channel.toLowerCase().includes(searchTerm)
    );
    container.innerHTML = filteredVideos.map(video => createVideoCard(video)).join('');
  }

  searchButton.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
  });
});