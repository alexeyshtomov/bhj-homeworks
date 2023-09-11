const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const progressBar = document.getElementById('progress');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

 
  const xhr = new XMLHttpRequest();

  
  xhr.upload.addEventListener('progress', (e) => {
    if (e.lengthComputable) {
      
      const percentComplete = (e.loaded / e.total) * 100;
      progressBar.value = percentComplete;
    }
  });

  
  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      
      console.log('Файл успешно загружен');
    } else {
      
      console.error('Произошла ошибка при загрузке файла');
    }
  });

  
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
});
