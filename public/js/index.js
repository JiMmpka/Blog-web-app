function handleDelete(event, form) {
  if (!confirm('Are you sure you want to delete this post?')) {
    event.preventDefault();
    return false;
  }
  sessionStorage.setItem('indexScrollPosition', window.scrollY);
  return true;
}

document.addEventListener('DOMContentLoaded', function() {
  const indexScrollPosition = sessionStorage.getItem('indexScrollPosition');
  if (indexScrollPosition) {
    setTimeout(() => {
      window.scrollTo({
        top: parseInt(indexScrollPosition),
        behavior: 'instant'
      });
    }, 50);
    sessionStorage.removeItem('indexScrollPosition');
  }
  
  const editedPostId = sessionStorage.getItem('editedPostId');
  if (editedPostId) {
    const savedScroll = sessionStorage.getItem('indexScrollPosition');
    if (savedScroll) {
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedScroll),
          behavior: 'smooth'
        });
      }, 100);
    }
    sessionStorage.removeItem('editedPostId');
  }
  
  const editLinks = document.querySelectorAll('a[href^="/edit/"]');
  editLinks.forEach(link => {
    link.addEventListener('click', function() {
      const href = this.getAttribute('href');
      const postId = href.split('/edit/')[1];
      sessionStorage.setItem('indexScrollPosition', window.scrollY);
      sessionStorage.setItem('editedPostId', postId);
    });
  });
});
