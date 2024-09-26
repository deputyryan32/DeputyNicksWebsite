import * as skrollr from './skrollr.min.js';

window.onload = function () {
    parallax();
    setUpTabs();
};

function parallax() {
    var s = skrollr.init();

    var scene1 = document.getElementById('scene1');
    var parallaxInstance1 = new Parallax(scene1, {
        relativeInput: true
    });

    var scene2 = document.getElementById('scene2');
    var parallaxInstance2 = new Parallax(scene2);

    var sceneMaster = document.getElementById('scene-master');
    var parallaxInstanceMaster = new Parallax(sceneMaster);
}

function handleTabClick() {
    if ([...this.classList].includes('disabled')) return;

    const tabBtns = document.getElementsByClassName('tab-item');
    for (const tabBtn of tabBtns) {
        tabBtn.classList.remove('active');
    }

    const tabViews = document.getElementsByClassName('tab-content');
    for (const tabView of tabViews) {
        tabView.classList.remove('active');
    }

    setCurrentTab(this);
    // setTimeout(() => setCurrentTab(this), 250);
}

function setCurrentTab(tabItemRef) {
    tabItemRef.classList.add('active');

    // setTimeout(() => {
    const query = `.${tabItemRef.id}.tab-content`;
    const tabViewWrapper = document.querySelector(query);
    if (tabViewWrapper == null) return;
    tabViewWrapper.classList.add('active');
    // }, 250);
}

function setUpTabs() {
    const tabItems = document.getElementsByClassName('tab-item');
    for (const tabItem of tabItems) {
        tabItem.addEventListener("click", handleTabClick)
    }

    setCurrentTab(tabItems[0])
}
