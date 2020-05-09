"use strict"

const dataMock = [
    "apple", "append", "apply", "board", "big", "close",
    "cloud", "cut", "drive", "driver", "orange", "origin",
    "property", "popup", "request", "reply", "redux", "open",
];

let searchDelay = 100;
let minDelay = 100;
let maxDelay = 3000;
let inputPropsEl = document.getElementById("props-field");
let inputDataEl = document.getElementById("data-field");
let matchesListEl = document.getElementById("matches-list");

function findMatches(letters) {
    let result = [];

    if (letters) {
        letters.toLowerCase();
        dataMock.forEach((item, index) => {
            if (item.indexOf(letters) === 0) {
                result.push(item);
            }
        });
    } else {
        clearSearchItems();
        return;
    }

    if (result.length === 0) {
        renderEmptyItem(letters);
    } else {
        clearSearchItems();
        renderSearchItems(result);
    }
}

function renderSearchItems(words) {
    words.forEach((item, index) => {
       matchesListEl.insertAdjacentHTML(
          "beforeend",
          `
          <li class="searchbox__item" tabindex="${3 + index}">${item}</li>`
        );
    });
}

function renderEmptyItem(letters) {
    matchesListEl.innerHTML = `
        <li class="searchbox__item-empty" tabindex="3">There are no results for request: "${letters}"</li>
    `;
}

function clearSearchItems() {
    matchesListEl.innerHTML = "";
}

function debounce(findMatches, value) {
    setTimeout(() => {
        findMatches(value);
    }, searchDelay);
}

inputPropsEl.addEventListener("change", () => {
    if (inputPropsEl.value >= minDelay && inputPropsEl.value <= maxDelay) {
        searchDelay = inputPropsEl.value;
    }
});

inputDataEl.addEventListener("keyup", () => {
    if (inputDataEl.value.length === 0) {
        findMatches(null);
    } else {
        debounce(findMatches, inputDataEl.value);
    }
});