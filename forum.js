document.addEventListener('DOMContentLoaded', () => {
    initializeChat();
    initializePostEditor();
    initializeUserSettings();
    loadForumThreads();
    initializeEventCalendar();
    initializePolls();
    initializeTrendingTopics();
    initializeActiveThreads();
    loadUserProfile();
    initializeForumAnalytics();
    initializeNotifications();
    initializeSearch();
    initializeTagging();
    initializeVoting();
    initializeModeration();
    initializeReportPost();
    initializeReputationSystem();
    initializePrivateMessaging();
    initializeContentFiltering();
    initializeAttachments();
    initializeBookmarking();
    initializeDarkMode();
});

function initializeChat() {
    // Same as previous
}

function initializePostEditor() {
    // Rich text editor initialization
    const editor = new Quill('#post-editor', {
        theme: 'snow',
        modules: {
            toolbar: true
        }
    });

    editor.on('text-change', () => {
        localStorage.setItem('draftPost', editor.root.innerHTML);
    });

    const postForm = document.getElementById('post-form');
    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const content = editor.root.innerHTML;
        fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        }).then(response => response.json())
          .then(data => {
              editor.root.innerHTML = '';
              localStorage.removeItem('draftPost');
          });
    });

    window.addEventListener('load', () => {
        const draftPost = localStorage.getItem('draftPost');
        if (draftPost) {
            editor.root.innerHTML = draftPost;
        }
    });
}

function initializeUserSettings() {
    // User settings
}

function loadForumThreads() {
    // Load forum threads
}

function initializeEventCalendar() {
    // Calendar
}

function initializePolls() {
    // Polls
}

function initializeTrendingTopics() {
    // Trending topics
}

function initializeActiveThreads() {
    // Active threads
}

function loadUserProfile() {
    // User profile
}

function initializeForumAnalytics() {
    // Forum analytics
}

function initializeNotifications() {
    const notificationsContainer = document.getElementById('notifications');
    if (notificationsContainer) {
        // Fetch notifications
        fetch('/api/notifications')
            .then(response => response.json())
            .then(notifications => {
                notifications.forEach(notification => {
                    const notificationElement = document.createElement('li');
                    notificationElement.textContent = notification.message;
                    notificationsContainer.appendChild(notificationElement);
                });
            });
    }
}

function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value;
            fetch(`/api/search?q=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(results => {
                    searchResults.innerHTML = '';
                    results.forEach(result => {
                        const resultElement = document.createElement('li');
                        resultElement.innerHTML = `<a href="/forum/thread/${result.id}">${result.title}</a>`;
                        searchResults.appendChild(resultElement);
                    });
                });
        });
    }
}

function initializeTagging() {
    const taggingInput = document.getElementById('tagging-input');
    if (taggingInput) {
        taggingInput.addEventListener('input', () => {
            const query = taggingInput.value;
            fetch(`/api/users/search?q=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(users => {
                    const tagSuggestions = document.getElementById('tag-suggestions');
                    tagSuggestions.innerHTML = '';
                    users.forEach(user => {
                        const userElement = document.createElement('div');
                        userElement.textContent = user.username;
                        userElement.addEventListener('click', () => {
                            taggingInput.value = `@${user.username}`;
                            tagSuggestions.innerHTML = '';
                        });
                        tagSuggestions.appendChild(userElement);
                    });
                });
        });
    }
}

function initializeVoting() {
    document.querySelectorAll('.vote-button').forEach(button => {
        button.addEventListener('click', () => {
            const postId = button.dataset.postId;
            const voteType = button.dataset.voteType;
            fetch(`/api/posts/${postId}/vote`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ voteType })
            }).then(response => response.json())
              .then(data => {
                  // Update UI with new vote counts
              });
        });
    });
}

