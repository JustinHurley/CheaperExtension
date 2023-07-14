// Event listener to capture user clicks
document.addEventListener("click", async (event) => {
    const clickX = event.clientX;
    const clickY = event.clientY;
    
    // Get all the elements at the clicked position
    const elements = document.elementsFromPoint(clickX, clickY);

    // Pass through all elts on z-layer
    let imageSrc = "";
    elements.forEach((element) => {
        if (element.nodeName === "IMG") {
            imageSrc = element.getAttribute("src");
        }
    })

    console.log("Sending message.")
    const response = await chrome.runtime.sendMessage({ code: 200, imageSrc: imageSrc });

    console.log(response);
});
