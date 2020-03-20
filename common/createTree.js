const createTree = payload => {
  const data = JSON.parse(JSON.stringify(payload));
  let tree = [], arrElem, mappedArr = {}, mappedElm;

  for(var i = 0, len = data.length; i < len; i++) {
    arrElem = data[i];
    arrElem.key = arrElem.channelCategoryID;
    mappedArr[arrElem.channelCategoryID] = arrElem;
    mappedArr[arrElem.channelCategoryID]['children'] = [];
  }

  for(let i in mappedArr) {
    if (mappedArr.hasOwnProperty(i)) {
      mappedElm = mappedArr[i];
      if(mappedElm.parentID) {
        mappedArr[mappedElm.parentID].children.push(mappedElm);
      } else {
        tree.push(mappedElm)
      }
    }
  }

  return tree;
}

export { createTree };
