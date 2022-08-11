import sleep from '/@src/utils/sleep'
export async function getArticle(slug: string, slug_cat: string, categories) {
  const categoryFiltered = categories.find(function (data) {
    console.log('tets')
    if (data.slug == slug_cat) return true
  })
  // console.log(categoryFiltered); // debug
  const articleFiltered = categoryFiltered.articles.find(function (data) {
    if (data.slug == slug) return true
  })
  // simulate api call
  await sleep(200)

  if (!articleFiltered) {
    return Promise.reject(new Error(`Article ${slug} not found`))
  }

  return Promise.resolve(articleFiltered)
}
