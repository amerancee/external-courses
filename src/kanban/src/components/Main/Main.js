import CardCreateController from "./CardCreateController.js";

class Main {
    constructor() {
        this.cardsData = [];
        this.cardsDataKey = "localCardsData";
        this.cardsDataMock = [
            {
                id: 'backlog',
                title: 'Backlog',
                issues: [
                    {
                        id: 'task1',
                        name: 'Login page – performance issues',
                    },
                ],
            },
            {
                id: 'ready',
                title: 'Ready',
                issues: [],
            },
            {
                id: 'in-progress',
                title: 'In Progress',
                issues: [],
            },
            {
                id: 'finished',
                title: 'Finished',
                issues: [],
            },
        ];
        this.controller = new CardCreateController(
            this.cardsData,
            this.cardsDataKey,
            this.disableAddButtons,
            this.renderIssues,
            this.renderEmptyIssue,
            this.restoreAddButtonsStates,
            this.localDataWrite
        );
    }

    start() {
        this.localDataCheck(this.cardsDataKey, this.cardsData, this.cardsDataMock);
        this.renderCardsData(this.cardsData);
        this.startAddBtnListeners(this.cardsData);
    }

    renderCardsData(cardsData) {
        let renderType = "load";
        let mainBox = document.getElementById("main");
        cardsData.forEach((articleTask) => {
            mainBox.insertAdjacentHTML(
                "beforeend",
                `
                        <article class="card-box main__card-box" id="${articleTask.id}">
                            <div class="card-box__head-box">
                                <h3 class="head-box__heading">${articleTask.title}</h3>
                                <button class="btn-show-props head-box__btn-show-props" 
                                    title="Show properties">&bull;&bull;&bull;</button>
                            </div>
                            <div class="card-box__content">
                                <ul class="card-box-list"></ul>
                                <button class="btn-add-card card-box__content-btn btn-add-card__active" 
                                    id="btn-add-${articleTask.id}">
                                    <img class="btn-add-card__symbol" src="./public/images/empty-plus-icon.svg" 
                                    alt="plus"/>
                                    <span class="btn-add-card__text">Add card</span>
                                </button>
                            </div>
                        </article>`
            );
            let cardListEl = document.querySelector(`#${articleTask.id} .card-box-list`);

            if (articleTask.issues.length > 0) {
                this.renderIssues(articleTask, cardListEl, renderType);
            } else {
                this.renderEmptyIssue(cardListEl);
            }
        });

        this.restoreAddButtonsStates();
    }

    renderIssues(articleTask, cardList, type) {
        if (type === "update") {
            // eslint-disable-next-line no-param-reassign
            cardList.innerHTML = "";
        }
        articleTask.issues.forEach((issue) => {
            cardList.insertAdjacentHTML(
                "beforeend",
                `
                        <li class="card-box-list__card" id="${articleTask.id}-${issue.id}">
                            <p class="card__description">${issue.name}</p>
                        </li>`
            );
        });
    }

    renderEmptyIssue(cardListEl) {
        cardListEl.insertAdjacentHTML(
            "beforeend",
            `
                    <li class="card-box-list__empty-card">
                        <p class="card__description">&#128542; There are no added cards</p>
                    </li>`
        );
    }

    localDataLoad(key, data) {
        let dataToReceive = [];
        data.splice(0, data.length);
        dataToReceive = JSON.parse(localStorage.getItem(key));
        dataToReceive.forEach((item) => {
            data.push(item);
        });
        return data;
    }

    localDataWrite(key, data) {
        let dataToSend = "";
        dataToSend = JSON.stringify(data);
        localStorage.setItem(key, dataToSend);
    }

    localDataWriteMock(key, data, mock) {
        let dataToSend = "";
        dataToSend = JSON.stringify(mock);
        localStorage.setItem(key, dataToSend);
        mock.forEach((item) => {
            data.push(item);
        });
    }

    localDataCheck(key, data, mock) {
        if (localStorage.getItem(key) === null) {
            this.localDataWriteMock(key, data, mock);
        } else {
            this.localDataLoad(key, data);
        }
    }

    startAddBtnListeners(cardsData) {
        let btnAddEl = null;
        cardsData.forEach((articleTask) => {
            btnAddEl = document.getElementById(`btn-add-${articleTask.id}`);
            btnAddEl.addEventListener("click", () => {
                this.controller.renderNewIssueField(cardsData, articleTask.id);
            });
        });
    }

    disableAddButtons() {
        let btn = null;
        this.cardsData.forEach((item) => {
            btn = document.getElementById(`btn-add-${item.id}`);
            btn.setAttribute("disabled", "disabled");
            btn.classList.remove("btn-add-card__active");
        });
    }

    restoreAddButtonsStates() {
        let btn = null;
        for (let i = 1; i < this.cardsData.length; i++) {
            btn = document.getElementById(`btn-add-${this.cardsData[i].id}`);
            if (this.cardsData[i - 1].issues.length > 0) {
                btn.removeAttribute("disabled");
                btn.classList.add("btn-add-card__active");
            } else {
                btn.setAttribute("disabled", "disabled");
                btn.classList.remove("btn-add-card__active");
            }
        }
        btn = document.getElementById(`btn-add-${this.cardsData[0].id}`);
        btn.removeAttribute("disabled");
        btn.classList.add("btn-add-card__active");
    }

}

export default Main