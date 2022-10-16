let id_media = document.getElementById("media");

chrome.tabs.query({}, tabs =>{
    // 再生中タブのみ表示
    tabs.filter(function(tab){
        return tab.audible;
    }).map(tab => render(tab))
});


function render(tab){
    const tab_li = document.getElementById('template').content;
    tab_li.querySelector(".tab-inner").dataset.tabId = tab.id;
    tab_li.querySelector(".icon").src = tab.favIconUrl;
    tab_li.querySelector(".title").textContent = tab.title;
    id_media.appendChild(document.importNode(tab_li, true));
}