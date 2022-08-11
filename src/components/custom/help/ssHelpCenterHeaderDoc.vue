<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
import { blocks } from '/@src/data/resources/docs'
export interface HelpCenterTopic {
  icon: string
  iconColor: string
  title: string
  text: string
  link: string
}

export interface HelpCenterHeaderProps {
  title: string
  subtitle: string
  text?: string
  topics?: HelpCenterTopic[]
  compact?: boolean
}
const filter = ref('')

const filteredData = computed(() => {
  if (filter.value === '') {
    return []
  } else {
    return blocks.filter((item) => {
      return (
        item.icon.match(new RegExp(filter.value, 'i')) ||
        item.name.match(new RegExp(filter.value, 'i')) ||
        item.type.match(new RegExp(filter.value, 'i'))
      )
    })
  }
})

const props = withDefaults(defineProps<HelpCenterHeaderProps>(), {
  topics: () => [],
  compact: false,
  text: undefined,
})
</script>

<template>
  <div>
    <ssPageTitle
      :title="props.title"
      :subtitle="props.subtitle"
      :text="props.text"
      small>
      <!-- <template #content>
        <div class="library-search mx-auto max-w-4 pt-4">
          <Field>
            <Control icon="feather:search">
              <VInput
                v-model="filter"
                type="text"
                placeholder="Search library..." />
              <button
                v-if="filter.length > 0"
                class="close-search"
                @click="filter = ''">
                <i-feather-x />
              </button>
            </Control>
            <div v-if="filter.length > 0" class="filter-results">
              <div class="filter-results-inner">
                <ul v-if="filteredData.length">
                  <li v-for="result in filteredData" :key="result.name">
                    <RouterLink :to="result.link">
                      <div class="filter-result-item">
                        <div class="result-icon">
                          <i class="iconify" :data-icon="result.icon"></i>
                        </div>
                        <div class="meta">
                          <h3>{{ result.name }}</h3>
                          <p class="paragraph rem-85">
                            {{ result.type }}
                          </p>
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
                      <p class="paragraph rem-90">
                        We couldn't find any matching results
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Field>
        </div>
      </template> -->
    </ssPageTitle>
  </div>
</template>


<style scoped lang="scss">
.library-search {
  :deep(.input) {
    height: 52px;
    padding-left: 52px;
    border-radius: 0.85rem;
    border-color: var(--input-base-border-color-hover);
  }

  :deep(.field) {
    position: relative;
  }

  :deep(.control) {
    .form-icon {
      height: 52px;
      width: 52px;

      .iconify {
        font-size: 1.5rem;
      }
    }

    .close-search {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 52px;
      width: 52px;
      font-size: 1rem;
      background: none;
      border: none;
      padding: none;
      color: var(--light-text);
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: var(--primary);
      }
    }
  }
}

.filter-results {
  position: absolute;
  top: 42px;
  left: 0;
  width: 100%;
  background: var(--input-base-bg-color);
  border: 1px solid var(--input-base-border-color-hover);
  border-radius: 0 0 0.85rem 0.85rem;
  border-top: none;
  z-index: 9;

  .filter-results-inner {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 0.75rem;

    ul {
      max-height: 290px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 5px !important;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px !important;
        background: rgb(0 0 0 / 20%) !important;
      }
    }

    .filter-result-item {
      padding: 0.75rem 1rem;
      display: flex;
      align-items: center;
      margin: 0 0.5rem;
      width: calc(100% - 1rem);
      border-radius: 0.75rem;
      margin-bottom: 0.5rem;
      transition: background-color 0.3s;

      .result-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        min-width: 40px;
        border-radius: 50%;
        background: var(--wrap-muted-color);
        font-size: 1.25rem;
        color: var(--primary);
      }

      .meta {
        margin-left: 0.75rem;
        line-height: 1.2;

        h3 {
          font-family: var(--font-alt);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--title-color);
        }
      }

      .go-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36px;
        width: 36px;
        min-width: 36px;
        border-radius: 50%;
        margin-left: auto;
        background: var(--wrap-bg-color);
        box-shadow: var(--spread-shadow);
        font-size: 1.15rem;
        color: var(--primary);
        transform: rotate(235deg) scale(0);
        transition: transform 0.3s;
      }

      &:hover {
        background: var(--wrap-muted-color);

        .go-icon {
          transform: rotate(0) scale(1);
        }
      }
    }

    .search-placeholder {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 200px;
      text-align: center;

      > div {
        position: relative;
        top: -1rem;
      }

      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--title-color);
      }

      svg {
        font-size: 1.75rem;
        color: var(--primary);
      }
    }
  }
}
:deep(.control) {
  max-width: 540px;
  margin: 1rem auto 0;
}

:deep(.form-icon) {
  height: 54px !important;
  width: 54px !important;
  font-size: 1.5rem;
}

:deep(.input) {
  height: 54px !important;
  padding-left: 54px !important;
  border-radius: 50rem;
}

.help-center-navigation {
  max-width: 1080px;
  margin: 0 auto;

  .box {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    box-shadow: none;
    border-radius: 0.85rem;
    text-align: center;
    padding: 1.75rem;
    transition: box-shadow 0.3s, transform 0.3s;

    svg {
      font-size: 2.5rem;
      margin-bottom: 0.75rem;
    }

    &:hover {
      box-shadow: var(--spread-shadow);
      transform: translateY(-0.25rem);
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .help-center-navigation {
    .box {
      padding: 1.5rem 1rem;
    }
  }
}
</style>