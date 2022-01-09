import { createApp } from 'vue'
import App from './App.vue'
import './index.css';

import { createRouter, createWebHistory } from 'vue-router';
import Home from "./components/Home.vue";
import About from "./components/About.vue";

import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    uri: 'http://127.0.0.1:8000/graphql',
})


const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})



createApp(App)
    .use(apolloProvider)
    .use(router)
    .mount('#app')
