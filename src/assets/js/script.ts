document.addEventListener('DOMContentLoaded', function () {
  const qaList = document.querySelectorAll('.qa-list__item');
  qaList.forEach(function (qa) {
    qa.addEventListener('click', function () {
      this.classList.toggle('is-open');
    });
  });
});
