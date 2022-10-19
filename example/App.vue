<template>
    <div style="max-width: 800px; margin: auto; padding: 10px 20px">
        <header>
            <hgroup>
                <router-link to="/">
                    <h1>Fish.css</h1>
                </router-link>
                <p>
                    A CSS library focused on improving the default appearance of
                    HTML.
                </p>
            </hgroup>
        </header>

        <main>
            <router-view />
        </main>

        <footer>
            <p style="text-align: center; opacity: 0.6; margin-top: 2em">
                2022-PRESENT © Akara Chen
            </p>
        </footer>
    </div>
</template>
