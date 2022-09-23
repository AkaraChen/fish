<template>
    <form>
        <label for="name">First Name</label>
        <input name="name" type="text" placeholder="Placeholder Test">
        <label for="fruit">Fruit</label>
        <select id="fruit" required>
            <option value="" selected>Select a fruit…</option>
            <option>…</option>
        </select>
        <fieldset>
            <legend>Size</legend>
            <input type="radio" id="small" name="size" value="small" checked>
            <label for="small">
                Small
            </label>
            <input type="radio" id="medium" name="size" value="medium">
            <label for="medium">
                Medium
            </label>
        </fieldset>
        <fieldset>
            <legend>Choose your monster's features:</legend>

            <div>
                <input type="checkbox" id="scales" name="scales" checked>
                <label for="scales">Scales</label>
            </div>

            <div>
                <input type="checkbox" id="horns" name="horns">
                <label for="horns">Horns</label>
            </div>
        </fieldset>
        <button type="submit">Submit</button>
    </form>
</template>