function initializeModeration() {
    const moderationButtons = document.querySelectorAll('.moderation-button');
    moderationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const postId = button.dataset.postId;
            const action = button.dataset.action;
            fetch(`/api/moderation/${action}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ postId })
            }).then(response => response.json())
              .then(data => {
                  // Update UI based on action
              });
        });
    });
}

function initializeReportPost() {
    const reportButtons = document.querySelectorAll('.report-button');
    reportButtons.forEach(button => {
        button.addEventListener('click', () => {
            const postId = button.dataset.postId;
            fetch('/api/posts/report', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ postId })
            }).then(response => response.json())
              .then(data => {
                  // Notify user of report status
              });
        });
    });
}

function initializeReputationSystem() {
    const reputationElement = document.getElementById('user-reputation');
    if (reputationElement) {
        fetch('/api/user/reputation')
            .then(response => response.json())
            .then(reputation => {
                reputationElement.textContent = `Reputation: ${reputation.score}`;
            });
    }
}

function initializePrivateMessaging() {
    const pmButton = document.getElementById('pm-button');
    const pmBox = document.getElementById('pm-box');
    const pmInput = document.getElementById('pm-input');
    const sendPmButton = document.getElementById('send-pm');
    const pmMessages = document.getElementById('pm-messages');

    pmButton.addEventListener('click', () => {
        pmBox.style.display = pmBox.style.display === 'none' ? 'block' : 'none';
    });

    sendPmButton.addEventListener('click', () => {
        const message = pmInput.value;
        if (message.trim()) {
            fetch('/api/private-messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            }).then(response => response.json())
              .then(data => {
                  pmMessages.innerHTML += `<div>${data.message}</div>`;
                  pmInput.value = '';
              });
        }
    });
}

function initializeContentFiltering() {
    const filterSelect = document.getElementById('filter-select');
    filterSelect.addEventListener('change', () => {
        const filter = filterSelect.value;
        fetch(`/api/posts?filter=${encodeURIComponent(filter)}`)
            .then(response => response.json())
            .then(posts => {
                const postsContainer = document.getElementById('posts-container');
                postsContainer.innerHTML = '';
                posts.forEach(post => {
                    const postElement = document.createElement('li');
                    postElement.innerHTML = `<a href="/forum/thread/${post.id}">${post.title}</a>`;
                    postsContainer.appendChild(postElement);
                });
            });
    });
}
function initializeAttachments() {
    const attachmentInput = document.getElementById('attachment-input');
    const attachmentList = document.getElementById('attachment-list');
    
    attachmentInput.addEventListener('change', (event) => {
        const files = event.target.files;
        Array.from(files).forEach(file => {
            const listItem = document.createElement('li');
            listItem.textContent = file.name;
            attachmentList.appendChild(listItem);

            // Optionally, you can upload the file to the server here
            const formData = new FormData();
            formData.append('file', file);
            fetch('/api/attachments', {
                method: 'POST',
                body: formData
            }).then(response => response.json())
              .then(data => {
                  // Handle successful upload
              });
        });
    });
}

function initializeBookmarking() {
    document.querySelectorAll('.bookmark-button').forEach(button => {
        button.addEventListener('click', () => {
            const postId = button.dataset.postId;
            fetch(`/api/posts/${postId}/bookmark`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }).then(response => response.json())
              .then(data => {
                  // Update UI to reflect bookmarking status
              });
        });
    });
}

function initializeDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    window.addEventListener('load', () => {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        if (darkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }
    });
}

// Real-time notifications
function initializeRealTimeNotifications() {
    const notificationsSocket = new WebSocket('ws://yourserver.com/notifications');
    
    notificationsSocket.onmessage = (event) => {
        const notification = JSON.parse(event.data);
        const notificationElement = document.createElement('li');
        notificationElement.textContent = notification.message;
        document.getElementById('notifications').appendChild(notificationElement);
    };
}

// Function to load user profile data
function loadUserProfile() {
    fetch('/api/user/profile')
        .then(response => response.json())
        .then(profile => {
            document.getElementById('profile-name').textContent = profile.name;
            document.getElementById('profile-email').textContent = profile.email;
            // Other profile fields...
        });
}

// Function to initialize forum analytics dashboard
function initializeForumAnalytics() {
    fetch('/api/analytics')
        .then(response => response.json())
        .then(analytics => {
            document.getElementById('total-posts').textContent = `Total Posts: ${analytics.totalPosts}`;
            document.getElementById('total-users').textContent = `Total Users: ${analytics.totalUsers}`;
            // Other analytics...
        });
}
