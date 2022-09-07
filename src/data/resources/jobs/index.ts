import Atlassian from '/assets/apps/atlassian-light.svg'
import Airbnb from '/assets/apps/airbnb-light.svg'
import Gitlab from '/assets/apps/gitlab-light.svg'
import Github from '/assets/apps/github-light.svg'
import Google from '/assets/apps/google-light.svg'
import Tnw from '/assets/apps/tnw-light.svg'
import Hubspot from '/assets/apps/hubspot-light.svg'
import Dribbble from '/assets/apps/dribbble-light.svg'
import Monday from '/assets/apps/monday-light.svg'

import Vue from '/assets/stacks/vuejs-light.svg'
import React from '/assets/stacks/reactjs-light.svg'
import Sass from '/assets/stacks/sass-light.svg'
import Javascript from '/assets/stacks/js-light.svg'
import NodeJS from '/assets/stacks/nodejs-light.svg'
import Typescript from '/assets/stacks/typescript-light.svg'
import Golang from '/assets/stacks/golang.svg'
import Bulma from '/assets/stacks/bulma-light.svg'
import Html5 from '/assets/stacks/html5-light.svg'
import Illustrator from '/assets/stacks/illustrator-light.svg'
import Photoshop from '/assets/stacks/photoshop-light.svg'
import Sketch from '/assets/stacks/sketch-light.svg'
import STRAPI from '/assets/stacks/strapi-light.svg'

import Kubernetes from '/assets/stacks/kubernetes.svg'
import Docker from '/assets/stacks/docker-light.svg'
import GoogleCloud from '/assets/stacks/google-cloud-light.svg'
import Terraform from '/assets/stacks/terraform-light.svg'
import Ansible from '/assets/stacks/ansible.svg'
import Kafka from '/assets/stacks/kafka.svg'
import Mongodb from '/assets/stacks/mongodb-light.svg'
import Redis from '/assets/stacks/redis.svg'

import type { Job, IconFeature } from '/@src/types'

