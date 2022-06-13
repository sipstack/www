<script setup lang="ts"></script>

<template>
  <div class="code-window">
    <div class="window-head">
      <div class="bot mr-2">Inspecto</div>
      <Tag label="Bot" />
      <p class="paragraph rem-85 ml-2">commented 2 hours ago</p>
    </div>
    <div class="window-body">
      <div class="body-content">
        <p class="paragraph rem-95 mb-2">
          This pull request is being automatically deployed on staging. To see
          the status of your deployment, click below:
        </p>
        <div class="body-content-line">
          <i class="iconify" data-icon="feather:eye"></i>
          <span class="text">Inspect:</span>
          <a>https://vulk.io/acme/my-application/rs8kjn5</a>
        </div>
        <div class="body-content-line">
          <i class="iconify" data-icon="feather:monitor"></i>
          <span class="text">Preview:</span>
          <a>https://my-application.vulk.app</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.code-window {
  position: relative;
  width: 100%;
  height: 190px;
  background: var(--card-bg-color);
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

    .bot {
      font-family: var(--font);
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--title-color);
      margin-left: 0.5rem;
    }
  }

  .window-body {
    height: calc(190px - 2.75rem);
    display: flex;
    align-items: stretch;

    .body-content {
      height: 100%;
      width: 100%;
      padding: 1rem;
    }

    .body-content-line {
      display: flex;
      align-items: center;
      height: 1.75rem;
      font-size: 0.9rem;
      font-family: var(--font);
      color: var(--title-color);

      .iconify {
        font-size: 1rem;
        color: var(--light-text);
      }

      span {
        &.text {
          font-weight: 600;
          color: var(--title-color);
          padding: 0 0.25rem;
        }
      }

      a {
        color: var(--primary);
      }

      .bold {
        font-weight: 600;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .code-window {
    height: 210px;

    .window-body {
      .body-content-line {
        .iconify,
        span {
          display: none;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .code-window {
    height: 210px;

    .window-head {
      .paragraph {
        font-size: 0.8rem !important;
      }
    }

    .window-body {
      .body-content-line {
        a {
          overflow: hidden;
          max-width: 200px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .iconify,
        span {
          display: none;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .code-window {
    height: 210px;

    .window-head {
      .paragraph {
        font-size: 0.8rem !important;
      }
    }

    .window-body {
      .body-content-line {
        a {
          overflow: hidden;
          max-width: 200px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .iconify,
        span {
          display: none;
        }
      }
    }
  }
}
</style>
