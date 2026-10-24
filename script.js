
function tsd(box) {
    box.classList.toggle('opsc');
    const status = box.querySelector('.scst');

    if (box.classList.contains('opsc')) {
        status.style.color = "var(--c2)";
        status.style.borderColor = "rgba(56, 189, 248, 0.4)";
        status.style.background = "rgba(56, 189, 248, 0.1)";
    } else {
        status.style.color = "var(--c3)";
        status.style.borderColor = "rgba(16, 185, 129, 0.25)";
        status.style.background = "rgba(16, 185, 129, 0.1)";
    }
}
