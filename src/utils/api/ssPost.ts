import sleep from "/@src/utils/sleep";
export async function getPost(slug: string, posts) {
	const postFiltered = posts.find(function (data) {
		if (data.slug == slug) return data;
	});

	// simulate api call
	await sleep(200);

	if (!postFiltered) {
		return Promise.reject(new Error(`Post ${slug} not found`));
	}

	return Promise.resolve(postFiltered);
}
