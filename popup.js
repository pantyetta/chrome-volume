let id_media = document.getElementById("media");

chrome.tabs.query({}, tabs => {
    // 再生中タブのみ表示
    let tab_list = tabs.filter(function (tab) {
        return tab.audible;
    });
    if(tab_list.length > 0){
        tab_list.map(tab => render(tab));
    }else{
        const no_play = document.createElement("p");
        no_play.appendChild(document.createTextNode("Not Play now"));
        id_media.appendChild(no_play);
    };
});


function render(tab) {
    const tab_li = document.getElementById('template').content;
    tab_li.querySelector(".tab-inner").dataset.tabId = tab.id;
    tab_li.querySelector(".icon img").src = tab.favIconUrl;
    tab_li.querySelector(".title").textContent = tab.title;
    id_media.appendChild(document.importNode(tab_li, true));
}

id_media.addEventListener('click', function (e) {
    e.path.filter(function (list) {
        return list.nodeName == "A"
    }).map(li_click => {
        chrome.tabs.update(parseInt(li_click.dataset.tabId, 10), {
            active: true
        }, a => {
            chrome.windows.update(a.windowId, {
                focused: true
            });
        });
    });
});