<template>
    <div class="container-sm">
        <header>
            <hgroup>
                <router-link to="/">
                    <h1>
                        Fish.css
                    </h1>
                </router-link>
                <p>A CSS library focused on improving the default appearance of HTML.</p>
            </hgroup>
        </header>

        <main>
            <router-view />
        </main>

        <footer>
            <p>2022-PRESENT © Akara Chen</p>
        </footer>
    </div>
</template>