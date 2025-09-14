const imgContainer = document.querySelector('.images');

function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = '';
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`Image not found: ${imgPath}`));
    });
  });
}

async function loadNPause() {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error('Error in loadNPause:', err);
  }
}

async function loadAll(imgArr) {
  try {
    const imgsPromises = imgArr.map(path => createImage(path));
    console.log('Promises array (pending):', imgsPromises);
    const imgs = await Promise.all(imgsPromises);
    console.log('Loaded image elements:', imgs);
    imgs.forEach(img => img.classList.add('parallel'));
    return imgs;
  } catch (err) {
    console.error('Error in loadAll:', err);
  }
}
