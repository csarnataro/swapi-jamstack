const { PAGE_SIZE } = require('./contants');

// GetPage gets the right page from whole the results
function getPage(entries, pageNumber) {
  const count = entries.length;
  const min = (pageNumber - 1) * PAGE_SIZE;
  if (min > count) {
    throw new RangeError('Not found');
  }
  let max = pageNumber * PAGE_SIZE;

  if (max > count) {
    max = count; // in order to avoid slice overflow
  }
  const page = entries.slice(min, max);
  if (page.length === 0) {
    throw new RangeError('Not found');
  }
  return page;
}

module.exports = getPage;
