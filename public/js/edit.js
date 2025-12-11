document.addEventListener('DOMContentLoaded', function() {
  const editForm = document.getElementById('editForm');
  const cancelBtn = document.getElementById('cancelBtn');
  
  if (editForm) {
    editForm.addEventListener('submit', function() {
      const postIdInput = this.querySelector('input[name="postId"]');
      if (postIdInput) {
        const postId = postIdInput.value;
        sessionStorage.setItem('editedPostId', postId);
      }
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
      const postIdInput = document.querySelector('input[name="postId"]');
      if (postIdInput) {
        const postId = postIdInput.value;
        sessionStorage.setItem('editedPostId', postId);
      }
    });
  }
});
