function handleDelete(event, form) {
  if (!confirm('Are you sure you want to delete this post?')) {
    event.preventDefault();
    return false;
  }
  sessionStorage.setItem('deleteScrollPosition', window.scrollY);
  return true;
}

document.addEventListener('DOMContentLoaded', function() {
  const sortSelect = document.getElementById('sortSelect');
  const postsContainer = document.getElementById('postsContainer');
  
  if (!sortSelect || !postsContainer) return;
  
  const deleteScrollPosition = sessionStorage.getItem('deleteScrollPosition');
  if (deleteScrollPosition) {
    setTimeout(() => {
      window.scrollTo({
        top: parseInt(deleteScrollPosition),
        behavior: 'instant'
      });
    }, 50);
    sessionStorage.removeItem('deleteScrollPosition');
  }
  
  const editedPostId = sessionStorage.getItem('editedPostId');
  if (editedPostId) {
    const postCard = postsContainer.querySelector(`.post-item[data-id="${editedPostId}"]`);
    if (postCard) {
      setTimeout(() => {
        postCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
    sessionStorage.removeItem('editedPostId');
  }
  
  function attachEditLinkListeners() {
    const editLinks = document.querySelectorAll('.edit-link');
    editLinks.forEach(link => {
      link.addEventListener('click', function() {
        const postItem = this.closest('.post-item');
        if (postItem) {
          const postId = postItem.dataset.id;
          sessionStorage.setItem('editedPostId', postId);
        }
      });
    });
  }
  
  attachEditLinkListeners();
  
  sortSelect.addEventListener('change', function() {
    const sortType = this.value;
    const posts = Array.from(postsContainer.querySelectorAll('.post-item'));
    
    posts.sort((a, b) => {
      switch(sortType) {
        case 'newest':
          return parseInt(b.dataset.date) - parseInt(a.dataset.date);
        case 'oldest':
          return parseInt(a.dataset.date) - parseInt(b.dataset.date);
        case 'title-asc':
          return a.dataset.title.localeCompare(b.dataset.title);
        case 'title-desc':
          return b.dataset.title.localeCompare(a.dataset.title);
        case 'author':
          return a.dataset.author.localeCompare(b.dataset.author);
        default:
          return 0;
      }
    });
    
    postsContainer.innerHTML = '';
    posts.forEach((post, index) => {
      const badge = post.querySelector('.badge.bg-secondary');
      if (badge) {
        badge.textContent = index + 1;
      }
      postsContainer.appendChild(post);
    });
    
    attachEditLinkListeners();
  });
});
