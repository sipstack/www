<script setup lang="ts">
export interface ssTimelineCodeWindow {
	title: string;
	command: string;
}

// const props = withDefaults(defineProps<ssTimelineCodeWindow>(), {
// 	title: "Bash",
// 	command: "curl https://api.sipstack.com/v1/...",

// });
</script>

<template>
	<div class="code-window z-3">
		<div class="window-head">
			<div class="dots">
				<div class="dot bg-danger"></div>
				<div class="dot bg-yellow"></div>
				<div class="dot bg-success"></div>
			</div>
			<div class="tab">extensions.conf (asterisk)</div>
		</div>
		<div class="window-body">
			<div class="code-lines">
				<div class="code-line">1</div>
				<div class="code-line">2</div>
				<div class="code-line">3</div>
				<div class="code-line"></div>
				<div class="code-line">4</div>
			</div>

			<div class="code-content">
				<div class="code-content-line">...</div>
				<div class="code-content-line"><span class="bold">same =>&nbsp;</span>n,Verbose(Getting Smart CNAM)</div>
				<div class="code-content-line">
					<span class="bold">same =>&nbsp;</span>n,Set(CALLERID(name)=${CURL(https://api.sipstack.com/v1/t/cnam/<span class="bold">${CALLERID(num)}</span>/<span class="bold"
						>${EXTEN}</span
					>)})
				</div>
				<div class="code-content-line">
					<span class="bold">same =>&nbsp;</span>n,Verbose(Returns: <span class="bold">${CALLERID(num)}</span>) ; <span class="bold text-secondary">SCORE</span
					><span class="bold text-primary">CALLERNAME</span>
				</div>
				<div class="code-content-line">...</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.code-window {
	position: relative;
	width: 100%;
	height: 220px;
	background: var(--wrap-muted-color);
	border: 1px solid var(--card-border-color);
	border-radius: 0.5rem;
	box-shadow: var(--spread-shadow);
	overflow: hidden;

	.window-head {
		display: flex;
		align-items: center;
		height: 2.75rem;
		background: var(--card-bg-color);
		border-bottom: 1px solid var(--card-border-color);
		padding: 0 0.5rem;

		.dots {
			.dot {
				border-radius: 50%;
				display: inline-block;
				width: 12px;
				height: 12px;
				margin-left: 0.5rem;
			}
		}

		.tab {
			position: relative;
			bottom: -5px;
			height: 2.25rem;
			background: var(--wrap-muted-color);
			border: 1px solid var(--card-border-color);
			border-bottom: none;
			border-radius: 0.5rem 0.5rem 0 0;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 1.15rem;
			margin-left: 1rem;
			font-family: var(--font);
			font-size: 0.9rem;
			color: var(--title-color);
		}

		.address-bar {
			display: flex;
			align-items: center;
			height: 1.85rem;
			padding: 0 1.25rem;
			background: var(--wrap-muted-color);
			border-radius: 0.25rem;
			margin-left: auto;
			margin-right: 35%;
			min-width: 190px;
			font-family: var(--font);
			font-size: 0.85rem;
			color: var(--title-color);

			.iconify {
				margin-left: auto;
				font-size: 0.8rem;
			}
		}
	}

	.window-body {
		height: calc(320px - 2.75rem);
		display: flex;
		align-items: stretch;

		.code-lines {
			height: 100%;
			width: 2.5rem;
			background: var(--wrap-bg-color-heavy);
			padding: 1rem 0;

			.code-line {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 1.75rem;
				font-size: 0.9rem;
				font-family: monospace;
				color: var(--title-color);
			}
		}

		.code-content {
			height: 100%;
			width: calc(100% - 2.5rem);
			padding: 1rem;

			.code-content-line {
				display: flex;
				align-items: center;
				height: 1.75rem;
				font-size: 0.9rem;
				font-family: monospace;
				color: var(--title-color);

				&.indented-1 {
					margin-left: 1.5rem;
				}

				&.indented-2 {
					margin-left: 3rem;
				}

				.bold {
					font-weight: 600;
				}
			}
		}
	}

	&.is-second {
		top: -110px;
		margin-left: 10%;
		background: var(--card-bg-color);
		z-index: 1;

		.window-body {
			display: block;
			background: var(--card-bg-color);
			padding: 0.75rem 1.25rem 1.25rem;

			.fake-nav {
				display: flex;
				align-items: center;
				height: 50px;
				width: 100%;
				margin-bottom: 1rem;

				.fake-logo-block {
					display: flex;
					align-items: center;
				}

				.fake-logo {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 42px;
					width: 42px;
					border-radius: 50%;
					background: var(--wrap-muted-color);

					img {
						display: block;
						max-width: 22px;
					}
				}

				.fake-links {
					margin-left: auto;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					> div:not(:last-child) {
						margin-right: 0.25rem;
					}
				}
			}

			.fake-body {
				display: flex;
				width: 100%;

				> div {
					width: 50%;

					&:first-child {
						padding-right: 0.5rem;
					}

					&:nth-child(2) {
						padding-left: 0.5rem;
					}
				}

				.fake-img {
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 0.25rem;
					height: 175px;
					width: 100%;
					background: var(--wrap-muted-color);

					img {
						max-width: 110px;
					}
				}
			}
		}
	}
}
</style>
