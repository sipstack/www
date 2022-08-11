import sleep from "/@src/utils/sleep";
export async function getCategory(slug: string, categories) {
	const categoryFiltered = categories.find(function (data) {
		if (data.slug == slug) return true;
	});
	// console.log(categoryFiltered); // debug

	// simulate api call
	await sleep(200);

	if (!categoryFiltered) {
		return Promise.reject(new Error(`Categpru ${slug} not found`));
	}

	return Promise.resolve(categoryFiltered);
}
