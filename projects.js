// Dữ liệu mẫu cho các dự án
const projects = [
  {
    title: 'Short Film',
    description: 'The last mission',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Music Video',
    description: 'Thank you Sonat',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Animation',
    description: 'Among Us x Kimesu no Yaiba',
    image: 'https://via.placeholder.com/300x200'
  },
  // Thêm các dự án khác tại đây
];

// Hàm để tạo phần tử HTML cho dự án
function createProjectElement(project) {
  const projectItem = document.createElement('div');
  projectItem.classList.add('project-item');

  const imageElement = document.createElement('img');
  imageElement.src = project.image;
  imageElement.alt = project.title;

  const descriptionElement = document.createElement('div');
  descriptionElement.classList.add('description');
  descriptionElement.textContent = project.description;

  projectItem.appendChild(imageElement);
  projectItem.appendChild(descriptionElement);

  return projectItem;
}

// Hiển thị các dự án trên trang web
const projectGrid = document.querySelector('.project-grid');
projects.forEach(project => {
  const projectElement = createProjectElement(project);
  projectGrid.appendChild(projectElement);
});