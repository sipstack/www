<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
import { useRoute } from 'vue-router'

export interface PostGridItemAuthor {
  photo: string
  name: string
  role: string
}

export interface PostItem {
  id: number
  author: PostGridItemAuthor
  category: string
  tags: []
  title: string
  abstract: string
  image: string
  views: string
  content: string
  // date: string;
  duration: number
  related?: PostItem[]
  slug: string
  created: string
  updated: string
}

export interface PostItemProps {
  post: PostItem
  upsideDown?: boolean
}

const props = withDefaults(defineProps<PostItemProps>(), {
  upsideDown: false,
  slug: 'post-slug-not-defined',
})
const route = useRoute()
var basePath = ''
if (route.fullPath.substring(route.fullPath.length - 1) != '/')
  basePath = route.fullPath + '/'
</script>
  
  <template>
  <RouterLink
    :to="basePath + props.post.slug"
    class="is-flex is-align-items-center">
    <div class="card">
      <div v-if="props.upsideDown" class="card-image">
        <img
          class="block"
          :src="props.post.image"
          alt="Post image"
          width="360"
          height="200"
          @error.once="
            (event) => viaPlaceholderErrorHandler(event, `360x200`)
          " />
      </div>
      <div class="card-content">
        <div class="media is-align-items-center">
          <div class="media-left">
            <AvatarSimple :picture="props.post.author.photo" />
          </div>
          <div class="media-content">
            <Subtitle
              tag="p"
              :size="6"
              weight="semi"
              uppercase
              class="rem-75 weight-5 text-primary">
              <span>{{ props.post.category }}</span>
            </Subtitle>
            <Title tag="h3" :size="6" weight="semi">
              <span class="blog-title">{{ props.post.title }}</span>
            </Title>
          </div>
        </div>

        <div class="content">
          <p class="paragraph blog-abstract">{{ props.post.abstract }}</p>
        </div>
        <div
          class="is-flex is-align-items-center is-justify-content-space-between">
          <div>
            <!-- <RouterLink to="/blog/post" class="is-flex is-align-items-center"> -->
            <span class="mr-2">Read More</span>
            <i class="iconify" data-icon="feather:arrow-right"></i>
            <!-- </RouterLink> -->
          </div>
          <div
            v-if="props.post.views"
            class="card-stats is-flex is-align-items-center">
            <div class="is-flex is-align-items-center">
              <i class="iconify" data-icon="feather:eye"></i>
              <span class="ml-1">{{ props.post.views }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!props.upsideDown" class="card-image">
        <img
          class="block"
          :src="props.post.image"
          alt="Post image"
          width="360"
          height="200"
          @error.once="
            (event) => viaPlaceholderErrorHandler(event, `360x200`)
          " />
      </div>
    </div>
  </RouterLink>
</template>
  
  <style lang="scss" scoped>
.card {
  box-shadow: none;
  background: var(--blog-grid-item-bg-color);
  border-radius: 0.75rem;
  border: 1px solid var(--blog-grid-item-border-color);
  overflow: hidden;
  transition: box-shadow 0.3s;

  .card-image {
    img {
      width: 100%;
      height: 168px;
      object-fit: cover;
    }
  }
  .blog-title {
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // max-width: 128ch;
    min-height: 2.25em; // 1.125x2
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Number of lines displayed before it truncate */
    overflow: hidden;
  }
  .blog-abstract {
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // max-width: 128ch;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* Number of lines displayed before it truncate */
    overflow: hidden;
  }

  .media {
    .media-content {
      overflow-x: visible;
    }
  }

  a {
    font-family: var(--font);
    font-size: 0.95rem;

    .iconify {
      transition: transform 0.3s;
    }

    &:hover {
      color: var(--primary);
      opacity: 0.7;

      .iconify {
        transform: translateX(5px);
      }
    }
  }

  .card-stats {
    font-family: var(--font);
    color: var(--light-text);
  }

  .card-footer {
    .card-footer-item {
      color: var(--medium-text);
      transition: all 0.3s;

      &:hover {
        color: var(--primary);
        background: var(--widget-grey);
      }
    }
  }

  &:hover {
    box-shadow: var(--light-box-shadow);
  }
}
</style>
  