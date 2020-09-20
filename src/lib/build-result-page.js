const { PAGE_SIZE } = require('./contants');
const getPage = require('./get-page');

/**
 * Builds the result page considering pagination.
 * ```
 * {
 *  count,
 *  previous,
 *  next,
 *  results,
 * }
 * ```
 * @param {*} models full array of models
 * @param {String} serverName server name
 * @param {Number} pageNumber current page number (1-based)
 * @returns {*} an object as described above
 */
function buildResultPage(models, serverName, pageNumber) {
  const count = models.length;

  let previous = null;
  let next = null;

  const resultPage = getPage(models, pageNumber);
  if (pageNumber !== 1) {
    previous = pageNumber - 1;
  }

  if (resultPage.length >= PAGE_SIZE) {
    next = pageNumber + 1;
  }

  const result = {
    count,
    previous,
    next,
    results: resultPage,
  };

  return result;
}

module.exports = buildResultPage;
