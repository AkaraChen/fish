<template>
    <h2>Introduction</h2>
    <p>
        Fish.css is a CSS library focused on improving the default appearance of
        HTML, which can be used on any html-based document.
    </p>

    <h2>Usage</h2>
    <p>
        Fish.css is publish on npm, so you can install with any package manager
        you like:
    </p>
    <pre><code>pnpm add @akrc/fish</code></pre>
    <p>Or you can import Fish.css by CDN:</p>
    <pre><code lang="html">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/gh/AkaraChen/fish@latest/fish.css&quot;&gt;</code></pre>

    <p>
        Just write HTML tags and organise the HTML structure according to web
        standards.
    </p>

    <h2>Examples</h2>
    <div class="btn-group">
        <router-link class="btn" to="/text">Text</router-link>
        <router-link class="btn" to="/form">Form</router-link>
        <router-link class="btn" to="/other">Others</router-link>
    </div>
</template>

<style lang="less">
.btn-group {
    * + * {
        margin-left: 6px;
        margin-top: 6px;
    }
}
</style>
