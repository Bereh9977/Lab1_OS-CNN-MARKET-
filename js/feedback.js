document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.querySelector('#feedback');
  if (!textarea) return;

  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip', 'hidden');
  tooltip.textContent = 'Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка';

  const wrapper = document.createElement('div');
  wrapper.classList.add('textarea-wrapper');
  textarea.parentNode.insertBefore(wrapper, textarea);
  wrapper.appendChild(textarea);
  wrapper.appendChild(tooltip);

  textarea.addEventListener('mouseenter', function() {
    textarea.classList.add('textarea-hover');
    tooltip.classList.remove('hidden');
  });

  textarea.addEventListener('mouseleave', function() {
    textarea.classList.remove('textarea-hover');
    tooltip.classList.add('hidden');
  });
});