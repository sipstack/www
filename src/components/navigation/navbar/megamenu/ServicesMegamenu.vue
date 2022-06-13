<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="megamenu-inner">
    <button class="close-button" @click="emit('close')">
      <i class="iconify" data-icon="feather:arrow-left"></i>
    </button>
    <Container>
      <div class="columns">
        <div class="column is-4">
          <div class="megamenu-block">
            <div class="media">
              <div class="media-left is-bolt">
                <span
                  class="iconify"
                  data-icon="heroicons-outline:light-bulb"
                  data-inline="false"
                ></span>
              </div>
              <div class="media-content">
                <h3>Solutions</h3>
                <p>
                  Find out why it's important to partner with SIPSTACK, in a
                  better connected tomorrow.
                </p>
                <RouterLink v-preload-link to="/blocks/colors">
                  <span>Read the blog</span>
                  <i
                    class="iconify"
                    data-icon="feather:arrow-right"
                    data-inline="false"
                  ></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block ml-6">
            <h4>Partners</h4>
            <ul>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  Government
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  Carriers
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  ITSPs
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  MSPs
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  Call Centers
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block ml-6">
            <h4>Verticals</h4>
            <ul>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  Financial
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  Healthcare
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  Insurance
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  Retail & Services
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-4 b-hidden-mobile b-hidden-tablet-p">
          <div class="megamenu-block is-left-bordered">
            <div class="image-block">
              <DarkImage
                src="/assets/img/banner-gov-1.jpg"
                alt="Megamenu image"
                width="500"
                height="309"
              />
              <div class="inner-block">
                <p class="paragraph rem-85">
                  Join our campaign to end phone fraud
                </p>
                <ActionLink
                  label="Learn more"
                  link="/blog"
                  size="small"
                  narrow
                  heavy
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