export const jobs: Job[] = [
  {
    icon: Atlassian,
    title: 'Full Stack Developer',
    slug: 'full-stack-developer',
    link: '/jobs/full-stack-developer',
    category: 'Engineering',
    date: '07/20/2022',
    abstract:
      'You are a mission driven developer that is addicted to personal growth',
    location: 'Toronto, ON',
    duration: 'Full Time',
    salary: '$45k-$55k annual',
    contact: 'mailto:careers@vulk.cssninja.io?subject=junior-backend-developer',
    content: {
      description: [
        {
          title: `About us`,
          text: `Sipsters are on a mission to build a safer connected tomorrow. Our suite of innovative products are built to eradicate fraudulent and spam calling as well as provide next generation experiences and services to the telecommunications industry. We are a hard-working team that are detail oriented and take pride in everything that we do. We are growing at a rapid pace and are looking for awesome talent that share our values and our mission.`,
        },
        {
          title: `Overview`,
          text: `As a Full Stack Developer, you’ll be responsible to produce scalable software solutions. You’ll be part of a cross-functional team that’s responsible for the full software development life cycle, from conception to deployment. You should be comfortable around both front-end and back-end coding languages, development frameworks and third-party libraries. You should also be a team player with a knack for visual design and utility.`,
        },
        {
          title: `Your Profile`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
      ],
      aptitude: [
        {
          title: 'Skills',
          skills: [
            `Bachelor degree in computer programming`,
            `5+ years experience in software engineering`,
            `Felling confident in micro-service environments`,
          ],
        },
        {
          title: 'Bonus Skills',
          skills: [
            `Strong english redaction, tech writer`,
            `Google GCP, Amazon AWS or Azure provider`,
            `A little experience on online game app`,
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            `Autonomous and self-taught`,
            `Business oriented vision`,
            `Technical teaching skills`,
          ],
        },
      ],
      technologies: [
        {
          title: 'Required stacks',
          tools: [
            {
              icon: Javascript,
              title: 'Javascript',
            },
            {
              icon: Vue,
              title: 'Vue',
            },
            {
              icon: NodeJS,
              title: 'NodeJS',
            },
            {
              icon: Mongodb,
              title: 'MongoDB',
            },
            {
              icon: Kubernetes,
              title: 'Kubernetes',
            },
          ],
        },
        {
          title: 'Optionnal stacks',
          tools: [
            {
              icon: Typescript,
              title: 'Typescript',
            },
            {
              icon: Golang,
              title: 'Golang;',
            },
          ],
        },
      ],
    },
  },
  {
    icon: Airbnb,
    title: 'App Developer (iOS)',
    slug: 'app-developer',
    abstract:
      'You love building apps and stopping spam. Then this is your dream job',
    category: 'Engineering',
    date: '08/29/2022',
    link: '/jobs/app-developer',
    location: 'Toronto, ON',
    duration: 'Full Time',
    salary: '$45k-$55k annual',
    contact: 'mailto:careers@vulk.cssninja.io?subject=junior-backend-developer',
    content: {
      description: [
        {
          title: `About us`,
          text: `Sipsters are on a mission to build a safer connected tomorrow. Our suite of innovative products are built to eradicate fraudulent and spam calling as well as provide next generation experiences and services to the telecommunications industry. We are a hard-working team that are detail oriented and take pride in everything that we do. We are growing at a rapid pace and are looking for awesome talent that share our values and our mission.`,
        },
        {
          title: `Overview`,
          text: `As an App Developer (iOS), you will work as part of the engineering team to bring our suite of web products to the iOS platform. You’ll be responsible for the whole product lifecycle from designing, building and launching our apps.`,
        },
        {
          title: `Your Profile`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
      ],
      aptitude: [
        {
          title: 'Skills',
          skills: [
            `Bachelor degree in computer programming`,
            `5+ years experience in software engineering`,
            `Felling confident in micro-service environments`,
          ],
        },
        {
          title: 'Bonus Skills',
          skills: [
            `Strong english redaction, tech writer`,
            `Google GCP, Amazon AWS or Azure provider`,
            `A little experience on online game app`,
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            `Autonomous and self-taught`,
            `Business oriented vision`,
            `Technical teaching skills`,
          ],
        },
      ],
      technologies: [
        {
          title: 'Required stacks',
          tools: [
            {
              icon: Javascript,
              title: 'Javascript',
            },
            {
              icon: Vue,
              title: 'Vue',
            },
            {
              icon: NodeJS,
              title: 'NodeJS',
            },
            {
              icon: Mongodb,
              title: 'MongoDB',
            },
            {
              icon: Kubernetes,
              title: 'Kubernetes',
            },
          ],
        },
        {
          title: 'Optionnal stacks',
          tools: [
            {
              icon: Typescript,
              title: 'Typescript',
            },
            {
              icon: Golang,
              title: 'Golang;',
            },
          ],
        },
      ],
    },
  },
  {
    icon: Atlassian,
    title: 'AI Engineer',
    slug: 'ai-engineer',
    abstract: 'You speak in ones and zeroes',
    link: '/jobs/ai-engineer',
    category: 'Engineering',
    date: '07/20/2022',
    location: 'Toronto, ON',
    duration: 'Full Time',
    salary: '$45k-$55k annual',
    contact: 'mailto:careers@vulk.cssninja.io?subject=junior-backend-developer',
    content: {
      description: [
        {
          title: `About us`,
          text: `Sipsters are on a mission to build a safer connected tomorrow. Our suite of innovative products are built to eradicate fraudulent and spam calling as well as provide next generation experiences and services to the telecommunications industry. We are a hard-working team that are detail oriented and take pride in everything that we do. We are growing at a rapid pace and are looking for awesome talent that share our values and our mission.`,
        },
        {
          title: `Overview`,
          text: `We are seeking a dedicated artificial intelligence engineer to join us on our mission of making telecommunications safe again by eliminating spam calling and voice hacking. You will work as part of a diverse team of software developers to develop new models and algorithms to apply artificial intelligence to solve this real-world problem and change the future. As an artificial intelligence engineer, you will be expected to have a keen interest in artificial intelligence, machine learning, and staying current with the latest developments in a rapidly changing field. Your duties will include collecting and analyzing data sets to identify patterns and develop predictive algorithmic models.`,
        },
        {
          title: `Your Profile`,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec augue ac magna mattis venenatis in ac orci. Etiam interdum consectetur auctor. Nulla et est vel eros sodales *euismod nec ut lorem*. Sed scelerisque ante vitae lobortis venenatis.`,
        },
      ],
      aptitude: [
        {
          title: 'Skills',
          skills: [
            `Bachelor degree in computer programming`,
            `5+ years experience in software engineering`,
            `Felling confident in micro-service environments`,
          ],
        },
        {
          title: 'Bonus Skills',
          skills: [
            `Strong english redaction, tech writer`,
            `Google GCP, Amazon AWS or Azure provider`,
            `A little experience on online game app`,
          ],
        },
        {
          title: 'Soft Skills',
          skills: [
            `Autonomous and self-taught`,
            `Business oriented vision`,
            `Technical teaching skills`,
          ],
        },
      ],
      technologies: [
        {
          title: 'Required stacks',
          tools: [
            {
              icon: Javascript,
              title: 'Javascript',
            },
            {
              icon: Vue,
              title: 'Vue',
            },
            {
              icon: NodeJS,
              title: 'NodeJS',
            },
            {
              icon: Mongodb,
              title: 'MongoDB',
            },
            {
              icon: Kubernetes,
              title: 'Kubernetes',
            },
          ],
        },
        {
          title: 'Optionnal stacks',
          tools: [
            {
              icon: Typescript,
              title: 'Typescript',
            },
            {
              icon: Golang,
              title: 'Golang;',
            },
          ],
        },
      ],
    },
  },
]
