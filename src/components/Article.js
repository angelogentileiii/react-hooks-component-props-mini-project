import React from "react";

function emojiMinutes (minutes) {
    let defaultInterval = 5
    let defaultEmoji = "☕"
    let emojis = "";

    if (minutes >= 30) {
        defaultInterval = 10;
        defaultEmoji = "🍱"
    }

    for(let x = 0; x < minutes; x += defaultInterval) {
            emojis += `${defaultEmoji}`
    }
    return emojis
}

function Article ({ title, date = "January 1, 1970", preview, minutes }) {


    return (
        <article>
            <h3>{title}</h3>
            <small>{date} | {emojiMinutes(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;