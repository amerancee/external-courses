class CardCreateController {
    constructor(cardsData, cardsDataKey, disableAddButtons, renderIssues, renderEmptyIssue,
                restoreAddButtonsStates, localDataWrite) {
        this.state = {
            taskCounter: 1,
        };
        this.cardsData = cardsData;
        this.cardsDataKey = cardsDataKey;
        this.disableAddButtons = disableAddButtons;
        this.renderIssues = renderIssues;
        this.renderEmptyIssue = renderEmptyIssue;
        this.restoreAddButtonsStates = restoreAddButtonsStates;
        this.localDataWrite = localDataWrite;
        this.currentElement = null;
        this.currentElementType = null;
        this.currentElementText = null;
        this.indexTo = 0;
        this.valueHandler = this.valueHandler.bind(this);
        this.typeCard = this.typeCard.bind(this);
        this.choiceHandler = this.choiceHandler.bind(this);
    }

    renderNewIssueField(cardsData, articleId) {
        let fieldId = null;
        let cardListEl = document.querySelector(`#${articleId} .card-box-list`);

        if (articleId === "backlog") {
            fieldId = "new-card-text";
            cardListEl.insertAdjacentHTML(
                "beforeend",
                `
                        <li class="card-box-list__new-card">
                            <textarea class="card__new-name-field" rows="2" 
                                placeholder="Card name ..." id="${fieldId}"></textarea>
                        </li>`
            );

            this.currentElementType = "textarea";
            this.disableAddButtons();
            this.newIssueHandler(fieldId);

        } else {
            fieldId = "new-card-select";
            cardListEl.insertAdjacentHTML(
                "beforeend",
                `
                        <li class="card-box-list__new-card">
                            <select class="card__new-name-select" id="${fieldId}">
                                <option class="new-name-select__empty" selected="selected" 
                                    disabled="disabled">Choose card ...</option>
                            </select>
                        </li>`
            );

            let selectEl = document.getElementById(`${fieldId}`);
            cardsData.forEach((articleTask, articleIndex, articles) => {
                if (articleTask.id === articleId) {
                    this.indexTo = articleIndex;
                    articles[articleIndex - 1].issues.forEach((issue, issueIndex) => {
                        selectEl.insertAdjacentHTML(
                            "beforeend",
                            `<option class="new-name-select__card-name">${issue.name}</option>`
                        );
                    });
                }
            });

            this.currentElementType = "select";
            this.disableAddButtons();
            this.newIssueHandler(fieldId);
        }
    }

    updateIssues(cardsData) {
        let renderType = "update";
        cardsData.forEach((articleTask) => {
            let cardListEl = document.querySelector(`#${articleTask.id} .card-box-list`);
            this.renderIssues(articleTask, cardListEl, renderType);
            if (articleTask.issues.length === 0) {
                this.renderEmptyIssue(cardListEl);
            }
        });
        this.restoreAddButtonsStates();
    }

    newIssueHandler(id) {
        this.currentElement = document.getElementById(id);
        this.currentElement.focus();

        if (this.currentElementType === "textarea") {
            this.currentElement.addEventListener("keyup", this.valueHandler);
            this.currentElement.addEventListener("focusout", this.typeCard);
        } else if (this.currentElementType === "select") {
            this.currentElement.addEventListener("change", this.valueHandler);
        }
    }

    valueHandler(event) {
        this.currentElementText = this.currentElement.value;

        if (event.code === "Enter") {
            this.currentElementText.slice(0, -1);
            this.currentElement.removeEventListener("focusout", this.typeCard);
            this.typeCard(event);
            return;
        }

        if (this.currentElementType === "select") {
            this.choiceHandler();
        }
    }

    typeCard(event) {
        if (this.currentElementText !== null) {
            this.state.taskCounter += 1;
            this.cardsData[this.indexTo].issues.push({
                id: `task${this.state.taskCounter}`,
                name: this.currentElementText
            });
            this.localDataWrite(this.cardsDataKey, this.cardsData);
        }

        this.updateIssues(this.cardsData);
        this.currentElement.removeEventListener("keyup", this.valueHandler);

        if (event.type === "focusout") {
            this.currentElement.removeEventListener("focusout", this.typeCard);
        }

        this.resetListenProps();
    }

    choiceHandler() {
        let position = null;
        let taskIdFrom = null;
        this.cardsData[this.indexTo - 1].issues.forEach((item, index) => {
            if (item.name === this.currentElementText) {
                position = index;
                taskIdFrom = item.id;
            }
        });
        this.cardsData[this.indexTo].issues.push({
            id: taskIdFrom,
            name: this.currentElementText
        });
        this.cardsData[this.indexTo - 1].issues.splice(position, 1);
        this.localDataWrite(this.cardsDataKey, this.cardsData);
        this.updateIssues(this.cardsData);
        this.currentElement.removeEventListener("change", this.valueHandler);
    }

    resetListenProps() {
        this.currentElement = null;
        this.currentElementType = null;
        this.currentElementText = null;
        this.indexTo = 0;
    }
}

export default CardCreateController