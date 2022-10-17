chrome.tabs.get(
    56914902,
    tab =>{
        chrome.desktopCapture.chooseDesktopMedia(
            ['tab', 'audio'],
            tab,
            (streamId, e) =>{
                console.log(streamId, e);
            }
        )
    }
);


// 56914902