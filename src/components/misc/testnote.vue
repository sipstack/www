<template>
	<div>
		<Section color="grey" overflown>
			<Container>
				<div class="mx-auto max-w-9">
					<PageTitle title="Smart CNAM" subtitle="Caller ID lookups just got smarter">
						<template #content>
							<div class="library-search mx-auto max-w-4 pt-4">
								<Field>
									<Control icon="feather:search">
										<VInput v-model="filter" type="text" placeholder="Search library..." />
										<button v-if="filter.length > 0" class="close-search" @click="filter = ''">
											<i-feather-x />
										</button>
									</Control>
									<div v-if="filter.length > 0" class="filter-results">
										<div class="filter-results-inner">
											<ul v-if="filteredData.length">
												<li v-for="result in filteredData" :key="result.title" overflown>
													<RouterLink to="/resources/knowledge-base/smart-cnam/article">
														<div class="filter-result-item">
															<!-- <div class="result-icon">
													<i class="iconify" :data-icon="result.icon"></i>
												</div> -->
															<div class="meta">
																<h3>{{ result.title }}</h3>
																<!-- <p class="paragraph rem-85">
														{{ result.type }}
													</p> -->
															</div>
															<div class="go-icon">
																<i-ph-arrow-circle-right-duotone />
															</div>
														</div>
													</RouterLink>
												</li>
											</ul>
											<div v-else-if="!filteredData.length">
												<div class="search-placeholder">
													<div>
														<i-iconoir-google-docs />
														<h3>Nothing Found</h3>
														<p class="paragraph rem-90">We couldn't find any matching results</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Field>
							</div>
							<!-- <div class="mx-auto max-w-6 mt-2">
								<p class="paragraph rem-115">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit, placet agi subtilius et, ut ipse.
								</p>
							</div> -->
						</template>
					</PageTitle>
				</div>
				<Container v-if="category">
					<!-- <SsHeroSimple title="Smart CNAM" subtitle="Caller ID lookups just got smarter" overflown class="z-3" /> -->

					<SsKBCategory :category="category" />
				</Container>
			</Container>
		</Section>
	</div>
	<SsFooter></SsFooter>
</template>