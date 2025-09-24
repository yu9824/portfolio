document.addEventListener('DOMContentLoaded', function () {
    var anchors = document.querySelectorAll("a[href^='http']");
    anchors.forEach(function (a) {
        try {
            var url = new URL(a.getAttribute('href'), window.location.href);
            if (url.hostname && url.hostname !== window.location.hostname) {
                a.setAttribute('target', '_blank');
                a.setAttribute('rel', 'noopener');
            }
        } catch (e) {
            // 無効なURLは無視
        }
    });
});

