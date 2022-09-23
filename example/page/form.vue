<template>
    <h2>Form</h2>
    <form>
        <label for="name">First Name</label>
        <input name="name" type="text" placeholder="Placeholder Test" />
        <label for="fruit">Fruit</label>
        <select id="fruit" required>
            <option value="" selected>Select a fruit…</option>
            <option>…</option>
        </select>
        <fieldset>
            <legend>Size</legend>
            <input type="radio" id="small" name="size" value="small" checked />
            <label for="small"> Small </label>
            <input type="radio" id="medium" name="size" value="medium" />
            <label for="medium"> Medium </label>
        </fieldset>
        <fieldset>
            <legend>Choose your monster's features:</legend>
            <input type="checkbox" id="scales" name="scales" checked />
            <label for="scales">Scales</label>
            <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Horns</label>
        </fieldset>
        <label>Select date</label>
        <input type="date" />
        <label>Select date and time</label>
        <input type="datetime-local" />
        <label>Select a range</label>
        <input type="file" />
        <button type="submit">Submit</button>
    </form>
</template>
