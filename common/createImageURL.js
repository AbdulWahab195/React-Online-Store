const imageURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/productImages%2F';
  return (`${baseURL}${name}?alt=media`);
};

const iconURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/icons%2F';
  return (`${baseURL}${name}?alt=media`);
}

const catDocumentURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/documents%2FCAT%2F';
  return (`${baseURL}${name}?alt=media`);
}

const iesDocumentURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/documents%2FIES%2F';
  return (`${baseURL}${name}?alt=media`);
}

const lmDocumentURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/documents%2FLM79%2F';
  return (`${baseURL}${name}?alt=media`);
}

const manDocumentURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/documents%2FMAN%2F';
  return (`${baseURL}${name}?alt=media`);
}

const spcDocumentURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/documents%2FSPC%2F';
  return (`${baseURL}${name}?alt=media`);
}

const categoryURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/categoryImages%2F';
  return (`${baseURL}${name}?alt=media`);
}

const bannerURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/bannerImages%2F';
  return (`${baseURL}${name}?alt=media`);
}

const sliderImageURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/sliderImages%2F';
  return (`${baseURL}${name}?alt=media`);
}

const catalogsImageURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/catalogs%2F';
  return (`${baseURL}${name}?alt=media`);
}

const literatureImageURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/literature%2F';
  return (`${baseURL}${name}?alt=media`);
}

const newsImageURL = name => {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/westgatedash-d1341.appspot.com/o/newsImages%2F';
  return (`${baseURL}${name}?alt=media`);
}

export {
  newsImageURL,
  imageURL,
  iconURL,
  catDocumentURL,
  iesDocumentURL,
  lmDocumentURL,
  manDocumentURL,
  spcDocumentURL,
  categoryURL,
  bannerURL,
  sliderImageURL,
  catalogsImageURL,
  literatureImageURL
};
