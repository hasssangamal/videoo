let n = 0;
vac.addEventListener("click", (eo) => {
    const arrvideos = [
        `<iframe  id="frame" width="560" height="315" src="https://www.youtube.com/embed/AspEaxovpWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/06cZvaViwcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/kWawVg5IpC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/vTFZFvmpHu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id ="frame" width="560" height="315" src="https://www.youtube.com/embed/O3bXMaMH5e8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/kKEVc6iPBAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/VZfFpmjRUks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/kzYx9cxB6gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/GepcA4fFY80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/G_QZlS34d_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/klCPEuUbw7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/SbvFSXeKbVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/3AWAGo8NhfE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id ="frame" width="560" height="315" src="https://www.youtube.com/embed/wzWnhOtQhg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/xz9oMKZkJfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/Z3megGZrFMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/rcH-8GEVSAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframeid="frame" width="560" height="315" src="https://www.youtube.com/embed/03yw0uM9JXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/NB3GBh0H68I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="frame" width="560" height="315" src="https://www.youtube.com/embed/ws89cJHiDLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`






    ]
    containerframe.innerHTML = arrvideos[n];
    n++;
    if (arrvideos.length - 1 < n) {
        n = 0;
    }
});
