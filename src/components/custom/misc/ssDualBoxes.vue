<script setup lang="ts">
import { ref } from "vue";

const options = ref(["Option 2"]);
export interface DualBoxesTemplate {
	name: string;
	image: string;
	icon: string;
	link: string;
}

export interface DualBoxesProps {
	templates: DualBoxesTemplate[];
}

// const props = withDefaults(defineProps<DualBoxesProps>(), {
// 	templates: () => [],
// });
</script>

<template>
	<div>
		<div class="dual-boxes mx-auto max-w-9">
			<div class="columns b-columns-half-tablet-p">
				<div class="column is-6">
					<div class="dual-box box-solid">
						<Title tag="h3" :size="5" weight="bold">
							<span>Support us through Platforms</span>
						</Title>
						<div class="inner-box">
							<div class="action-list">
								<p class="paragraph mb-4">Select a Git provider to import an existing project from a Git Repository.</p>
								<div class="button-list">
									<Button to="/" color="dark" icon-left="fa:github" fullwidth> Sponsor us on GitHub </Button>
									<Button to="/" color="info" icon-left="fa:docker" fullwidth> Star us on Docker Hub </Button>
								</div>
							</div>
						</div>
						<!-- <ActionLink label="Use another provider" link="/" size="small" /> -->Like us on social networks
					</div>
				</div>
				<div class="column is-6">
					<div class="dual-box box-muted">
						<Title tag="h3" :size="5" weight="bold">
							<span>Investment opportinuties</span>
						</Title>
						<div class="inner-box">
							<Field>
								<FieldLabel label="Email Address"></FieldLabel>
								<Control icon="feather:mail" validation is-valid>
									<VInput placeholder="johndoe@gmail.com" value="mymail@gmail.com" />
								</Control>
							</Field>
							<Field>
								<FieldLabel label="Password"></FieldLabel>
								<Control icon="feather:lock" validation is-invalid>
									<VInput type="password" value="" />
								</Control>
							</Field>
							<Checkbox v-model="options" name="checkbox-1" label="Option 1" value="Option 1" />
							<Checkbox v-model="options" name="checkbox-2" label="Option 1" value="Option 2" />
						</div>
						<ActionLink label="See all templates" link="/" size="small" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.dual-boxes {
	position: relative;

	.columns {
		align-items: stretch;
	}

	.dual-box {
		height: 100%;
		padding: 2rem;
		border-radius: 0.5rem;

		&.box-solid {
			background: var(--card-bg-color);
			border: 1px solid var(--card-border-color);

			.inner-box {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 4rem 2rem;
				background: var(--wrap-muted-color);
				border-radius: 0.4rem;
				border: 1px solid var(--card-border-color);
				margin-bottom: 1rem;

				.action-list {
					text-align: center;

					.button-list {
						:deep(.button) {
							&:not(:last-child) {
								margin-bottom: 0.75rem;
							}
						}
					}
				}
			}
		}

		&.box-muted {
			background: var(--wrap-muted-color);

			.inner-box {
				padding: 0.5rem 0 1rem;

				.columns {
					.column {
						padding: 0.35rem;
					}
				}

				.template-box {
					display: block;
					background: var(--card-bg-color);
					border: 1px solid var(--card-border-color);
					min-height: 175px;
					overflow: hidden;
					border-radius: 0.5rem;

					img {
						max-height: 120px;
						object-fit: cover;
						margin: 0;
					}

					.box-content {
						display: flex;
						align-items: center;
						height: 55px;
						padding: 0 0.5rem;
					}
				}
			}
		}
	}
}

@media only screen and (max-width: 767px) {
	.dual-boxes {
		.dual-box {
			padding: 1.5rem;

			&.box-solid {
				.inner-box {
					padding: 1rem;
				}
			}
		}
	}
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
	.dual-boxes {
		.dual-box {
			padding: 1.5rem;

			&.box-solid {
				.inner-box {
					padding: 1rem;
					min-height: 305px;
				}
			}

			&.box-muted {
				.inner-box {
					.template-box {
						min-height: 150px;

						img {
							max-height: 100px;
						}

						.box-content {
							height: 50px;
						}
					}
				}
			}
		}
	}
}
</style>
