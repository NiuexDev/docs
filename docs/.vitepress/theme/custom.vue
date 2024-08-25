<template>
    <Layout>
        <template #not-found>
            <PageNotFound />
        </template>
        <template #aside-bottom>
            <CopyrightDesktop />
        </template>
        <template #doc-bottom>
            <CopyrightMobile />
        </template>
    </Layout>
</template>


<script setup>
import PageNotFound from './E404.vue'
import CopyrightDesktop from './copyright-desktop.vue'
import CopyrightMobile from './copyright-mobile.vue'

import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<style>
</style>