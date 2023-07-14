# CheaperExtension
Extension to find sites selling the exact same item for cheaper.

### Workflow
1. Service worker is pressed, invoking action event listener.
2. Toggles stored state to on.
3. Click event listener now is activated when there is a click on the screen.
4. Each click checks the entire z-axis and looks for IMG elements.
5. If an IMG element is found, the image is extracted.
6. Img is then sent to google reverse image search API, and there is a search done.
7. Pull top n results.
8. Depending on how much API info is available, either get price info or activate crawlers that look for the prices on each site. 

Open Questions
- How to deal with links.
- Need to send message from extension to client when turned on.