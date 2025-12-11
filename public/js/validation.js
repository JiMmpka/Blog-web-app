// Form validation for create and edit pages
document.addEventListener('DOMContentLoaded', function() {
  const contentTextarea = document.getElementById('content');
  const charCount = document.getElementById('charCount');
  const form = document.querySelector('form');
  
  // Check if elements exist (they might not be on every page)
  if (!contentTextarea || !charCount || !form) {
    return;
  }
  
  // Real-time character counter
  contentTextarea.addEventListener('input', function() {
    const length = this.value.length;
    const icon = length >= 10 
      ? '<i class="bi bi-check-circle text-success"></i>' 
      : '<i class="bi bi-info-circle text-warning"></i>';
    charCount.innerHTML = `${icon} Minimum 10 characters (${length}/10)`;
  });
  
  // Additional validation on submit
  form.addEventListener('submit', function(e) {
    const content = contentTextarea.value.trim();
    
    if (content.length < 10) {
      e.preventDefault();
      alert('❌ Post content must be at least 10 characters long!\n\nCurrent length: ' + content.length + ' characters');
      contentTextarea.focus();
      return false;
    }
  });
});
