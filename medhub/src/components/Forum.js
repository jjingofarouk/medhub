import React from 'react';
import "./Forum.css";

// Example forum data
const samplePosts = [
  { id: 1, title: 'Latest Medical Advances', user: { username: 'Dr. Smith' }, created_at: '2024-09-10', replyCount: 5 },
  { id: 2, title: 'COVID-19 Discussion', user: { username: 'Dr. Adams' }, created_at: '2024-09-09', replyCount: 3 },
];


// Example user profiles
const userProfiles = [
  { id: 1, name: 'Dr. Smith', bio: 'Medical researcher and clinician.', img: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Dr. Adams', bio: 'Expert in infectious diseases.', img: 'https://via.placeholder.com/50' },
];

// Example trending tags
const trendingTags = ['COVID-19', 'Medical Research', 'Health Tips', 'Vaccinations'];

// Example recent activity
const recentActivity = [
  { id: 1, description: 'Dr. Smith started a new discussion on COVID-19.', time: '2024-09-10T12:00:00Z' },
  { id: 2, description: 'Dr. Adams replied to a post on health tips.', time: '2024-09-09T15:30:00Z' },
];

const Forum = () => {
  // Forum Threads
  const ForumThreads = ({ posts }) => (
    <section className="forum-threads">
      <h2 className="section-title">Forum Threads</h2>
      <div className="card-container">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <a href={`/post-detail/${post.id}`} className="card-title">
              {post.title}
            </a>
            <div className="card-details">
              <span>{post.user.username}</span>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
              <span>{post.replyCount} replies</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // Popular Posts
  const PopularPosts = ({ posts }) => {
    const sortedPosts = [...posts].sort((a, b) => b.replyCount - a.replyCount);
    return (
      <section className="popular-posts">
        <h2 className="section-title">Popular Posts</h2>
        <div className="card-container">
          {sortedPosts.slice(0, 5).map((post) => (
            <div key={post.id} className="card">
              <a href={`/post-detail/${post.id}`} className="card-title">
                {post.title}
              </a>
              <div className="card-details">
                <span>{post.user.username}</span>
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
                <span>{post.replyCount} replies</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };



  // User Profiles Section
  const UserProfiles = () => (
    <section className="user-profiles">
      <h2 className="section-title">User Profiles</h2>
      <div className="profile-container">
        {userProfiles.map(user => (
          <div key={user.id} className="profile-card">
            <img src={user.img} alt={user.name} className="profile-img" />
            <div className="profile-info">
              <h3 className="profile-name">{user.name}</h3>
              <p className="profile-bio">{user.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // Trending Tags Section
  const TrendingTags = () => (
    <section className="trending-tags">
      <h2 className="section-title">Trending Tags</h2>
      <div className="tags-container">
        {trendingTags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
    </section>
  );

  // Recent Discussions
  const RecentDiscussions = ({ posts }) => (
    <section className="recent-discussions">
      <h2 className="section-title">Recent Discussions</h2>
      <div className="card-container">
        {posts.slice(0, 5).map((post) => (
          <div key={post.id} className="card">
            <a href={`/post-detail/${post.id}`} className="card-title">
              {post.title}
            </a>
            <div className="card-details">
              <span>{post.user.username}</span>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
              <span>{post.replyCount} replies</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // Activity Overview
  const ActivityOverview = ({ activities }) => (
    <section className="activity-overview">
      <h2 className="section-title">Activity Overview</h2>
      <div className="activity-container">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <p>{activity.description}</p>
            <span className="activity-time">{new Date(activity.time).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </section>
  );

  // Forum Polls
  const ForumPolls = () => {
    // Example poll data
    const polls = [
      { question: 'What’s your favorite medical topic?', options: ['Cardiology', 'Neurology', 'Oncology'] },
      { question: 'How often do you visit the forum?', options: ['Daily', 'Weekly', 'Monthly'] },
    ];
  
    return (
      <section className="forum-polls">
        <h2 className="section-title">Forum Polls</h2>
        <div className="polls-container">
          {polls.map((poll, index) => (
            <div key={index} className="poll-card">
              <p>{poll.question}</p>
              <ul>
                {poll.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="main-content">
      <ForumThreads posts={samplePosts} />
      <PopularPosts posts={samplePosts} />
      <UserProfiles />
      <TrendingTags />
      <RecentDiscussions posts={samplePosts} />
      <ActivityOverview activities={recentActivity} />
      <ForumPolls />
    </div>
  );
};

export default Forum;
